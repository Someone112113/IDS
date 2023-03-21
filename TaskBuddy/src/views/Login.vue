<script>
export default {
  methods: {
    submit() {
      //if you want to send any data into server before redirection then you can do it here
      this.$router.push("/home");
    },
  },
};
</script>

<template>
  <div class="login">
    <picture>
      <source
        srcset="/TaskBuddy_logo_dark.svg"
        media="(prefers-color-scheme: dark)"
      />
      <img
        src="/TaskBuddy_logo.svg"
        alt="TaskBuddy logo"
        height="300"
        width="300"
      />
    </picture>

    <form>
      <fieldset>
        <input type="text" name="username" id="username" required />
        <label for="username"> Username </label>
      </fieldset>
      <fieldset>
        <input type="password" name="password" id="password" required />
        <label for="password"> Password </label>
      </fieldset>
      <button type="submit" @click.stop.prevent="submit()">Login</button>
    </form>

    <div class="signup">
      <p>New to TaskBuddy?</p>
      <router-link to="/signup">Sign up</router-link>
    </div>
  </div>
</template>

<style scoped>
.login {
  box-sizing: border-box;
  width: 100%;
  align-self: stretch;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 2em;
}

picture {
  display: flex;
  justify-content: center;
}

fieldset {
  border: none;
  outline: none;
  position: relative;
  margin: 3em 0;
  padding: 0;
  box-sizing: border-box;
}

input {
  border: none;
  outline: none;
  padding: 5px 0;
  width: 100%;
  font-size: x-large;
  border-bottom: solid 1px black;
  background-color: transparent;
}

label {
  position: absolute;
  bottom: 0.1em;
  left: 0.1em;
  transition: all 0.2s ease;
  font-size: x-large;
}

input:focus ~ label,
input:valid ~ label {
  bottom: 2em;
  font-size: medium;
  opacity: 0.8;
}

button {
  background-color: yellow;
  width: 100%;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: xx-large;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.2);
}

button:active {
  transform: translateY(3px);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  background-color: rgb(219, 219, 0);
}

.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: large;
}

.signup p {
  margin-bottom: 0.2em;
}

@media screen and (min-width: 1024px) {
  .login {
    padding: 1em;
  }
}

@media (prefers-color-scheme: dark) {
  input {
    border-bottom: solid 1px white;
  }

  input:focus {
    border-bottom: 1px solid yellow;
  }

  input:focus ~ label,
  input:valid ~ label {
    color: yellow;
  }
}
</style>
