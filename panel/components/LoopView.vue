<template>
  <k-panel-inside class="k-panel-loop">
    <k-header>
      Feedback
      <template #buttons></template>
    </k-header>
    <k-section>
      <k-stats :reports="props.reports" size="large"></k-stats>
    </k-section>
    <k-section headline="Pages">
      <k-empty v-if="loading" icon="loader">Loading...</k-empty>
      <template v-else-if="props.pages.length">
        <k-items :items="props.pages" layout="list">
          <template #default="{ item }">
            <k-item :text="item.text" :image="item.image" :info="item.info" :buttons="pagesButtons(item)"
              :link="item.panel">
            </k-item>
          </template>
        </k-items>
      </template>
      <k-empty v-else icon="check">No comments</k-empty>
    </k-section>
    <k-section headline="Comments">
      <k-empty v-if="loading" icon="loader">Loading...</k-empty>
      <template v-else-if="props.comments.length">
        <k-items :items="props.comments" layout="list">
          <template #default="{ item }">
            <k-item :text="item.text" :image="item.image" :info="item.info" :buttons="commentButtons(item)"
              :options="commentOptions(item)" :link="item.panel">
              <template #image>
                <k-frame>
                  <div class="loop-marker">
                    {{ item.comment.id }}
                  </div>
                </k-frame>
              </template>
            </k-item>
          </template>
        </k-items>
      </template>
      <k-empty v-else icon="check">No comments</k-empty>
    </k-section>
  </k-panel-inside>
</template>

<script setup>
import { usePanel, ref, computed } from "kirbyuse";

const props = defineProps({
  reports: {
    type: Array,
    required: true,
  },
  comments: {
    type: Array,
    required: true,
  },
  pages: {
    type: Array,
    required: true,
  },
});

console.log(props.comments);
const panel = usePanel();
const loading = ref(false);

const selectedComments = ref([]);
const pagesButtons = (item) => {
  if (!props.pages.length) {
    return [];
  }
  const buttons = [];

  if (item.preview) {
    buttons.push({
      icon: "open",
      title: "Open",
      click: () => panel.open(item.preview, { target: "_blank" }),
      responsive: true
    })
  }

  return buttons;
}
const commentButtons = (item) => {
  if (!props.comments.length) {
    return [];
  }
  const buttons = [];

  if (item.preview) {
    buttons.push({
      icon: "open",
      title: "Open",
      click: () => panel.open(item.preview, { target: "_blank" }),
      responsive: true
    })
  }

  return buttons;
};


const commentOptions = (item) => {
  if (!props.comments.length) {
    return [];
  }
  const options = [{
    icon: "trash",
    text: 'Delete',
    click: () => { },
    responsive: true
  }];


  if (item.comment.status === 'OPEN') {
    options.unshift({
      icon: "check",
      text: 'Resolve',
      click: () => { },
      responsive: true
    })
  }

  return options;
};

const onSelectionChange = (comments) => {
}
</script>

<style>
.k-panel-loop .loop-marker {
  background-color: var(--color-gray-800);
  color: var(--color-white);
  border-radius: 100%;
  display: grid;
  place-content: center;
  width: 1.5rem;
  aspect-ratio: 1;
}

.k-panel-loop .k-frame {
  width: var(--item-height);
}
</style>
