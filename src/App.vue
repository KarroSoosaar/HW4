<template>
  <div>
    <nav>
      <router-link to="/api/Contacts">Contacts</router-link> |
      <router-link to="/api/allposts">Posts</router-link> |
      <router-link to="/api/addpost">Add a Post</router-link> |
      <router-link to="/api/signup">SignUp</router-link> |
      <router-link to="/api/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button{
  margin-top: 30px;
  border-radius: 36px;
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
}
.container {
  display: flex;
  justify-content: center;
}
</style>
