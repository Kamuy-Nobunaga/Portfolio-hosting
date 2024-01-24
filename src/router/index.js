import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-project',
    name: 'add-project', 
    component: () => import('../components/AddProject.vue')
  }, 
//   //catch error 404
//   {
//     path: '/:catchAll(.*)', 
//     name: 'notfound', 
//     component: () => import('../components/404.vue')
//   }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //This is HTML5 mode. 
  //Another way of history is the hash mode. Its benefit is the no need of adjusting backend, but searching engine tends to ignore URL with #, which is a downside for website's SEO
  routes
})

export default router
