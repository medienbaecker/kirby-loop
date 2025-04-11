<script lang="ts">
  import { resolveComment, unresolveComment } from "../store/api.svelte";
  import { t } from "../store/translations.svelte";
  import type { Comment } from "../types";
  import { panel } from "../store/ui.svelte";
  import Button from "./Button.svelte";
  import CommentForm from "./CommentForm.svelte";
  import Reply from "./Reply.svelte";
  const {
    comment,
    scrollIntoView,
    handleSubmit,
    cancel,
  }: {
    comment: Comment;
    scrollIntoView: (id: number) => void;
    handleSubmit: (e: SubmitEvent) => void;
    cancel: () => void;
  } = $props();

  function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  let openReplyForm = $state(false);
  let detailsOpen = $state(
    comment.replies?.length > 0 && !panel.showResolvedOnly,
  );
</script>

<details
  id="comment-{comment.id}"
  class="comment comment--{comment.status}"
  class:comment--current={panel.currentCommentId === comment.id}
  bind:open={detailsOpen}
>
  <summary class="comment__header">
    <Button
      style="button--marker button--marker-{comment.status} {panel.currentCommentId ===
      comment.id
        ? 'button--marker-highlighted'
        : ''}"
      onclick={() => scrollIntoView(comment.id)}
      onmouseenter={() => (panel.pulseMarkerId = comment.id)}
      onmouseout={() => (panel.pulseMarkerId = 0)}
    >
      {comment.id}
    </Button>
    <div class="comment__content">
      <header>
        <strong>{comment.author}</strong>
        <time datetime={formatDate(comment.timestamp)}>
          {formatDate(comment.timestamp)}
        </time>
      </header>
      <div class="comment__text">{comment.comment}</div>
    </div>

    {#if !detailsOpen}
      <Button
        style="button--solid button--small comment__replies-count"
        onclick={() => {
          detailsOpen = !detailsOpen;
        }}
      >
        {comment.replies?.length > 0 ? `+${comment.replies.length}` : "+"}
      </Button>
    {/if}
  </summary>

  {#if comment.replies?.length > 0}
    <ul class="comment__replies">
      {#each comment.replies as reply (reply.id)}
        <li>
          <Reply {reply} />
        </li>
      {/each}
    </ul>
  {/if}

  <footer>
    {#if openReplyForm}
      <CommentForm
        handleSubmit={(e) => {
          openReplyForm = false;
          handleSubmit(e);
        }}
        cancel={() => {
          openReplyForm = false;
          cancel();
        }}
        parentId={comment.id}
      />
    {:else}
      <div class="buttons">
        <Button style="button--solid" onclick={() => (openReplyForm = true)}>
          {t("ui.reply.submit", "Reply")}
        </Button>
        {#if comment.status === "OPEN"}
          <Button onclick={() => resolveComment(comment)}>
            {t("ui.comment.mark.solved", "Resolve")}
          </Button>
        {:else}
          <Button onclick={() => unresolveComment(comment)}>
            {t("ui.comment.mark.unsolved", "Reopen")}
          </Button>
        {/if}
      </div>
    {/if}
  </footer>
</details>

<style>
  .comment {
    --_avatar-size: var(--loop-avatar-size);
    --loop-marker-background: var(--color-neutral-200);
    --loop-marker-color: var(--color-neutral-800);
    --marker-size: var(--_avatar-size);
    position: relative;

    > * {
      z-index: 1;
      position: relative;
    }

    &::after {
      content: "";
      position: absolute;
      left: calc(var(--space-s) + var(--_avatar-size) / 2);
      top: 1.5rem;
      width: 0.1rem;
      height: calc(100% - 4rem);
      background-color: var(--color-neutral-100);
      z-index: 0;
    }
  }

  .comment:not([open]) {
    &::after {
      height: calc(100% - 2.75rem);
    }
  }

  .comment__header {
    display: flex;
    align-items: center;
    font-size: var(--font-size-7);
    padding: var(--space-s) var(--space-s);
    align-items: flex-start;
    gap: var(--space-s);
    cursor: pointer;

    :global(.comment__replies-count) {
      position: absolute;
      bottom: 0;
      left: var(--space-s);
      min-width: var(--_avatar-size);
    }

    header {
      display: flex;
      gap: var(--space-xs);
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: var(--space-2xs);
      time {
        font-size: var(--font-size-8);
        color: var(--color-neutral-300);
      }
    }

    .comment__content {
      padding: var(--space-xs);
      background-color: var(--color-neutral-100);
      border-radius: var(--border-radius);
      flex: 1;

      @media (prefers-color-scheme: dark) {
        background-color: var(--color-neutral-200);
      }
    }

    .comment__text {
      white-space: pre-line;
    }
  }

  .comment__replies {
    list-style: none;
    margin: 0;
    padding: 0 var(--space-s);
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
    padding: var(--space-s) var(--space-s);
    .buttons {
      display: flex;
      gap: var(--space-xs);
      align-items: flex-end;
    }
  }

  .is-hidden {
    display: none;
  }
</style>
