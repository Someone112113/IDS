<template>
  <nav>
    <router-link to="/home">
      <font-awesome-icon class="icon" icon="fa-solid fa-house" />
      Home
    </router-link>
    <router-link to="/league">
      <font-awesome-icon class="icon" icon="fa-solid fa-ranking-star" />
      League
    </router-link>
    <router-link to="/social">
      <font-awesome-icon class="icon" icon="fa-solid fa-users" />
      Social
    </router-link>
    <router-link to="/profile">
      <img
        class="icon profile-picture"
        src="@/assets/profile-picture.jpg"
        alt="Profile picture"
      />
      Profile
    </router-link>
  </nav>
</template>

<style scoped>
.router-link-active,
.router-link-active * {
  color: rgb(222, 222, 0) !important;
}

nav {
  position: fixed;
  bottom: -1px;
  left: -1px;
  right: -1px;
  width: auto;
  height: 4em;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
}

nav * {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  font-size: small;
  color: grey;
}

.icon {
  height: 2em;
  width: 2em;
}

.profile-picture {
  border-radius: 50%;
}
</style>
