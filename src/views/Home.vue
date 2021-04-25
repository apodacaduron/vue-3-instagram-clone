<template>
  <div class="home">
    <div class="posts-container">
      <Post :post="post" v-for="post in posts" :key="post.index" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Post from "@/components/Post";

export default {
  name: "Home",
  components: {
    Post,
  },
  setup() {
    const store = useStore();

    const posts = computed(() => store.getters["posts/posts"]);
    const getPosts = () => store.dispatch("posts/getPosts");
    onMounted(getPosts);

    return {
      posts,
    };
  },
};
</script>

<style lang="sass" scoped>
.home
  padding: 1em 0
  .posts-container
    margin: 0 auto
    max-width: 37.5em
</style>