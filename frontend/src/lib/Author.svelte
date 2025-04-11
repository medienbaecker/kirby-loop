<script lang="ts">
  const { initials } = $props();
</script>

<div class="author">
  {initials}
</div>

<style scoped>
  .author {
    font-size: var(--font-size-6);
    text-transform: uppercase;
    color: var(--color-neutral-600);
    background-color: var(--color-neutral-100);
    aspect-ratio: 1;
    flex: 0 0 var(--_avatar-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-rounded);
  }
</style>
