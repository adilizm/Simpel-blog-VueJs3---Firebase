import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post_info from '../components/Post_info.vue'
import Creat from '../views/Creat.vue'
import TagPosts from '../views/Tagposts.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Post_info',
    component: Post_info,
    props:true,
  },
  {
    path: '/Creat',
    name: 'Creat',
    component: Creat,
   
  },
  {
    path: '/tags/:tag',
    name: 'TagPosts',
    component: TagPosts,
   
  },
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
