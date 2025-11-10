<?php

use Kirby\Cms\App as Kirby;
use Kirby\Data\Json;
use Kirby\Filesystem\F;
use \Moinframe\Loop\Options;

/**
 * Helper function to get translated strings for the frontend
 * Reads translations directly from JSON files based on current/custom language
 * @return array<string, string> Translations
 */
if (!function_exists('getTranslations')) {
    function getTranslations(): array
    {
        $customLang = Options::language();
        $lang = $customLang ?: (kirby()->language() ? kirby()->language()->code() : 'en');
        $file = __DIR__ . "/../../translations/{$lang}.json";

        // Fallback to English if language file doesn't exist
        if (!F::exists($file)) {
            $file = __DIR__ . "/../../translations/en.json";
        }

        return Json::read($file);
    }
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