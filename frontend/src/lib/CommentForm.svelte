<script lang="ts">
  import Button from "./Button.svelte";
  import { t } from "../store/translations.svelte";
  const {
    handleSubmit,
    cancel,
    parentId = null,
  }: {
    handleSubmit: (e: SubmitEvent) => void;
    cancel: () => void;
    parentId?: number | null;
  } = $props();
  import { formData } from "../store/form.svelte";
  formData.parentId = parentId ? Number(parentId) : null;

  function handleKeydown(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      const form = (e.currentTarget as Element)?.closest("form");
      if (form) {
        form.requestSubmit();
      }
    }
  }
</script>

<form onsubmit={handleSubmit} method="POST">
  <div class="input">
    <textarea
      bind:value={formData.text}
      name="comment"
      placeholder={parentId
        ? t("ui.reply.placeholder", "Write a reply...")
        : t("ui.comment.placeholder", "Enter your comment...")}
      onkeydown={handleKeydown}
      required
    ></textarea>
  </div>
  <div class="keyboard-hint">
    {t("ui.comment.keyboardHint", "⌘+Enter or Ctrl+Enter to submit")}
  </div>
  <footer>
    <Button type="submit" style="button--solid">
      {parentId
        ? t("ui.reply.submit", "Reply")
        : t("ui.comment.submit", "Submit")}
    </Button>
    <Button onclick={cancel}>{t("ui.comment.cancel", "Cancel")}</Button>
  </footer>
</form>

<style>
  form {
    padding: 0;
    cursor: auto;
    background-color: var(--color-base-background);
    color: var(--color-base);
    border-radius: var(--border-radius);
    overflow: hidden;
    border: 1px solid var(--color-neutral-200);
  }

  textarea {
    width: 100%;
    border: 0;
    height: var(--loop-textarea-height);
    resize: none;
    padding: var(--space-s);
    box-sizing: border-box;
    background-color: var(--color-base-background);
    font-family: var(--font-family);
    font-size: var(--loop-textarea-font-size);
    color: currentColor;
    margin: 0;

    &:focus-visible,
    &:focus {
      outline: 0;
    }
  }

  footer {
    padding: var(--space-xs);
    display: flex;
    gap: var(--space-xs);
    :global(button) {
      flex: 1;
    }
  }

  .keyboard-hint {
    font-size: var(--font-size-8);
    color: var(--color-neutral-300);
    padding: 0 var(--space-xs) var(--space-xs) var(--space-xs);
    align-self: center;
    white-space: nowrap;
    margin-left: auto;
  }
</style>
