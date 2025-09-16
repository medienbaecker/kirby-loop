<?php

use \Kirby\Cms\App as Kirby;
use \Moinframe\Loop\App;
use \Moinframe\Loop\Options;
use \Moinframe\Loop\Routes;
use \Kirby\Filesystem\F;
use \Kirby\Toolkit\Str;

F::loadClasses([
    'moinframe\\loop\\App' => 'src/App.php',
    'moinframe\\loop\\Database' => 'src/Database.php',
    'moinframe\\loop\\Middleware' => 'src/Middleware.php',
    'moinframe\\loop\\Options' => 'src/Options.php',
    'moinframe\\loop\\Routes' => 'src/Routes.php',
    'moinframe\\loop\\Models\\Comment' => 'src/Models/Comment.php',
    'moinframe\\loop\\Models\\Reply' => 'src/Models/Reply.php',
    'moinframe\\loop\\Enums\\CommentStatus' => 'src/Enums/CommentStatus.php',
], __DIR__);

Kirby::plugin('moinframe/loop', [
    'areas' => [
        'loop' => function () {
            return [
                'label' => 'Feedback',
                'icon' => 'chat',
                'menu' => true,
                'views' => [
                    [
                        'pattern' => 'loop',
                        'action' => function () {
                            return [
                                'component' => 'k-loop-view',
                                'props' => [
                                    'comments' => function () {
                                        $comments = App::getAllCommentsWithPageInfo();
                                        $panelComments = [];
                                        foreach ($comments as $comment) {
                                            $page = page("page://" . $comment['page']);
                                            $pageTitle = $comment['pageExists'] ? $comment['pageTitle'] : $comment['pageTitle'] . ' (missing)';

                                            // Count replies
                                            $replyCount = isset($comment['replies']) ? count($comment['replies']) : 0;
                                            $replyInfo = $replyCount > 0 ? ' • ' . $replyCount . ' ' . ($replyCount === 1 ? t('moinframe.loop.ui.panel.reply.singular') : t('moinframe.loop.ui.panel.reply.plural')) : '';

                                            $panelComments[] = [
                                                'id' => $comment['id'],
                                                'text' => '#' . $comment['id'] . ' — ' . Str::excerpt($comment['comment'], 120),
                                                'info' => $pageTitle . ' • ' . $comment['author'] . $replyInfo,
                                                'comment' => $comment,
                                                'preview' => $page?->url(),
                                                'panel' => $page?->panel()->url()
                                            ];
                                        }

                                        // Sort by page sorting number first, then by status (open before resolved), then by ID
                                        usort($panelComments, function ($a, $b) {
                                            // Get page objects to access sorting numbers
                                            $pageA = page("page://" . $a['comment']['page']);
                                            $pageB = page("page://" . $b['comment']['page']);

                                            $sortA = $pageA ? $pageA->num() : 999999;
                                            $sortB = $pageB ? $pageB->num() : 999999;

                                            $pageCompare = $sortA - $sortB;
                                            if ($pageCompare !== 0) {
                                                return $pageCompare;
                                            }

                                            // Sort by status (OPEN before RESOLVED)
                                            $statusA = $a['comment']['status'] === 'OPEN' ? 0 : 1;
                                            $statusB = $b['comment']['status'] === 'OPEN' ? 0 : 1;
                                            $statusCompare = $statusA - $statusB;
                                            if ($statusCompare !== 0) {
                                                return $statusCompare;
                                            }

                                            // Finally sort by ID
                                            return $a['id'] - $b['id'];
                                        });

                                        return $panelComments;
                                    },
                                    'translations' => function () {
                                        return [
                                            'title' => 'Feedback',
                                            'comments' => t('moinframe.loop.ui.panel.section.comments'),
                                            'filter_label' => t('moinframe.loop.ui.panel.filter.label'),
                                            'filter_placeholder' => t('moinframe.loop.ui.panel.show.all'),
                                            'filter_open' => t('moinframe.loop.ui.panel.filter.open.inactive'),
                                            'filter_resolved' => t('moinframe.loop.ui.panel.filter.resolved.inactive'),
                                            'empty_no_comments' => t('moinframe.loop.ui.panel.no.comments'),
                                            'empty_no_open' => 'No ' . strtolower(t('moinframe.loop.ui.panel.filter.open')),
                                            'empty_no_resolved' => t('moinframe.loop.ui.panel.no.resolved'),
                                            'action_open_page' => t('moinframe.loop.ui.panel.action.open_page'),
                                            'action_resolve' => t('moinframe.loop.ui.panel.action.resolve'),
                                            'action_reopen' => t('moinframe.loop.ui.panel.action.reopen'),
                                            'action_delete' => t('moinframe.loop.ui.panel.action.delete'),
                                            'message_resolved' => 'Comment resolved successfully',
                                            'message_reopened' => 'Comment reopened successfully',
                                            'message_deleted' => 'Comment deleted successfully',
                                            'loading' => 'Loading...'
                                        ];
                                    }
                                ]
                            ];
                        }
                    ]
                ]
            ];
        }
    ],
    'translations' => [
        'en' => [
            // General errors
            'moinframe.loop.csrf.invalid' => 'Invalid CSRF token',
            'moinframe.loop.field.required' => 'Missing required field: {field}',

            // Page errors
            'moinframe.loop.page.not.found' => 'Page with id {pageId} not found',
            'moinframe.loop.page.path.not.found' => 'Page not found: {path}',

            // Comment validation
            'moinframe.loop.comment.required' => 'Comment text is required',
            'moinframe.loop.comment.max.length' => 'Comment text must be less than 5000 characters',
            'moinframe.loop.comment.validation.failed' => 'Comment validation failed: {errors}',
            'moinframe.loop.comment.validation.error' => 'Comment validation failed: {errors}',
            'moinframe.loop.comment.creation.failed' => 'Comment creation failed: {error}',
            'moinframe.loop.comment.add.failed' => 'Failed to add comment: {error}',

            // Reply validation
            'moinframe.loop.reply.validation.failed' => 'Reply validation failed: {errors}',
            'moinframe.loop.reply.validation.error' => 'Reply validation failed: {errors}',
            'moinframe.loop.reply.creation.failed' => 'Reply creation failed: {error}',
            'moinframe.loop.reply.add.failed' => 'Failed to add reply: {error}',
            'moinframe.loop.reply.index.error' => 'Reply {index}: {error}',

            // Author validation
            'moinframe.loop.author.required' => 'Author is required',
            'moinframe.loop.author.max.length' => 'Author name must be less than 255 characters',

            // Page field validation
            'moinframe.loop.page.required' => 'Page identifier is required',
            'moinframe.loop.page.max.length' => 'Page identifier must be less than 255 characters',

            // Selector validation
            'moinframe.loop.selector.required' => 'Element selector is required',
            'moinframe.loop.selector.max.length' => 'Element selector must be less than 1000 characters',
            'moinframe.loop.selector.offset.x.min' => 'Selector offset X must be non-negative',
            'moinframe.loop.selector.offset.y.min' => 'Selector offset Y must be non-negative',

            // URL validation
            'moinframe.loop.url.format.invalid' => 'URL format is invalid',
            'moinframe.loop.url.max.length' => 'URL must be less than 2048 characters',

            // Position validation
            'moinframe.loop.page.position.x.min' => 'Page position X must be non-negative',
            'moinframe.loop.page.position.y.min' => 'Page position Y must be non-negative',

            // Other field validation
            'moinframe.loop.timestamp.min' => 'Timestamp must be non-negative',
            'moinframe.loop.parent.id.min' => 'Parent ID must be non-negative',
            'moinframe.loop.parent.id.required' => 'Valid parent comment ID is required',

            // Welcome dialog
            'moinframe.loop.welcome.headline' => 'Welcome! 👋',
            'moinframe.loop.welcome.text' => 'We\'re excited to hear your thoughts! This page has an interactive feedback system that lets you comment directly on any element. Simply use the action bar at the {position} of your screen to switch between browsing and commenting mode. When in commenting mode, click anywhere on the page to leave your feedback.',

            // Frontend UI translations
            'moinframe.loop.ui.comment.placeholder' => 'Enter your comment...',
            'moinframe.loop.ui.comment.submit' => 'Submit',
            'moinframe.loop.ui.comment.cancel' => 'Cancel',
            'moinframe.loop.ui.comment.keyboardHint' => '⌘+Enter or Ctrl+Enter to submit',
            'moinframe.loop.ui.comment.replies.aria.label' => 'Show replies',
            'moinframe.loop.ui.reply.placeholder' => 'Write a reply...',
            'moinframe.loop.ui.reply.submit' => 'Reply',
            'moinframe.loop.ui.panel.no.comments' => 'No comments. Add your first comment to get started.',
            'moinframe.loop.ui.header.browse.mode' => 'Browse',
            'moinframe.loop.ui.header.comment.mode' => 'Comment',
            'moinframe.loop.ui.header.aria.count' => 'unresolved comments',
            'moinframe.loop.ui.welcome.guest.name.placeholder' => 'Enter your name',
            'moinframe.loop.ui.welcome.continue' => 'Continue',
            'moinframe.loop.ui.welcome.dismiss' => 'Dismiss',
            'moinframe.loop.ui.header.position.top' => 'top',
            'moinframe.loop.ui.header.position.bottom' => 'bottom',
            'moinframe.loop.ui.comment.mark.solved' => 'Resolve',
            'moinframe.loop.ui.comment.mark.unsolved' => 'Reopen',
            'moinframe.loop.ui.comment.maker.aria.label' => 'Jump to marker',
            'moinframe.loop.ui.comment.summary.aria.label' => 'Comment by',
            'moinframe.loop.ui.reply.aria.label' => 'Reply by',
            'moinframe.loop.ui.panel.open' => 'Open comments',
            'moinframe.loop.ui.panel.show.resolved' => 'Show Resolved Only',
            'moinframe.loop.ui.panel.show.all' => 'Show All Comments',
            'moinframe.loop.ui.panel.filter.open' => 'Open',
            'moinframe.loop.ui.panel.filter.resolved' => 'Resolved',
            'moinframe.loop.ui.panel.filter.open.active' => 'Show open comments (currently selected)',
            'moinframe.loop.ui.panel.filter.open.inactive' => 'Show open comments',
            'moinframe.loop.ui.panel.filter.resolved.active' => 'Show resolved comments (currently selected)',
            'moinframe.loop.ui.panel.filter.resolved.inactive' => 'Show resolved comments',
            'moinframe.loop.ui.panel.menu.open' => 'Open menu',
            'moinframe.loop.ui.panel.menu.filter.title' => 'Show Comments',
            'moinframe.loop.ui.panel.no.resolved' => 'No resolved comments yet.',
            'moinframe.loop.ui.panel.action.open_page' => 'Open Page',
            'moinframe.loop.ui.panel.action.resolve' => 'Resolve',
            'moinframe.loop.ui.panel.action.reopen' => 'Reopen',
            'moinframe.loop.ui.panel.action.delete' => 'Delete',
            'moinframe.loop.ui.panel.filter.label' => 'Filter',
            'moinframe.loop.ui.panel.section.comments' => 'Comments',
            'moinframe.loop.ui.panel.reply.singular' => 'reply',
            'moinframe.loop.ui.panel.reply.plural' => 'replies',

            // Time formatting
            'moinframe.loop.ui.time.just_now' => 'just now',
            'moinframe.loop.ui.time.minute_ago' => 'a minute ago',
            'moinframe.loop.ui.time.minutes_ago' => '{count} minutes ago',
            'moinframe.loop.ui.time.hour_ago' => 'an hour ago',
            'moinframe.loop.ui.time.hours_ago' => '{count} hours ago',
            'moinframe.loop.ui.time.yesterday' => 'yesterday',
            'moinframe.loop.ui.time.days_ago' => '{count} days ago'
        ],
        'de' => [
            // General errors
            'moinframe.loop.csrf.invalid' => 'Ungültiges CSRF-Token',
            'moinframe.loop.field.required' => 'Pflichtfeld fehlt: {field}',

            // Page errors
            'moinframe.loop.page.not.found' => 'Seite mit ID {pageId} nicht gefunden',
            'moinframe.loop.page.path.not.found' => 'Seite nicht gefunden: {path}',

            // Comment validation
            'moinframe.loop.comment.required' => 'Kommentartext ist erforderlich',
            'moinframe.loop.comment.max.length' => 'Kommentartext darf maximal 5000 Zeichen lang sein',
            'moinframe.loop.comment.validation.failed' => 'Kommentar-Validierung fehlgeschlagen: {errors}',
            'moinframe.loop.comment.validation.error' => 'Kommentar-Validierung fehlgeschlagen: {errors}',
            'moinframe.loop.comment.creation.failed' => 'Kommentar-Erstellung fehlgeschlagen: {error}',
            'moinframe.loop.comment.add.failed' => 'Kommentar konnte nicht hinzugefügt werden: {error}',

            // Reply validation
            'moinframe.loop.reply.validation.failed' => 'Antwort-Validierung fehlgeschlagen: {errors}',
            'moinframe.loop.reply.validation.error' => 'Antwort-Validierung fehlgeschlagen: {errors}',
            'moinframe.loop.reply.creation.failed' => 'Antwort-Erstellung fehlgeschlagen: {error}',
            'moinframe.loop.reply.add.failed' => 'Antwort konnte nicht hinzugefügt werden: {error}',
            'moinframe.loop.reply.index.error' => 'Antwort {index}: {error}',

            // Author validation
            'moinframe.loop.author.required' => 'Autor ist erforderlich',
            'moinframe.loop.author.max.length' => 'Autorname darf maximal 255 Zeichen lang sein',

            // Page field validation
            'moinframe.loop.page.required' => 'Seiten-Identifikator ist erforderlich',
            'moinframe.loop.page.max.length' => 'Seiten-Identifikator darf maximal 255 Zeichen lang sein',

            // Selector validation
            'moinframe.loop.selector.required' => 'Element-Selektor ist erforderlich',
            'moinframe.loop.selector.max.length' => 'Element-Selektor darf maximal 1000 Zeichen lang sein',
            'moinframe.loop.selector.offset.x.min' => 'Selektor-Offset X muss nicht-negativ sein',
            'moinframe.loop.selector.offset.y.min' => 'Selektor-Offset Y muss nicht-negativ sein',

            // URL validation
            'moinframe.loop.url.format.invalid' => 'URL-Format ist ungültig',
            'moinframe.loop.url.max.length' => 'URL darf maximal 2048 Zeichen lang sein',

            // Position validation
            'moinframe.loop.page.position.x.min' => 'Seitenposition X muss nicht-negativ sein',
            'moinframe.loop.page.position.y.min' => 'Seitenposition Y muss nicht-negativ sein',

            // Other field validation
            'moinframe.loop.timestamp.min' => 'Zeitstempel muss nicht-negativ sein',
            'moinframe.loop.parent.id.min' => 'Eltern-ID muss nicht-negativ sein',
            'moinframe.loop.parent.id.required' => 'Gültige Eltern-Kommentar-ID ist erforderlich',

            // Welcome dialog
            'moinframe.loop.welcome.headline' => 'Willkommen! 👋',
            'moinframe.loop.welcome.text' => 'Wir freuen uns auf Ihr Feedback! Diese Seite verfügt über ein interaktives Feedback-System, mit dem Sie direkt zu jedem Element kommentieren können. Verwenden Sie einfach die Aktionsleiste {position} an ihrem Bildschirm, um zwischen Browse- und Kommentar-Modus zu wechseln. Im Kommentar-Modus klicken Sie einfach irgendwo auf die Seite, um Ihr Feedback zu hinterlassen.',

            // Frontend UI translations
            'moinframe.loop.ui.comment.placeholder' => 'Ihr Kommentar...',
            'moinframe.loop.ui.comment.submit' => 'Senden',
            'moinframe.loop.ui.comment.cancel' => 'Abbrechen',
            'moinframe.loop.ui.comment.keyboardHint' => '⌘+Enter oder Strg+Enter zum Senden',
            'moinframe.loop.ui.comment.replies.aria.label' => 'Antworten anzeigen',
            'moinframe.loop.ui.comment.maker.aria.label' => 'Springe zu Marker',
            'moinframe.loop.ui.comment.summary.aria.label' => 'Kommentar von',
            'moinframe.loop.ui.reply.aria.label' => 'Antwort von',
            'moinframe.loop.ui.reply.placeholder' => 'Antwort schreiben...',
            'moinframe.loop.ui.reply.submit' => 'Antworten',
            'moinframe.loop.ui.panel.no.comments' => 'Keine Kommentare. Fügen Sie Ihren ersten Kommentar hinzu, um zu beginnen.',
            'moinframe.loop.ui.panel.open' => 'Kommentare öffnen',
            'moinframe.loop.ui.header.browse.mode' => 'Navigieren',
            'moinframe.loop.ui.header.comment.mode' => 'Kommentieren',
            'moinframe.loop.ui.header.aria.count' => 'offene Kommentare',
            'moinframe.loop.ui.welcome.guest.name.placeholder' => 'Geben Sie Ihren Namen ein',
            'moinframe.loop.ui.welcome.continue' => 'Weiter',
            'moinframe.loop.ui.welcome.dismiss' => 'Schließen',
            'moinframe.loop.ui.header.position.top' => 'oben',
            'moinframe.loop.ui.header.position.bottom' => 'unten',
            'moinframe.loop.ui.comment.mark.solved' => 'Erledigen',
            'moinframe.loop.ui.comment.mark.unsolved' => 'Wieder öffnen',
            'moinframe.loop.ui.panel.show.resolved' => 'Nur erledigte anzeigen',
            'moinframe.loop.ui.panel.show.all' => 'Alle Kommentare anzeigen',
            'moinframe.loop.ui.panel.filter.open' => 'Offen',
            'moinframe.loop.ui.panel.filter.resolved' => 'Erledigt',
            'moinframe.loop.ui.panel.filter.open.active' => 'Offene Kommentare anzeigen (aktuell ausgewählt)',
            'moinframe.loop.ui.panel.filter.open.inactive' => 'Offene Kommentare anzeigen',
            'moinframe.loop.ui.panel.filter.resolved.active' => 'Erledigte Kommentare anzeigen (aktuell ausgewählt)',
            'moinframe.loop.ui.panel.filter.resolved.inactive' => 'Erledigte Kommentare anzeigen',
            'moinframe.loop.ui.panel.menu.open' => 'Menü öffnen',
            'moinframe.loop.ui.panel.menu.filter.title' => 'Kommentare anzeigen',
            'moinframe.loop.ui.panel.no.resolved' => 'Noch keine erledigten Kommentare.',
            'moinframe.loop.ui.panel.action.open_page' => 'Seite öffnen',
            'moinframe.loop.ui.panel.action.resolve' => 'Erledigen',
            'moinframe.loop.ui.panel.action.reopen' => 'Wieder öffnen',
            'moinframe.loop.ui.panel.action.delete' => 'Löschen',
            'moinframe.loop.ui.panel.filter.label' => 'Filter',
            'moinframe.loop.ui.panel.section.comments' => 'Kommentare',
            'moinframe.loop.ui.panel.reply.singular' => 'Antwort',
            'moinframe.loop.ui.panel.reply.plural' => 'Antworten',

            // Time formatting
            'moinframe.loop.ui.time.just_now' => 'gerade eben',
            'moinframe.loop.ui.time.minute_ago' => 'vor einer Minute',
            'moinframe.loop.ui.time.minutes_ago' => 'vor {count} Minuten',
            'moinframe.loop.ui.time.hour_ago' => 'vor einer Stunde',
            'moinframe.loop.ui.time.hours_ago' => 'vor {count} Stunden',
            'moinframe.loop.ui.time.yesterday' => 'gestern',
            'moinframe.loop.ui.time.days_ago' => 'vor {count} Tagen',
            'loading' => 'Lädt...'
        ]
    ],
    'hooks' => [
        'page.render:after' => function (string $contentType, array $data, string $html, \Kirby\Cms\Page $page) {
            if ($contentType === 'html' && Options::autoInject() && Options::enabled()) {
                $snippet = snippet('loop/app', ['page' => $page], true);
                // @phpstan-ignore-next-line
                $html = str_replace('</body>', $snippet . '</body>', $html);
            }
            return $html;
        }
    ],
    'routes' => Routes::register(),
    'snippets' => [
        'loop/app' => __DIR__ . '/snippets/loop/app.php'
    ],
    'api' => [
        'routes' => Routes::registerPanelRoutes()
    ]
]);
