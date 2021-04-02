<template>
  <form @submit.prevent="SubmitePost">
    <div class="form-group">
      <label class="float-left" for="exampleFormControlInput1">Titel {{titel}} </label>
      <input
      v-model="titel"
        type="Text"
        required
        class="form-control"
        id="exampleFormControlInput1"
      />
    </div>
    <div class="form-group">
      <label class="float-left" for="exampleFormControlTextarea1"
        >Content
      </label>
      <textarea
      v-model="content"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="form-group">
      <label class="float-left" for="exampleFormControlInput1"
        >Tags (TapEnter to add tag)
      </label>
      <input
        type="Text"
        @keydown.enter.prevent="NewTag"
        v-model="tag"
        class="form-control"
        id="exampleFormControlInput1"
      />
      <span class="tag" v-for="tager in tags" :key="tager">{{ tager }}</span>
    </div>
    <div class="form-group">
      <label class="float-left" for="exampleFormControlInput1"
        >Image Link
      </label>
      <input
      v-model="image"
        type="Text"
        required
        class="form-control"
        id="exampleFormControlInput1"
      />
    </div>
    <button class="btn btn-primary float-right">Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { db, timestamp } from '../firebase/config'
import {  useRouter } from 'vue-router';

export default {
  setup() {
    const tag = ref("");
    const tags = ref([]);
    const titel = ref("");
    const image = ref("");
    const content = ref("");
    const router = useRouter()
    const NewTag = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    const SubmitePost = async () => {
     let post = {
       "titel":titel.value,
       "Content":content.value,
       "image":image.value,
       "tags":tags.value ,
       "createdAt":timestamp()
       }
      /*   fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(post)
      });  */
      const res= await db.collection('posts').add(post)
     
      router.push({name:'Home'})
      
    };

    return { NewTag, tag, tags, titel, image, content, SubmitePost };
  },
};
</script>

<style>
.tag {
  margin-top: 50px;
  padding: 5px;
  background-color: rgb(170, 170, 170);
}
</style>