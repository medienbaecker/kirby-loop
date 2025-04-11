<script lang="ts">
  import Button from "./Button.svelte";
  import { guestName } from "../store/ui.svelte";
  import { setGuestName } from "../store/api.svelte";
  import { t } from "../store/translations.svelte";

  const {
    headline,
    text,
    authenticated,
    welcomeEnabled = true,
    onDismiss,
  }: {
    headline: string;
    text: string;
    authenticated: boolean;
    welcomeEnabled?: boolean;
    onDismiss?: () => void;
  } = $props();

  let dialog: HTMLDialogElement;
  let name = $state("");
  let isSubmitting = $state(false);

  export const showModal = () => dialog?.showModal();
  export const close = () => dialog?.close();

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (!authenticated) {
      if (name.trim() && !isSubmitting) {
        isSubmitting = true;
        try {
          await setGuestName(name.trim());
          guestName.set(name.trim());
          dialog?.close();
        } catch (error) {
          console.error("Failed to set guest name:", error);
        } finally {
          isSubmitting = false;
        }
      }
    } else {
      // For authenticated users, mark as dismissed when submitting
      onDismiss?.();
      dialog?.close();
    }
  }

  function handleCancel() {
    dialog?.close();
  }

  function handleDialogClose() {
    // Reset form when dialog closes
    name = "";
    isSubmitting = false;
  }
</script>

<dialog bind:this={dialog} onclose={handleDialogClose}>
  <form onsubmit={handleSubmit}>
    {#if welcomeEnabled}
      <h2>{headline}</h2>
      <p class="welcome-text">{text}</p>
    {/if}

    {#if !authenticated}
      <div class="name-section" class:no-welcome={!welcomeEnabled}>
        <div class="input">
          <input
            bind:value={name}
            type="text"
            placeholder={t(
              "ui.welcome.guest.name.placeholder",
              "Enter your name",
            )}
            required
          />
        </div>
      </div>
    {/if}

    <footer>
      <Button type="submit" style="button--solid" disabled={isSubmitting}>
        {#if !authenticated}
          {isSubmitting ? "Saving..." : t("ui.welcome.continue", "Continue")}
        {:else}
          {t("ui.welcome.continue", "Continue")}
        {/if}
      </Button>
      <Button onclick={handleCancel} disabled={isSubmitting}>
        {t("ui.welcome.dismiss", "Dismiss")}
      </Button>
    </footer>
  </form>
</dialog>

<style>
  dialog {
    background-color: var(--color-base-background);
    border: 1px solid var(--color-neutral-100);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-m);
    width: 100%;
    max-width: var(--loop-welcome-dialog-max-width);
    padding: 0;
    &::backdrop {
      background: var(--backdrop-overlay);
      backdrop-filter: var(--backdrop-blur);
    }
  }

  form {
    padding: var(--space-l);
  }

  h2 {
    margin: 0 0 var(--space-s) 0;
    font-size: var(--font-size-4);
    color: var(--color-base);
    font-weight: var(--font-weight-bold);
  }

  .welcome-text {
    margin: 0 0 var(--space-m) 0;
    font-size: var(--font-size-6);
    color: var(--color-neutral-600);
    line-height: var(--line-height);
  }

  .name-section {
    margin-bottom: var(--space-l);
  }

  .name-section.no-welcome {
    border-top: none;
    padding-top: 0;
  }

  input {
    width: 100%;
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--border-radius-s);
    padding: var(--space-xs);
    box-sizing: border-box;
    font-family: var(--font-family);
    font-size: var(--font-size-6);
    color: var(--color-base);
    background: var(--color-base-background);

    &:focus-visible {
      outline-color: var(--outline-color);
      outline-offset: var(--outline-offset);
    }
  }

  footer {
    display: flex;
    gap: var(--space-xs);
  }

  footer :global(button) {
    flex: 1;
  }
</style>
