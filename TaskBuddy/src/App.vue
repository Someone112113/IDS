<script>
import Navigation from "@/views/Navigation.vue";
import Header from "@/views/Header.vue";

export default {
  components: {
    Navigation,
    Header,
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<template>
  <Header v-if="!(this.currentRouteName === 'Login')"></Header>
  <router-view class="router-view"></router-view>
  <Navigation v-if="!(this.currentRouteName === 'Login')"></Navigation>
</template>

<style scoped>
.router-view {
  height: 100%;
  background: linear-gradient(#ffa654, #a80808);
}

/* @media (prefers-color-scheme: dark) {
  .router-view {
    background-color: var(--dark-background);
  }
} */
</style>
