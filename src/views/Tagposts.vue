<template>
  <h1>
    those are all posts with <b>{{ tag }}</b> tag
  </h1>
   <div class="posts">
    <div v-for="post in postswithtag" :key="post.id">
      <post :post="post" />
    </div>
  </div>
</template>

<script>
import post from "../components/poste.vue";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import Getposts from "../Functions/Getposts";
export default {
  components: { post },
  setup() {
    const tag = ref("");
    const router = useRoute();
    tag.value = router.params.tag;

   
    const { posts, error, LoadPosts } =  Getposts();

    LoadPosts();
    
     const postswithtag =computed(()=>{
         return posts.value.filter(p=> p.tags.includes(tag.value))
        
        })
       
    

    return { tag, postswithtag, error };
  },
};
</script>

<style>
</style>