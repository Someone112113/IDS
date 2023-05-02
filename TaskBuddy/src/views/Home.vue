<script>
export default {
  data() {
    return {
      lists: [
        {
          name: "List 1",
        },
        {
          name: "List 2",
        },
        {
          name: "List 3",
        },
      ],
    };
  },
  methods: {
    handleCreateNewList() {
      this.$router.push("/create-list");
    },
  },
  mounted() {
    if (localStorage.lists) {
      this.lists = JSON.parse(localStorage.lists);
    } else {
      localStorage.lists = JSON.stringify(this.lists);
    }
  },
  watch: {
    lists(newLists) {
      localStorage.lists = JSON.stringify(newLists);
    }
  }
};
</script>

<template>
  <div class="home">
    <h2>YOUR TASKS</h2>
    <div class="task-list">
      <p v-if="lists.length === 0">You have not been assigned any new tasks!</p>
      <div v-else v-for="list in lists" class="list-item">
        <span>{{ list.name }}</span>
        <span> > </span>
      </div>
      <button @click="handleCreateNewList">
        Create New List
      </button>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10%;
  gap: 10px;
}

.task-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px 0;
  overflow-y: auto;
}

.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: #7e7d7d;
  color: white;
  padding: 20px;
}
</style>
