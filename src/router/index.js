import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages";
import Todos from "../pages/todos";
import Todo from "../pages/todos/_id.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/todos",
            name: "Todos",
            component: Todos,
        },
        {
            path: "/todos/:id",
            name: "Todo",
            component: Todo,
        },
    ],
});

export default router;
