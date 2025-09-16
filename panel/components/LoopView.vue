<template>
  <k-panel-inside class="k-loop-view">
    <k-header>
      {{ translations.title }}
    </k-header>

    <div class="k-loop-filter">
      <k-select-field
        :label="translations.filter_label"
        :options="filterOptions"
        :value="filterMode"
        @input="onFilterChange"
        :placeholder="translations.filter_placeholder"
        class="k-loop-filter__select"
      />
    </div>

    <k-section :headline="translations.comments">
      <k-empty v-if="loading" icon="loader">{{ translations.loading }}</k-empty>
      <template v-else-if="filteredComments.length">
        <k-items :items="filteredComments" layout="list">
          <template #default="{ item }">
            <k-item
              :text="item.text"
              :info="item.info"
              :buttons="commentOptions(item)">
            </k-item>
          </template>
        </k-items>
      </template>
      <k-empty v-else icon="check">{{ emptyStateMessage }}</k-empty>
    </k-section>
  </k-panel-inside>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
    translations: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      filterMode: "",
    };
  },
  computed: {
    filterOptions() {
      return [
        { value: "open", text: this.translations.filter_open },
        { value: "resolved", text: this.translations.filter_resolved },
      ];
    },
    filteredComments() {
      if (this.filterMode === "open") {
        return this.comments.filter(
          (comment) => comment.comment.status === "OPEN"
        );
      } else if (this.filterMode === "resolved") {
        return this.comments.filter(
          (comment) => comment.comment.status === "RESOLVED"
        );
      }
      return this.comments;
    },
    emptyStateMessage() {
      if (this.filterMode === "open") {
        return this.translations.empty_no_open;
      } else if (this.filterMode === "resolved") {
        return this.translations.empty_no_resolved;
      }
      return this.translations.empty_no_comments;
    },
  },
  methods: {
    commentOptions(item) {
      const options = [];

      // Open page option
      if (item.preview) {
        options.push({
          icon: "open",
          title: this.translations.action_open_page,
          click: () => window.open(item.preview, "_blank"),
        });
      }

      if (item.comment.status === "RESOLVED") {
        options.push({
          icon: "check",
          title: this.translations.action_reopen,
          theme: "green",
          click: () =>
            this.toggleResolve(item.comment.id, item.comment.status),
        });
      } else {
        options.push({
          icon: "circle",
          title: this.translations.action_resolve,
          click: () =>
            this.toggleResolve(item.comment.id, item.comment.status),
        });
      }

      options.push({
        icon: "trash",
        title: this.translations.action_delete,
        theme: "red",
        click: () => this.deleteComment(item.comment.id),
      });

      return options;
    },
    onFilterChange(value) {
      this.filterMode = value;
    },
    async toggleResolve(commentId, currentStatus) {
      const newStatus = currentStatus === "RESOLVED" ? "OPEN" : "RESOLVED";
      const successMessage =
        newStatus === "RESOLVED"
          ? this.translations.message_resolved
          : this.translations.message_reopened;

      this.loading = true;
      try {
        let response;
        if (newStatus === "RESOLVED") {
          response = await this.$api.post(`loop/comment/resolve`, {
            id: commentId,
          });
        } else {
          response = await this.$api.post(`loop/comment/unresolve`, {
            id: commentId,
          });
        }

        if (response && (response.success || response.status === "ok")) {
          this.$panel.notification.success(successMessage);
          this.$reload();
        } else {
          throw new Error("API returned unsuccessful response");
        }
      } catch (error) {
        console.error(`Failed to toggle comment status:`, error);
        this.$panel.notification.error(`Failed to update comment`);
      } finally {
        this.loading = false;
      }
    },
    async deleteComment(commentId) {
      this.loading = true;
      try {
        const response = await this.$api.delete(
          `loop/panel/comment/${commentId}`
        );

        if (response && (response.success || response.status === "ok")) {
          this.$panel.notification.success(
            this.translations.message_deleted
          );
          this.$reload();
        } else {
          throw new Error("API returned unsuccessful response");
        }
      } catch (error) {
        console.error("Failed to delete comment:", error);
        this.$panel.notification.error("Failed to delete comment");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
.k-loop-filter {
  margin-bottom: var(--spacing-12);
}

.k-loop-filter__select {
  max-width: 300px;
}
</style>