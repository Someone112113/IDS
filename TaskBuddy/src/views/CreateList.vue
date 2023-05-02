<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleCreateList() {
      const updatedLists = JSON.parse(localStorage.lists);
      updatedLists.push({
        name: document.getElementById("new-list-name").value,
      });
      console.log(updatedLists)
      localStorage.lists = JSON.stringify(updatedLists);
      this.$router.push("/home");
    },
  },
};
</script>

<template>
  <div class="create-list">
    <h2>YOUR TASKS</h2>
    <div class="new-list">
      <span class="title">Create New List</span>
      <input type="text" name="new-list-name" id="new-list-name" />
      <p>Share this code to group members and invite them to your list</p>
      <button @click="handleCreateList">Create List</button>
    </div>
    <div class="join-list">
      <span class="title">Join List</span>
      <input type="text" name="join-list-name" id="join-list-name" />
      <p>Enter List code to join existing list</p>
      <button>Join List</button>
    </div>
  </div>
</template>

<style scoped>
.create-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10%;
  gap: 15px;
}

.new-list,
.join-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #D9D9D9;
  padding: 1em;
  flex: 1;
}

.title {
  font-size: 1.7em;
  font-weight: 500;
  margin-bottom: 0.5em;
}

input {
  border: none;
  padding: 0.5em 1em;
  border-radius: 1em;
  border: none;
  outline: none;
  text-align: center;
}
</style>
