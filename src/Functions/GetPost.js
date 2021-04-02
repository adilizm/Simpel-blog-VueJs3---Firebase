
import { ref } from 'vue'
import { db } from '../firebase/config'
 const Getpost = ()=>{
    const post = ref(null);
    const error = ref("");
    const LoadPost = async (id) => {
      try {
        /* let data = await fetch("http://localhost:3000/posts/"+id);
        if (!data.ok) {
          throw console.error("Couldent Get the posts");
        }
        post.value = await data.json();*/
        const resurce = await db.collection('posts').doc(id).get()
        post.value= {...resurce.data(),id:resurce.id}
   
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
      console.log(post.value);
    };

    return {post,error, LoadPost }
 }

 export default Getpost