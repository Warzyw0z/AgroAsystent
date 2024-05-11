import { createRouter, createWebHistory } from "vue-router";
import mainPage from "./views/mainPage.vue";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: mainPage
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;
