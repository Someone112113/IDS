<script>
import Header from "./views/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      taskName: "TaskBuddy"
    }
  },
  computed: {
    pageName() {
      if (this.$route.name === "Task") {
        return this.taskName;
      }
      return this.$route.name;
    }
  },
};
</script>

<template>
  <Header v-if="!(this.pageName === 'Login')">{{ this.pageName }}</Header>
  <router-view class="router-view" @pageName="(name) => taskName = name"></router-view>
</template>

<style scoped>
.router-view {
  height: 100%;
}

@media (prefers-color-scheme: dark) {
  .router-view {
    background-color: var(--dark-background);
  }
}
</style>
