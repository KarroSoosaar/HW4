<template>
  <div class="AllPosts">
    <div id="post-list">
    <h1>All Posts</h1>
    <div class="container">
      <button v-if = "authResult" @click="Logout()" class="center">Logout</button>
    </div>
      <ul>
        <div class="item" v-for="post in posts" :key="post.id">
            <a class= 'singlepost' :href="'/apost/' + post.id">
            <div class="date"> {{ post.date }}  </div><br />
            <span class="body"> {{ post.body }} </span> <br />
          </a>
        </div>
      </ul>
    </div>
    <div class="container">
      <button v-if = "authResult" @click="AddPost" class="center">Add post</button>
      <button v-if = "authResult" @click="DeleteAll" class="center">Delete all</button>
    </div>
  </div>

</template>


<script>
import auth from "../auth";

export default {
  name: "AllPosts",
  components: {

  },
  data: function() {
    return {
      posts: [],
      authResult: auth.authenticated()
    }
  },
  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        this.$router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    AddPost() {
      this.$router.push("/AddPost");
    },
    DeleteAll() {
      fetch(`http://localhost:3000/posts`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/allposts");
        })
        .then((data) => (this.posts = data))
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
.body {
  font-weight: bold;
}
h1 {
  font-size: 20px;
}

.date {
  text-align: right;
}
a {
  text-decoration: none;
  color:#2c3e50;
  width: auto;
}
a:hover {
  text-decoration: underline;
}
.item {
  text-align: left;
  position: relative;
  display: block;
  background-color: #ddd;
  margin-bottom: 5px;
  padding: 30px;
  border-radius: 10px;
  position: relative;
  margin: 20px auto;
  width: 65%;
  height: auto;
  box-sizing: border-box;
}
#post-list {
  background: rgb(167, 154, 154);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 60%;
  border-radius: 20px;
}
#post-list ul {
  padding: 0;
}

button {
  background: rgb(97, 85, 85);
  margin: 20px 20px 20px 20px;
  color: white;
}
</style>