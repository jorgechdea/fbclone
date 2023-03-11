import { defineStore } from "pinia";
const axios = require("axios");

export const useDataStore = defineStore("data", {
  state: () => ({
    msg: "Welcome!",
    posts: [],
    groups: [],
  }),
  actions: {
    getData() {
      axios("http://localhost:3001/posts")
        .then((response) => {
          response.data.forEach((post) => {
            if (!this.posts.find((p) => p.id === post.id)) {
              this.posts.push(post);
            }
          });
        })
        .catch((error) => console.log("Error", error.message));
    },
    submitPost() {
      axios("http://localhost:3001/posts")
        .then((response) => {
          response.data.forEach((e) => this.posts.push(e));
          console.log("actions:", response.data);
        })
        .catch((error) => console.log("Error", error.message));
    },
    orderByDate() {
      this.posts = this.posts.sort(function (a, b) {
        b.updatedAt > a.updatedAt;
        console.log("ordenando fecha");
      });
    },
    deletePost(id) {
      // axios.delete(`http://localhost:3001/posts/${id}`);
      console.log(id);
    },
  },
});
