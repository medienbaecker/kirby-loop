<script lang="ts">
  import { store } from "../store/api.svelte";
  import { panel } from "../store/ui.svelte";
  import { t } from "../store/translations.svelte";
  import Comment from "./Comment.svelte";
  const { scrollIntoView, handleSubmit, cancel } = $props();
  import Button from "./Button.svelte";
  import IconSidebarClose from "./Icon/IconSidebarClose.svelte";
  import IconSidebarOpen from "./Icon/IconSidebarOpen.svelte";
  import ContextMenu from "./ContextMenu.svelte";

  // Filter comments based on resolved status
  const filteredComments = $derived(
    panel.showResolvedOnly
      ? store.comments.filter((comment) => comment.status === "RESOLVED")
      : store.comments.filter((comment) => comment.status === "OPEN"),
  );
</script>

<div class="panel" class:open={panel.open}>
  <header class="glass-effect">
    <Button onclick={() => (panel.open = !panel.open)} style="button--header">
      {#if panel.open}
        <IconSidebarClose --size="1.5em" slot="icon" />
      {:else}
        <IconSidebarOpen --size="1.5em" slot="icon" />
      {/if}
    </Button>
  </header>

  <ul class="threads" data-lenis-prevent>
    {#if filteredComments.length === 0}
      <li class="no-threads">
        <p>
          {t("ui.panel.no.comments", "No comments yet.")}
        </p>
      </li>
    {:else if filteredComments.length === 0 && panel.showResolvedOnly}
      <li class="no-threads">
        <p>{t("ui.panel.no.resolved", "No resolved comments yet.")}</p>
      </li>
    {:else}
      {#each filteredComments as comment (comment.id)}
        <li>
          <Comment {comment} {scrollIntoView} {cancel} {handleSubmit} />
        </li>
      {/each}
    {/if}
  </ul>

  <ContextMenu />
</div>

<style>
  .panel {
    --_panel-width: var(--loop-panel-width);
    position: fixed;
    right: var(--space-xs);
    top: var(--space-xs);
    transform: translateX(calc(100% + var(--space-xs)));
    width: var(--_panel-width);
    height: calc(100svh - var(--space-xs) * 2);
    color: var(--color-base);
    border-radius: var(--border-radius);
    border-top-left-radius: 0;
    transition: var(--transition-transform);
    display: flex;
    flex-direction: column;
    z-index: var(--z-loop-panel);
    cursor: auto;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 600px) {
      --loop-panel-width: 85svw;
    }

    &.open {
      transform: translateX(0);
      box-shadow: var(--shadow-s);
      header {
        transform: translate(calc(-100% + 1px));
      }
    }

    header {
      transform: translate(-95%);
      border-top-left-radius: var(--border-radius-rounded);
      border-bottom-left-radius: var(--border-radius-rounded);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      &:hover,
      &:focus-visible {
        transform: translate(calc(-100% + 1px));
      }
    }
  }

  .threads {
    flex: 1 1 100%;
    overflow-y: auto;
    overscroll-behavior: contain;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0 0 var(--space-s) 0;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--loop-glass-effect-background);
    backdrop-filter: var(--loop-glass-effect-backdrop);
    z-index: 2;
    border-radius: var(--border-radius);
    border-top-left-radius: 0;
    scrollbar-width: thin;
    scrollbar-gutter: stable;

    li {
      + li {
        margin-top: var(--space-s);
      }
    }
    .no-threads {
      text-align: center;
      padding: var(--space-s) var(--space-l);
      font-size: var(--font-size-6);
      color: var(--color-neutral-300);
      margin-block: auto;
    }
  }
</style>
