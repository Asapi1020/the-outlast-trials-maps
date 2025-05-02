<script setup lang="ts">
import { PoliceStation } from "@this/domain";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { CRS, type Map as LeafletMap, type LeafletMouseEvent } from "leaflet";
import { onBeforeUnmount, ref } from "vue";

const zoom = ref<number>(2);
const cursorPosition = ref({ x: 0, y: 0 });
const floor = ref<number>(1);

const onMapReady = (map: LeafletMap) => {
	const handleMouseMove = (e: LeafletMouseEvent) => {
		cursorPosition.value = {
			x: e.latlng.lng,
			y: e.latlng.lat,
		};
	};

	map.on("mousemove", handleMouseMove);

	onBeforeUnmount(() => {
		map.off("mousemove", handleMouseMove);
	});
};
</script>

<template>
	<div style="position: absolute; z-index: 1000; padding: 8px;" class="ml-12">
		<p class="mb-4">X={{ cursorPosition.x.toFixed(2) }}, Y={{ cursorPosition.y.toFixed(2) }}</p>
		<v-btn class="mr-2" @click="floor = 0" :disabled="floor === 0">BF</v-btn>
		<v-btn class="mr-2" @click="floor = 1" :disabled="floor === 1">1F (GF)</v-btn>
		<v-btn class="mr-2" @click="floor = 2" :disabled="floor === 2">2F (1F)</v-btn>
		<v-btn class="mr-2" @click="floor = 3" :disabled="floor === 3">3F (2F)</v-btn>
	</div>

	<l-map :zoom="zoom" :center="[-128,128]" :use-global-leaflet="false" style="height: 90vh; width: 100vw;" :crs="CRS.Simple" class="map" @ready="onMapReady">
		<l-tile-layer :url="PoliceStation.tileUrls[floor]" :max-zoom="3" :no-wrap="true" :tile-size="256"/>
	</l-map>
</template>

<style scoped>
.map {
  background-color: transparent;
}
</style>
