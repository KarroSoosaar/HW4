import { createRouter, createWebHistory } from 'vue-router';
import AllPosts from "../views/AllPosts.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import Contacts from "../views/Contacts.vue";
import auth from "../auth"

const routes = [
    {
        path: "/",
        name: "home",
        component: AllPosts,

        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/login",
        name: "LogIn",
        component: LogIn,
    },

    {
        path: "/allposts",
        name: "AllPosts",
        component: AllPosts,
    },
    {
        path: "/apost/:id",
        name: "APost",
        component: APost,
    },
    {
        path: "/addpost",
        name: "AddPost",
        component: AddPost,

        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            console.log(authResult);
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: Contacts,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router;