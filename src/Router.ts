import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Mansion from "./pages/Mansion.vue";
import PoliceStation from "./pages/PoliceStation.vue";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/mansion", name: "Mansion", component: Mansion },
	{ path: "/police-station", name: "Police Station", component: PoliceStation },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
