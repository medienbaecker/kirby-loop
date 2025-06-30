<script lang="ts">
  import type { Reply } from "../types";
  import Author from "./Author.svelte";
  import { t } from "../store/translations.svelte";
  export let reply: Reply;

  function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }
</script>

<article
  class="reply"
  data-id={reply.id}
  aria-label="{t('ui.reply.aria.label', 'Reply by')} {reply.author}: {reply.comment}"
>
  <Author initials={reply.author.substring(0, 1)} />
  <div class="reply__content">
    <header>
      <strong>{reply.author}</strong>
      <time datetime={formatDate(reply.timestamp)}>
        {formatDate(reply.timestamp)}
      </time>
    </header>
    <div class="reply__text">{reply.comment}</div>
  </div>
</article>

<style>
  .reply {
    display: flex;
    gap: var(--reply-gap);
    flex-direction: row;
    align-items: start;
  }

  .reply__content {
    padding: var(--reply-content-padding);
    background-color: var(--reply-content-background);
    border-radius: var(--reply-content-border-radius);

    header {
      display: flex;
      gap: var(--reply-header-gap);
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: var(--reply-header-margin-bottom);
      time {
        font-size: var(--reply-timestamp-font-size);
        color: var(--reply-timestamp-color);
      }
    }

    @media (prefers-color-scheme: dark) {
      background-color: var(--reply-content-background-dark);
    }
  }

  .reply__text {
    white-space: pre-line;
  }
</style>
