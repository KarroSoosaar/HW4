<template>
  <div class="A Post">
    <div id="form">
      <h3>A Post</h3>
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
    </div>
    <div class="container">
      <button @click="updatePost" class="updatePost">Update Post</button>
      <button @click="deletePost" class="deletePost">Delete Post</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "APost",
  data() {
    return {
      post: {
        id: "",
        date: "",
        body: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost() {
      fetch(`http://localhost:3000/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/allposts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePost() {
      fetch(`http://localhost:3000/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/allposts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },
};
</script>

<style scoped>
#form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
}
label {
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
}
button {
  background: rgb(97, 85, 85);
  margin: 20px 20px 20px 20px;
  padding: 10px 20px;
  color: white;
}
.container {
  display: flex;
  justify-content: center;
}
</style>