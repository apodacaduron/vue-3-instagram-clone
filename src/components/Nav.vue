<template>
  <nav id="nav" class="df border-bottom">
    <div class="nav__logo full-width df-center">
      <router-link to="/">
        <img src="@/assets/img/logo.png" alt="Instagram Logo" />
      </router-link>
    </div>
    <div class="nav__search full-width df-center">
      <input type="search" placeholder="Search" />
    </div>
    <div class="nav__actions full-width df-center">
      <router-link to="/">
        <img
          src="@/assets/svg/home-outline.svg"
          alt="Home icon"
          class="nav-icon"
        />
      </router-link>
      <router-link to="/">
        <img
          src="@/assets/svg/send-outline.svg"
          alt="Send icon"
          class="nav-icon"
        />
      </router-link>
      <router-link to="/">
        <img
          src="@/assets/svg/compass-outline.svg"
          alt="Compass icon"
          class="nav-icon"
        />
      </router-link>
      <router-link to="/">
        <img
          src="@/assets/svg/heart-outline.svg"
          alt="Heart icon"
          class="nav-icon"
        />
      </router-link>
      <router-link to="/">
        <img
          src="@/assets/svg/person-outline.svg"
          alt="Heart icon"
          class="nav-icon"
        />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import '@/assets/sass/variables'

#nav
  height: 54px
  background: $white
  .nav__actions
    a
      img
        margin-right: 0.8em
        width: 1.5em
        height: 1.5em
</style>
