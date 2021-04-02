<template>
 <div v-if="haspost">
 <h1>{{post.titel}}</h1>
 <img :src="post.image" alt="">
 <p>{{post.Content}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptatem quidem recusandae, cum consequatur in, unde alias magnam eveniet deserunt illo delectus cumque doloribus tempora iure repellat quis provident expedita inventore quisquam commodi sint. Deserunt nostrum quam iure dolores. Similique excepturi, magni qui veritatis dolor recusandae dignissimos vel architecto eius illum incidunt eligendi eos cumque, officia debitis libero ipsum? A optio omnis quos at velit esse excepturi ratione, sit quaerat autem? Doloremque laboriosam hic ratione asperiores rem perferendis nihil esse veritatis, at reprehenderit voluptate eum, voluptatibus quam eligendi! Illum modi laudantium quidem cupiditate dicta praesentium maxime ipsa amet. Suscipit saepe voluptatem, sint magni voluptas possimus veniam, quas fuga quam voluptates rem? Laboriosam deleniti illum distinctio praesentium exercitationem enim perspiciatis iure? Sunt, at inventore, pariatur suscipit nostrum obcaecati blanditiis, rem temporibus sapiente est ab? Dignissimos, ex maiores expedita sed quaerat ipsam quas praesentium voluptatibus consectetur itaque modi maxime eaque minus eius, placeat possimus porro voluptates explicabo! Non, harum. A maiores harum aut! Ut iure illum nostrum ipsa doloremque! Minima eaque, in non quaerat atque obcaecati molestias alias veniam quibusdam, reprehenderit quo magni quod ipsa culpa similique facilis incidunt velit? In ex sint necessitatibus fugit ipsum? Perspiciatis facere nisi voluptas! Atque, repudiandae. </p>
 </div>
 <div v-else>Loading ...</div>
  <button class="btn btn-danger" @click="Deletpost">Delet post </button>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Getpost from '../Functions/GetPost'
import { db } from '../firebase/config';

export default {
  props:['id'],
  setup(props) {
    const haspost=ref(false)
    const route = useRoute();
    const router= useRouter()
    const {post,error, LoadPost } = Getpost()
    LoadPost(route.params.id).then(()=>{haspost.value=true})
      const Deletpost= async () => {
          await db.collection('posts')
          .doc(props.id)
          .delete()
    router.push({name:'Home'})
      }

    return { post,error,haspost,Deletpost };
  },
};
</script>
    
<style>
</style>