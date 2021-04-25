<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/main'
@import '@/assets/sass/variables'
@import '@/assets/sass/button'

html, body
  margin: 0
  padding: 0
  height: 100%
  box-sizing: border-box

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-size: 16px
  background: $background-light
</style>
