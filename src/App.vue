<script>
import { inject } from "@vercel/analytics";
import * as labs from "vuetify/labs/components";
inject();
export default {
	name: "App",
	components: {
		...labs,
	},
};
</script>

<template>
  <v-layout class="rounded rounded-md">
		<router-view></router-view>
	</v-layout>
</template>

<style scoped>
.v-main {
	margin-top: 60px;
}
</style>
