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
  <header>
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
    position: var(--panel-position);
    right: var(--panel-right);
    top: var(--panel-top);
    transform: var(--panel-transform-closed);
    width: var(--panel-width);
    height: var(--panel-height);
    color: var(--panel-color);
    border-radius: var(--panel-border-radius);
    border-top-left-radius: var(--panel-border-top-left-radius);
    transition: var(--panel-transition);
    display: flex;
    flex-direction: column;
    z-index: var(--panel-z-index);
    cursor: auto;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 600px) {
      width: var(--panel-mobile-width);
    }

    &.open {
      transform: var(--panel-transform-open);
      box-shadow: var(--panel-shadow);
      header {
        transform: var(--panel-header-transform-open);
      }
    }

    header {
      transform: var(--panel-header-transform-closed);
      border-top-left-radius: var(--panel-header-border-radius);
      border-bottom-left-radius: var(--panel-header-border-radius);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: var(--panel-header-gap);
      backdrop-filter: var(--panel-header-backdrop-filter);
      background: var(--panel-header-background);
      overflow: hidden;
      box-shadow: var(--shadow-l), var(--shadow-light-edge),
        var(--shadow-dark-edge);
      transition: transform var(--transition-duration) var(--transition-easing);
      &:hover,
      &:focus-visible {
        transform: var(--panel-header-transform-hover);
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
    padding: var(--panel-threads-padding);
    width: 100%;
    box-sizing: border-box;
    background-color: var(--panel-threads-background);
    backdrop-filter: var(--panel-threads-backdrop);
    z-index: 2;
    border-radius: var(--panel-threads-border-radius);
    border-top-left-radius: var(--panel-threads-border-top-left-radius);
    scrollbar-width: var(--panel-threads-scrollbar-width);
    scrollbar-gutter: stable;

    li {
      + li {
        margin-top: var(--panel-threads-item-margin);
      }
    }
    .no-threads {
      text-align: center;
      padding: var(--panel-no-threads-padding);
      font-size: var(--panel-no-threads-font-size);
      color: var(--panel-no-threads-color);
      margin-block: auto;
    }
  }
</style>
