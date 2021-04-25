<template>
  <div class="post border df flex-direction-column">
    <Image :url="post?.url" @onLike="postLiked" />
    <div class="post__information">
      <ActionBar
        :isLiked="!post?.isLiked"
        :isSaved="!post?.isSaved"
        @onLike="postLiked"
        @onSave="postSaved"
      />
      <div class="post__information__title">{{ post.title }}</div>
    </div>
  </div>
</template>

<script>
import Image from "@/components/Post/Image";
import ActionBar from "@/components/Post/ActionBar";
import { useStore } from "vuex";

export default {
  props: ["post"],
  components: {
    Image,
    ActionBar
  },
  setup(props) {
    const store = useStore();

    const postLiked = () => store.dispatch("posts/postLiked", props.post);

    const postSaved = () => store.dispatch("posts/postSaved", props.post);

    return {
      postLiked,
      postSaved
    };
  }
};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/variables'

.post
  background: $white
  border-radius: 8px
  overflow: hidden
  margin: 2em 0
  &__information
    padding: 1em
</style>