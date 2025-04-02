<script>
import { inject } from "@vercel/analytics";
import * as labs from "vuetify/labs/components";
import "./assets/global.css";
import Header from "./components/Header.vue";
inject();
export default {
	name: "App",
	components: {
		...labs,
		Header,
	},
};
</script>

<template>
  <v-layout class="rounded rounded-md">
		<Header />
		<v-main class="custom-main">
			<router-view></router-view>
		</v-main>		
	</v-layout>
</template>

<style scoped>
</style>
