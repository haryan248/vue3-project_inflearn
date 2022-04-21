import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages";
import Todos from "../pages/todos";

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
            path: "/",
            name: "Home",
            component: "",
        },
    ],
});

export default router;
