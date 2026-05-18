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
                'label' => t('moinframe.loop.ui.panel.title'),
                'icon' => 'chat',
                'menu' => true,
                'views' => [
                    [
                        'pattern' => 'loop',
                        'action' => function () {
                            return [
                                'component' => 'k-loop-view',
                                'title' => t('moinframe.loop.ui.panel.title'),
                                'breadcrumb' => [
                                    [
                                        'label' => t('moinframe.loop.ui.panel.title'),
                                        'link' => 'loop'
                                    ]
                                ],
                                'props' => [
                                    'groups' => function () {
                                        $comments = App::getAllCommentsWithPageInfo();
                                        $groups = [];

                                        foreach ($comments as $comment) {
                                            $pageId = $comment['page'];

                                            if (!isset($groups[$pageId])) {
                                                $groups[$pageId] = [
                                                    'pageId' => $pageId,
                                                    'pageTitle' => $comment['pageTitle'],
                                                    'pageMissing' => !$comment['pageExists'],
                                                    'pageNum' => $comment['pageNum'],
                                                    'previewUrl' => $comment['pageUrl'],
                                                    'panelUrl' => $comment['pagePanelUrl'],
                                                    'open' => 0,
                                                    'total' => 0,
                                                    'comments' => [],
                                                ];
                                            }

                                            $replyCount = isset($comment['replies']) ? count($comment['replies']) : 0;

                                            $groups[$pageId]['comments'][] = [
                                                'id' => $comment['id'],
                                                'text' => '#' . $comment['id'] . ' — ' . Str::excerpt($comment['comment'], 120),
                                                'author' => $comment['author'],
                                                'replyCount' => $replyCount,
                                                'status' => $comment['status'],
                                                'previewUrl' => $comment['pageUrl'],
                                            ];

                                            $groups[$pageId]['total']++;
                                            if ($comment['status'] === 'OPEN') {
                                                $groups[$pageId]['open']++;
                                            }
                                        }

                                        // Within each group: OPEN before RESOLVED, then by ID
                                        foreach ($groups as &$group) {
                                            usort($group['comments'], function ($a, $b) {
                                                $statusA = $a['status'] === 'OPEN' ? 0 : 1;
                                                $statusB = $b['status'] === 'OPEN' ? 0 : 1;
                                                if ($statusA !== $statusB) {
                                                    return $statusA - $statusB;
                                                }
                                                return $a['id'] - $b['id'];
                                            });
                                        }
                                        unset($group);

                                        // Groups by page sort number (unsorted pages last), then title
                                        $groups = array_values($groups);
                                        usort($groups, function ($a, $b) {
                                            $numA = $a['pageNum'] ?? PHP_INT_MAX;
                                            $numB = $b['pageNum'] ?? PHP_INT_MAX;
                                            if ($numA !== $numB) {
                                                return $numA <=> $numB;
                                            }
                                            return strcmp($a['pageTitle'], $b['pageTitle']);
                                        });

                                        return $groups;
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
