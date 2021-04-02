<template>
  <div class="post d-flex my-5 mx-4 bg-white py-2  ">
    <div class="mx-3" >
        <img :src="post.image" alt="" width="220">
    </div>
    <div class="post-info text-primary">
        <router-link :to="{ name:'Post_info',params:{ id:post.id}}">
             <h3 class="">{{ post.titel }}</h3>
             </router-link>
     
      <p class="text-dark">{{ post.Content }}</p>
        <div class="d-flex my-0" >
            <span v-for="tag in post.tags" :key="tag" class="tag"> <router-link @click="s" :to="{ name:'TagPosts' ,params:{tag:tag}}"> {{tag}}</router-link></span>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: ["post"],
  setup() {
    const s= ref('')
    return{ s}
  },
};
</script>

<style>
body{
    background-color: rgb(241, 241, 241);
    
}
.tag{
    background-color: rgb(168, 168, 168);
    border-radius: 10px;
    padding: 5px;
    color: cornsilk;
    margin-left: 5px;
}

</style>