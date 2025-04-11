<script lang="ts">
  import type { Reply } from "../types";
  import Author from "./Author.svelte";
  export let reply: Reply;

  function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }
</script>

<div class="reply" data-id={reply.id}>
  <Author initials={reply.author.substring(0, 1)} />
  <article class="reply__content">
    <header>
      <strong>{reply.author}</strong>
      <time datetime={formatDate(reply.timestamp)}>
        {formatDate(reply.timestamp)}
      </time>
    </header>
    <div class="reply__text">{reply.comment}</div>
  </article>
</div>

<style>
  .reply {
    display: flex;
    gap: var(--space-s);
    flex-direction: row;
    align-items: start;
  }

  .reply__content {
    padding: var(--space-xs);
    background-color: var(--color-neutral-100);
    border-radius: var(--border-radius);

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

    @media (prefers-color-scheme: dark) {
      background-color: var(--color-neutral-200);
    }
  }

  .reply__text {
    white-space: pre-line;
  }
</style>
