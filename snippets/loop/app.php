<?php

use Kirby\Cms\App as Kirby;
use \Moinframe\Loop\Options;

/**
 * Helper function to get translated strings with custom language support
 * This method only overwrites the translations, the language on the loop needs to stay null if no language is set, otherwise the api won't work
 * @return array<string, string> Translations
 *
 */
function getTranslations(): array
{
    $customLang = Options::language();

    return [
        'ui.comment.placeholder' => t('moinframe.loop.ui.comment.placeholder', 'Enter your comment...', $customLang),
        'ui.comment.submit' => t('moinframe.loop.ui.comment.submit', 'Submit', $customLang),
        'ui.comment.cancel' => t('moinframe.loop.ui.comment.cancel', 'Cancel', $customLang),
        'ui.comment.keyboardHint' => t('moinframe.loop.ui.comment.keyboardHint', '⌘+Enter or Ctrl+Enter to submit', $customLang),
        'ui.reply.placeholder' => t('moinframe.loop.ui.reply.placeholder', 'Write a reply...', $customLang),
        'ui.reply.submit' => t('moinframe.loop.ui.reply.submit', 'Reply', $customLang),
        'ui.panel.no.comments' => t('moinframe.loop.ui.panel.no.comments', 'No comments yet. Add your first comment to get started.', $customLang),
        'ui.header.browse.mode' => t('moinframe.loop.ui.header.browse.mode', 'Browse', $customLang),
        'ui.header.comment.mode' => t('moinframe.loop.ui.header.comment.mode', 'Comment', $customLang),
        'ui.welcome.guest.name.placeholder' => t('moinframe.loop.ui.welcome.guest.name.placeholder', 'Enter your name', $customLang),
        'ui.welcome.continue' => t('moinframe.loop.ui.welcome.continue', 'Continue', $customLang),
        'ui.welcome.dismiss' => t('moinframe.loop.ui.welcome.dismiss', 'Dismiss', $customLang),
        'ui.comment.mark.solved' => t('moinframe.loop.ui.comment.mark.solved', 'Resolve', $customLang),
        'ui.comment.mark.unsolved' => t('moinframe.loop.ui.comment.mark.unsolved', 'Reopen', $customLang),
        'ui.panel.show.resolved' => t('moinframe.loop.ui.panel.show.resolved', 'Show Resolved Only', $customLang),
        'ui.panel.show.all' => t('moinframe.loop.ui.panel.show.all', 'Show All Comments', $customLang),
        'ui.panel.filter.open' => t('moinframe.loop.ui.panel.filter.open', 'Open', $customLang),
        'ui.panel.filter.resolved' => t('moinframe.loop.ui.panel.filter.resolved', 'Resolved', $customLang),
        'ui.panel.menu.open' => t('moinframe.loop.ui.panel.menu.open', 'Open menu', $customLang),
        'ui.panel.menu.filter.title' => t('moinframe.loop.ui.panel.menu.filter.title', 'Show Comments', $customLang),
        'ui.panel.no.resolved' => t('moinframe.loop.ui.panel.no.resolved', 'No resolved comments yet.', $customLang)
    ];
}

if (Options::enabled() && (Options::public() || kirby()->user() !== null)): ?>
    <kirby-loop
        theme="<?= Options::theme() ?>"
        csrf-token="<?= csrf() ?>"
        position="<?= Options::position() ?>"
        language="<?= kirby()->language() ? kirby()->language()->code() : '' ?>"
        apiBase="<?= kirby()->site()->url() ?>"
        pageId="<?= $page->id() ?>"
        authenticated="<?= kirby()->user() !== null ? 'true' : 'false' ?>"
        welcome-enabled="<?= Options::welcomeDialogEnabled() ? 'true' : 'false' ?>"
        welcome-headline="<?= esc(Options::welcomeDialogHeadline()) ?>"
        welcome-text="<?= esc(Options::welcomeDialogText()) ?>"
        translations="<?= esc(json_encode(getTranslations())) ?>"></kirby-loop>
    <script type="module" src="<?= Kirby::plugin('moinframe/loop')->asset('loop.js') ?>"></script>
<?php endif ?>