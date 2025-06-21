<?php

use \Kirby\Cms\App as Kirby;
use \Moinframe\Loop\Options;
use \Moinframe\Loop\Routes;

@include_once __DIR__ . '/vendor/autoload.php';

Kirby::plugin('moinframe/loop', [
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
            'moinframe.loop.ui.reply.placeholder' => 'Write a reply...',
            'moinframe.loop.ui.reply.submit' => 'Reply',
            'moinframe.loop.ui.panel.no.comments' => 'No comments. Add your first comment to get started.',
            'moinframe.loop.ui.header.browse.mode' => 'Browse',
            'moinframe.loop.ui.header.comment.mode' => 'Comment',
            'moinframe.loop.ui.welcome.guest.name.placeholder' => 'Enter your name',
            'moinframe.loop.ui.welcome.continue' => 'Continue',
            'moinframe.loop.ui.welcome.dismiss' => 'Dismiss',
            'moinframe.loop.ui.header.position.top' => 'top',
            'moinframe.loop.ui.header.position.bottom' => 'bottom',
            'moinframe.loop.ui.comment.mark.solved' => 'Resolve',
            'moinframe.loop.ui.comment.mark.unsolved' => 'Reopen',
            'moinframe.loop.ui.panel.show.resolved' => 'Show Resolved Only',
            'moinframe.loop.ui.panel.show.all' => 'Show All Comments',
            'moinframe.loop.ui.panel.filter.open' => 'Open',
            'moinframe.loop.ui.panel.filter.resolved' => 'Resolved',
            'moinframe.loop.ui.panel.menu.open' => 'Open menu',
            'moinframe.loop.ui.panel.menu.filter.title' => 'Show Comments',
            'moinframe.loop.ui.panel.no.resolved' => 'No resolved comments yet.'
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
            'moinframe.loop.ui.reply.placeholder' => 'Antwort schreiben...',
            'moinframe.loop.ui.reply.submit' => 'Antworten',
            'moinframe.loop.ui.panel.no.comments' => 'Keine Kommentare. Fügen Sie Ihren ersten Kommentar hinzu, um zu beginnen.',
            'moinframe.loop.ui.header.browse.mode' => 'Navigieren',
            'moinframe.loop.ui.header.comment.mode' => 'Kommentieren',
            'moinframe.loop.ui.welcome.guest.name.placeholder' => 'Geben Sie Ihren Namen ein',
            'moinframe.loop.ui.welcome.continue' => 'Weiter',
            'moinframe.loop.ui.welcome.dismiss' => 'Schließen',
            'moinframe.loop.ui.header.position.top' => 'oben',
            'moinframe.loop.ui.header.position.bottom' => 'unten',
            'moinframe.loop.ui.comment.mark.solved' => 'Erledigt',
            'moinframe.loop.ui.comment.mark.unsolved' => 'Wieder öffnen',
            'moinframe.loop.ui.panel.show.resolved' => 'Nur erledigte anzeigen',
            'moinframe.loop.ui.panel.show.all' => 'Alle Kommentare anzeigen',
            'moinframe.loop.ui.panel.filter.open' => 'Offen',
            'moinframe.loop.ui.panel.filter.resolved' => 'Erledigt',
            'moinframe.loop.ui.panel.menu.open' => 'Menü öffnen',
            'moinframe.loop.ui.panel.menu.filter.title' => 'Kommentare anzeigen',
            'moinframe.loop.ui.panel.no.resolved' => 'Noch keine erledigten Kommentare.'
        ]
    ],
    'hooks' => [
        'page.render:after' => function (string $contentType, array $data, string $html, \Kirby\Cms\Page $page) {
            if ($contentType === 'html' && Options::autoInject() && Options::enabled()) {
                $snippet = snippet('loop/app', [], true);
                // @phpstan-ignore-next-line
                $html = str_replace('</body>', $snippet . '</body>', $html);
            }
            return $html;
        }
    ],
    'routes' => Routes::register(),
    'snippets' => [
        'loop/app' => __DIR__ . '/snippets/loop/app.php'
    ]
]);
