import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Mansion from "./pages/Mansion.vue";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/mansion", name: "Mansion", component: Mansion },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
