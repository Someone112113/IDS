<script>
import Navigation from "@/views/Navigation.vue";

export default {
  components: {
    Navigation,
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<template>
  <router-view class="router-view"></router-view>
  <Navigation v-if="!(this.currentRouteName === 'Login')"></Navigation>
</template>

<style scoped>
.router-view {
  height: auto;
  min-height: 100%;
  background-color: rgb(255, 252, 240);
}

@media (prefers-color-scheme: dark) {
  .router-view {
    background-color: var(--dark-background);
  }
}
</style>
