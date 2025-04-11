<script lang="ts">
  const {
    onclick,
    onmouseenter,
    onmouseout,
    onblur,
    active = false,
    type = "button",
    style = "",
    disabled = false,
    ariaLabel = "",
  }: {
    onclick?: () => void;
    onmouseenter?: () => void;
    onmouseout?: () => void;
    onblur?: () => void;
    active?: boolean;
    type?: "reset" | "submit" | "button";
    style?: string;
    disabled?: boolean;
    ariaLabel?: string;
  } = $props();
</script>

<button
  {onclick}
  class="button {style}"
  {type}
  class:is-active={active}
  aria-label={ariaLabel}
  {disabled}
  {onmouseenter}
  {onmouseout}
  {onblur}
>
  <slot name="icon" />
  {#if $$slots.default}<span><slot /></span>{/if}
</button>

<style>
  button {
    --button-background: transparent;
    --button-color: var(--color-neutral-600);
    --button-height: var(--loop-button-height);
    appearance: none;
    background-color: var(--button-background);
    color: var(--button-color);
    padding: 0 var(--space-xs);
    border: 0;
    font-family: var(--font-family);
    letter-spacing: 0.01em;
    border-radius: var(--border-radius);
    display: inline-flex;
    gap: var(--space-2xs);
    align-items: center;
    cursor: pointer;
    font-size: var(--font-size-7);
    justify-content: center;
    flex: 0 0 auto;
    font-weight: var(--font-weight-medium);
    transition: all var(--transition-fast);
    white-space: nowrap;
    line-height: 1;
    height: var(--button-height);
    outline-color: var(--outline-color);

    &:focus-visible {
      outline-offset: var(--outline-offset);
    }

    &:hover,
    &:focus-visible {
      --button-color: var(--color-neutral-900);
      --button-background: var(--color-neutral-200);
    }

    span {
      text-overflow: ellipsis;
      overflow-x: clip;
      display: block;
      min-width: 0;
    }

    &.button--header {
      --button-background: transparent;
      --button-height: var(--loop-button-header-height);
      padding: 0 var(--space-s);
      border-radius: 0;
      border: 0;

      &:hover,
      &:focus-visible {
        --button-background: var(--color-base-background-o);
      }
    }

    &.button--panel {
      --button-background: transparent;
      --button-height: auto;
      padding: 0 calc(var(--space-s) * 0.4);
      border-radius: 0;
      border: 0;
      span {
        overflow: visible;
      }
    }

    &.button--solid {
      --button-background: var(--color-neutral-100);
      &:hover,
      &:focus-visible {
        --button-color: var(--color-neutral-900);
        --button-background: var(--color-neutral-200);
      }
    }

    &.button--small {
      --button-height: 1.5rem;
      font-size: var(--font-size-7);
    }

    &.button--icon {
      --button-background: var(--color-neutral-0);
      --button-color: var(--color-neutral-900);
      --button-height: 3rem;
      box-shadow: var(--shadow-s);
      aspect-ratio: 1;
      padding: 0;
      font-size: var(--font-size-6);
      border-radius: var(--border-radius-rounded);
      border: 0;
      &:hover,
      &:focus-visible {
        --button-background: var(--color-neutral-100);
        --button-color: var(--color-neutral-900);
      }
    }

    &.button--marker {
      --button-background: var(--loop-marker-background);
      --button-color: var(--loop-marker-color);
      padding: 0;
      height: var(--marker-size);
      width: var(--marker-size);
      font-weight: var(--font-weight-bold);
      border-radius: var(--border-radius-rounded);
      border: 0;

      * {
        pointer-events: none;
      }

      &.button--marker-highlighted {
        --button-background: var(--color-accent);
        --button-color: var(--color-accent-dark);
      }
    }

    &.button--marker-open {
      --button-background: var(--color-accent);
      --button-color: var(--color-accent-dark);
    }

    &.button--filter {
      --button-background: transparent;
      --button-color: var(--color-neutral-500);
      --button-height: 1.75rem;
      flex: 1;
      font-size: var(--font-size-8);
      padding: 0 var(--space-xs);
      border-radius: calc(var(--border-radius) - 2px);

      &:hover,
      &:focus-visible {
        --button-color: var(--color-neutral-700);
        --button-background: var(--color-neutral-200);
      }

      &.button--filter-active {
        --button-background: var(--color-base-background);
        --button-color: var(--color-base);
        font-weight: var(--font-weight-medium);

        &:hover,
        &:focus-visible {
          --button-background: var(--color-base-background);
          --button-color: var(--color-base);
        }
      }
    }

    &.button--menu-item {
      --button-background: transparent;
      --button-color: var(--color-neutral-700);
      width: 100%;
      justify-content: flex-start;
      padding: var(--space-2xs) var(--space-xs);
      border-radius: calc(var(--border-radius) - 2px);
      font-size: var(--font-size-7);
      gap: var(--space-2xs);

      &:hover,
      &:focus-visible {
        --button-background: var(--color-neutral-100);
        --button-color: var(--color-neutral-900);
      }

      &.button--menu-item-active {
        --button-background: var(--color-accent-light);
        --button-color: var(--color-accent-dark);
        font-weight: var(--font-weight-medium);

        &:hover,
        &:focus-visible {
          --button-background: var(--color-accent-light);
          --button-color: var(--color-accent-dark);
        }
      }
    }

    &.is-active {
      --button-background: var(--color-accent);
      --button-color: var(--color-accent-dark);
      &:hover {
        --button-color: var(--color-accent-dark);
        --button-background: var(--color-accent);
      }
    }

    &:disabled {
      opacity: var(--opacity-subtle);
      cursor: not-allowed;
      &:hover {
        --button-color: var(--color-neutral-700);
        --button-background: var(--color-neutral-100);
      }
    }
  }
</style>
