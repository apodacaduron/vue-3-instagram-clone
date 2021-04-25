<template>
  <div class="post__actions df">
    <div class="post__actions__left full-width">
      <button class="button like-post" @click="$emit('onLike')">
        <img
          src="@/assets/svg/heart-outline.svg"
          alt="Like image"
          v-if="isLiked"
        />
        <img src="@/assets/svg/heart.svg" alt="Like image" v-else />
      </button>
      <img src="@/assets/svg/chatbubble-outline.svg" alt="Comments" />
      <img src="@/assets/svg/send-outline.svg" alt="Send" />
    </div>
    <div class="post__actions__right full-width df justify-content-flex-end">
      <button class="button save-post" @click="$emit('onSave')">
        <img
          src="@/assets/svg/bookmark-outline.svg"
          alt="Save image"
          v-if="isSaved"
        />
        <img src="@/assets/svg/bookmark.svg" alt="Like image" v-else />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLiked: {
      type: Boolean,
      default: false
    },
    isSaved: {
      type: Boolean,
      default: false
    }
  },
  emits: ["onLike", "onSave"]
};
</script>

<style lang="sass" scoped>
.post__actions
  img
    width: 1.5em
    height: 1.5em
  &__left
    img
      margin-right: 0.8em
</style>