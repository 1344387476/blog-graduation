import Router from 'vue-router'
import Vue from 'vue'
const Home = () => import('../views/home/Home.vue')
const About = () => import('../views/about/About.vue')
const Album = () => import('../views/album/Album.vue')
const Blog = () => import('../views/blog/Blog.vue')

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/album',
            component:Album
        },
        {
            path:'/blog',
            component:Blog
        }
    ],
    mode:'history'
})