<template>
  <div class="post-image">
    <button class="button" @dblclick="$emit('onLike')">
      <img :src="url" alt="Post image" v-if="url" />
    </button>
    <div class="not-found df-center" v-if="!url">{{ notFoundText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null,
    },
    notFoundText: {
      type: String,
      default: "Image not found",
    },
  },
  emits: ["onLike"],
};
</script>

<style lang="sass" scoped>
.post-image
  width: 37.5em
  height: 37.5em
  img
    width: 100%
    height: 100%
  .not-found
    width: 100%
    height: 100%
</style>