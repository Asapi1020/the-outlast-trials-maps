<script setup lang="ts"></script>

<template>
	<v-app-bar>
		<template v-slot:prepend>
			<router-link to="/" class="app-bar-title">
				The Outlast Trials - Unofficial Maps
			</router-link>
		</template>
    <v-tabs align-tabs="end">
      <v-tab to="/">
			<v-icon icon="mdi-home-circle" size="28" />
      </v-tab>
	  <v-tab to="/mansion">Mansion</v-tab>
    </v-tabs>
	</v-app-bar>
</template>

<style scoped>
.v-app-bar {
	padding: 4px;
	border-bottom: 2px solid #555;
}

.app-bar-title {
	font-size: 1.5rem;
	color: #ffffff;
	text-decoration: none;
	margin-left: 12px;
}
</style>
