import { ref } from 'vue'
import { db } from '../firebase/config'

const Getposts = () => {
  const posts = ref([]);
  const error = ref("");

  const LoadPosts = async () => {
    try {
     /*  let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw console.error("Couldent Get the posts");
      }
      posts. value = await data.json();*/
      const resurce = await db.collection('posts').orderBy('createdAt','desc').get()
      posts.value= resurce.docs.map(doc=>{
        return {...doc.data(),id:doc.id}
      })
      console.log(posts.value)

    } catch (err) {
      error.value = err.message;
    }

  };

  return { posts, error, LoadPosts }
}

export default Getposts