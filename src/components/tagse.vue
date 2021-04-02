<template>
  <h3 class="float-left" >Tags</h3>
<div class="tage" >
<router-link  v-for="tag in tags" :key="tag" :to="{ name:'TagPosts', params:{tag:tag}}"> <span>#{{tag}}</span></router-link>
 
 </div>
</template>

<script>
import useTags from "../Functions/useTags.js";
export default {
  props: ['posts'],
  setup(props) {
    const { tags } = useTags(props.posts);
    return { tags };
  },
};
</script>

<style>
.tage span{
  background-color: rgb(0, 0, 0);
  padding: 3px;
  border-radius:10px;
 color: burlywood;
 font-weight: 500;
 font-size: 20px;
  margin-right: 10px;
}
.tage{
  margin-top: 50px;
}
</style>
