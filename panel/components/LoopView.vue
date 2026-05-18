<template>
  <k-panel-inside class="k-loop-view">
    <k-header>
      {{ tr("ui.panel.title") }}
    </k-header>

    <div class="k-loop-filter">
      <k-select-field
        :label="tr('ui.panel.filter.label')"
        :options="filterOptions"
        :value="filterMode"
        @input="onFilterChange"
        :placeholder="tr('ui.panel.show.all')"
        class="k-loop-filter__select"
      />
    </div>

    <k-empty v-if="loading" icon="loader">{{ tr("ui.panel.loading") }}</k-empty>

    <template v-else-if="filteredGroups.length">
      <k-section
        v-for="group in filteredGroups"
        :key="group.pageId"
        :label="sectionLabel(group)"
      >
        <k-items :items="group.items" layout="list">
          <template #default="{ item }">
            <k-item
              :text="item.text"
              :info="item.info"
              :buttons="item.buttons"
            />
          </template>
        </k-items>
      </k-section>
    </template>

    <k-empty v-else icon="check">{{ emptyStateMessage }}</k-empty>
  </k-panel-inside>
</template>

<script>
export default {
  props: {
    groups: {
      type: Array,
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
        { value: "open", text: this.tr("ui.panel.filter.open") },
        { value: "resolved", text: this.tr("ui.panel.filter.resolved") },
      ];
    },
    filteredGroups() {
      return this.groups
        .map((group) => {
          const comments = group.comments.filter((comment) => {
            if (this.filterMode === "open") {
              return comment.status === "OPEN";
            }
            if (this.filterMode === "resolved") {
              return comment.status === "RESOLVED";
            }
            return true;
          });

          return {
            pageId: group.pageId,
            open: group.open,
            pageMissing: group.pageMissing,
            pageTitle: group.pageTitle,
            items: comments.map((comment) => ({
              text: comment.text,
              info: this.commentInfo(comment),
              buttons: this.commentButtons(comment, group),
            })),
          };
        })
        .filter((group) => group.items.length > 0);
    },
    emptyStateMessage() {
      if (this.filterMode === "open") {
        return this.tr("ui.panel.no.open");
      }
      if (this.filterMode === "resolved") {
        return this.tr("ui.panel.no.resolved");
      }
      return this.tr("ui.panel.no.comments");
    },
  },
  methods: {
    tr(key, data) {
      return this.$t("moinframe.loop." + key, data);
    },
    sectionLabel(group) {
      let label = group.pageTitle;
      if (group.pageMissing) {
        label += " " + this.tr("ui.panel.page.missing");
      }
      if (group.open > 0) {
        label += " · " + this.tr("ui.panel.open.count", { count: group.open });
      }
      return label;
    },
    commentInfo(comment) {
      let info = comment.author;
      if (comment.replyCount > 0) {
        const label =
          comment.replyCount === 1
            ? this.tr("ui.panel.reply.singular")
            : this.tr("ui.panel.reply.plural");
        info += " • " + comment.replyCount + " " + label;
      }
      return info;
    },
    commentLink(comment) {
      const separator = comment.previewUrl.includes("?") ? "&" : "?";
      return comment.previewUrl + separator + "loop-comment=" + comment.id;
    },
    commentButtons(comment, group) {
      const buttons = [];

      if (!group.pageMissing) {
        buttons.push({
          icon: "open",
          title: this.tr("ui.panel.action.open_page"),
          click: () => window.open(this.commentLink(comment), "_blank"),
        });
      }

      if (comment.status === "RESOLVED") {
        buttons.push({
          icon: "check",
          title: this.tr("ui.panel.action.reopen"),
          theme: "positive",
          click: () => this.toggleResolve(comment.id, comment.status),
        });
      } else {
        buttons.push({
          icon: "circle",
          title: this.tr("ui.panel.action.resolve"),
          click: () => this.toggleResolve(comment.id, comment.status),
        });
      }

      buttons.push({
        icon: "trash",
        title: this.tr("ui.panel.action.delete"),
        theme: "negative",
        click: () => this.deleteComment(comment.id),
      });

      return buttons;
    },
    onFilterChange(value) {
      this.filterMode = value;
    },
    async toggleResolve(commentId, currentStatus) {
      const newStatus = currentStatus === "RESOLVED" ? "OPEN" : "RESOLVED";
      const successMessage =
        newStatus === "RESOLVED"
          ? this.tr("ui.panel.message.resolved")
          : this.tr("ui.panel.message.reopened");

      this.loading = true;
      try {
        const endpoint =
          newStatus === "RESOLVED"
            ? "loop/comment/resolve"
            : "loop/comment/unresolve";
        const response = await this.$api.post(endpoint, { id: commentId });

        if (response && (response.success || response.status === "ok")) {
          this.$panel.notification.success(successMessage);
          this.$reload();
        } else {
          throw new Error("API returned unsuccessful response");
        }
      } catch (error) {
        console.error("Failed to toggle comment status:", error);
        this.$panel.notification.error(this.tr("ui.panel.message.update.failed"));
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
          this.$panel.notification.success(this.tr("ui.panel.message.deleted"));
          this.$reload();
        } else {
          throw new Error("API returned unsuccessful response");
        }
      } catch (error) {
        console.error("Failed to delete comment:", error);
        this.$panel.notification.error(this.tr("ui.panel.message.delete.failed"));
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
