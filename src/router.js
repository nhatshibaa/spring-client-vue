import { createWebHistory, createRouter } from "vue-router";
const routes =  [
    {
        path: "/login",
        alias: "/login",
        name: "admin-login",
        component: () => import("./components/Login")
    },
    {
        path: "/consent",
        alias: "/consent",
        name: "ConsentScreen",
        component: () => import("./components/ConsentScreen")
    },
    {
        path: "/",
        name: "demoGet",
        component: () => import("./components/demo")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
