<script lang="ts">
  import { panel } from "../store/ui.svelte";
  import { t } from "../store/translations.svelte";
  import Button from "./Button.svelte";
  import IconDots from "./Icon/IconDots.svelte";

  let contextMenu: HTMLElement;
  let triggerButton: HTMLElement;

  const toggleMenu = () => {
    if (contextMenu.matches(":popover-open")) {
      contextMenu.hidePopover();
    } else {
      contextMenu.showPopover();
      // Position the popover relative to the trigger button
      positionMenu();
    }
  };

  const positionMenu = () => {
    if (!triggerButton || !contextMenu) return;

    const buttonRect = triggerButton.getBoundingClientRect();
    const menuRect = contextMenu.getBoundingClientRect();

    // Position above and to the left of the button
    const top = buttonRect.top - menuRect.height - 8;
    const left = buttonRect.left - menuRect.width + buttonRect.width;

    contextMenu.style.position = "fixed";
    contextMenu.style.top = `${Math.max(8, top)}px`;
    contextMenu.style.left = `${Math.max(8, left)}px`;
    contextMenu.style.margin = "0";
  };

  const closeMenu = () => {
    contextMenu.hidePopover();
  };

  const setFilter = (showResolved: boolean) => {
    panel.showResolvedOnly = showResolved;
    closeMenu();
  };
</script>

<div class="context-menu-container">
  <div class="context-menu-trigger" bind:this={triggerButton}>
    <Button
      onclick={toggleMenu}
      ariaLabel={t("ui.panel.menu.open", "Open menu")}
      style="button--icon"
    >
      <IconDots slot="icon" />
    </Button>
  </div>

  <div
    bind:this={contextMenu}
    class="context-menu"
    popover="auto"
    role="menu"
    aria-labelledby="context-menu-trigger"
  >
    <div class="menu-section">
      <div class="menu-section-title">
        {t("ui.panel.menu.filter.title", "Show Comments")}
      </div>
      <div class="filter-options">
        <Button
          style="button--menu-item {!panel.showResolvedOnly
            ? 'button--menu-item-active'
            : ''}"
          onclick={() => setFilter(false)}
        >
          <span class="filter-dot filter-dot--open" slot="icon"></span>
          {t("ui.panel.filter.open", "Open")}
        </Button>
        <Button
          style="button--menu-item {panel.showResolvedOnly
            ? 'button--menu-item-active'
            : ''}"
          onclick={() => setFilter(true)}
        >
          <span class="filter-dot filter-dot--resolved" slot="icon"></span>
          {t("ui.panel.filter.resolved", "Resolved")}
        </Button>
      </div>
    </div>
  </div>
</div>

<style>
  .context-menu-container {
    position: absolute;
    bottom: var(--space-s);
    right: var(--space-s);
    z-index: 10;
  }

  .context-menu-trigger {
    --button-size: 2.5rem;
    width: var(--button-size);
    height: var(--button-size);
    border-radius: var(--border-radius-rounded);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .context-menu {
    background: var(--color-base-background);
    border: 0;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-m);
    padding: var(--space-xs);
    min-width: 12rem;
    position: fixed;
    margin: 0;

    &::backdrop {
      background: transparent;
    }
  }

  .menu-section {
    display: flex;
    flex-direction: column;
    gap: var(--space-2xs);
  }

  .menu-section-title {
    font-size: var(--font-size-8);
    font-weight: var(--font-weight-medium);
    color: var(--color-neutral-500);
    padding: 0;
    margin-bottom: var(--space-2xs);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .filter-options {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .filter-dot {
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    display: inline-block;
    margin-right: var(--space-2xs);
  }

  .filter-dot--open {
    background: var(--color-accent);
  }

  .filter-dot--resolved {
    background: var(--color-neutral-400);
  }
</style>
