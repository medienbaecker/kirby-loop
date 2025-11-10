<?php

use \Kirby\Cms\App as Kirby;
use \Moinframe\Loop\App;
use \Moinframe\Loop\Options;
use \Moinframe\Loop\Routes;
use \Kirby\Filesystem\F;
use \Kirby\Filesystem\Dir;
use \Kirby\Data\Json;
use \Kirby\Toolkit\A;
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
                                            'empty_no_open' => t('moinframe.loop.ui.panel.no.open'),
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
    'translations' => A::keyBy(
        A::map(
            Dir::files(__DIR__ . '/translations'),
            function ($file) {
                $translations = [];
                foreach (Json::read(__DIR__ . '/translations/' . $file) as $key => $value) {
                    $translations["moinframe.loop.{$key}"] = $value;
                }

                return A::merge(
                    ['lang' => F::name($file)],
                    $translations
                );
            }
        ),
        'lang'
    ),
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
