<template>
  <div class="postsr" v-if="posts.length">
    <div>
      <post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div>
    <tags :posts="posts" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import post from "../components/poste.vue";
import tags from "../components/tagse.vue";
import Getposts from "../Functions/Getposts.js";
export default {
  name: "Home",
  components: { post,tags },
  setup() {
    const { posts, error, LoadPosts } = Getposts();
    LoadPosts()

   
    return { posts, error };
  },
};
</script>
<style>
.postsradd {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap:20px
}
</style>
