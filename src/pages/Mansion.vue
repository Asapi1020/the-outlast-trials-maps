<script setup lang="ts">
import { LMap, LMarker, LPopup, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import "leaflet/dist/leaflet.css";
import { Mansion } from "@this/domain/tiles";
import { CRS, type Map as LeafletMap, icon } from "leaflet";

const zoom = ref<number>(2);
const cursorPosition = ref({ x: 0, y: 0 });
const floor = ref<number>(0);

const items = ref([
	{ name: "Hide Spot (Closet)", x: 84, y: -130 },
	{ name: "Hide Spot (Barrel)", x: 100, y: -152 },
	{ name: "Hide Spot (Barrel)", x: 96, y: -161 },
	{ name: "Hide Spot (Barrel)", x: 59, y: -126 },
	{ name: "Hide Spot (Barrel)", x: 46, y: -121 },
	{ name: "Hide Spot (Locker x2)", x: 38, y: -143 },
	{ name: "Hide Spot (Closet)", x: 34, y: -166 },
	{ name: "Hide Spot (Closet)", x: 29, y: -166 },
	{ name: "Hide Spot (Closet)", x: 9, y: -166 },
	{ name: "Hide Spot (Closet)", x: 9, y: -160 },
	{ name: "Hide Spot (Locker)", x: 35, y: -160 },
	{ name: "Hide Spot (Closet)", x: 35, y: -121 },
	{ name: "Hide Spot (Barrel)", x: 15, y: -112 },
	{ name: "Hide Spot (Closet)", x: 35, y: -105 },
	{ name: "Hide Spot (Closet)", x: 87, y: -93 },
	{ name: "Hide Spot (Locker)", x: 70, y: -85 },
	{ name: "Hide Spot (Barrel)", x: 155, y: -88 },
	{ name: "Hide Spot (Closet)", x: 150, y: -100 },
	{ name: "Hide Spot (Bed)", x: 142, y: -141 },
	{ name: "Hide Spot (Closet)", x: 125, y: -130 },
	{ name: "Hide Spot (Locker x2)", x: 200, y: -132 },
	{ name: "Hide Spot (Barrel)", x: 193, y: -173 },
	{ name: "Hide Spot (Closet)", x: 230, y: -141 },
	{ name: "Hide Spot (Locker)", x: 204, y: -129 },
	{ name: "Hide Spot (Closet)", x: 229, y: -109 },
	{ name: "Hide Spot (Bed)", x: 212, y: -113 },
	{ name: "Hide Spot (Closet)", x: 193, y: -109 },
	{ name: "Hide Spot (Box)", x: 193, y: -102 },
	{ name: "Hide Spot (Barrel)", x: 241, y: -126 },
]);

const latLang = (x: number, y: number) => {
	return [y, x];
};

const itemIcon = icon({
	iconUrl: "/marker/hideSpot.png",
	iconSize: [32, 32],
	iconAnchor: [16, 16],
	popupAnchor: [0, -16],
});

const onMapReady = (map: LeafletMap) => {
	map.on("mousemove", (e) => {
		cursorPosition.value = {
			x: e.latlng.lng,
			y: e.latlng.lat,
		};
	});
};
</script>

<template>
  <div style="position: absolute; z-index: 1000; padding: 8px;" class="ml-12">
    <p class="mb-4">X={{ cursorPosition.x.toFixed(2) }}, Y={{ cursorPosition.y.toFixed(2) }}</p>
    <v-btn class="mr-2" @click="floor = 0" :disabled="floor === 0">BF</v-btn>
    <v-btn class="mr-2" @click="floor = 1" :disabled="floor === 1">1F</v-btn>
    <v-btn class="mr-2" @click="floor = 2" :disabled="floor === 2">2F</v-btn>
  </div>
  <l-map :zoom="zoom" :center="[-128,128]" :use-global-leaflet="false" style="height: 90vh; width: 100vw;" :crs="CRS.Simple" class="map" @ready="onMapReady">
    <l-tile-layer :url="Mansion.tileUrls[floor]" :max-zoom="3" :no-wrap="true" :tile-size="256"/>

    <l-marker v-for="(item, index) in items" :key="index" :lat-lng="latLang(item.x, item.y)" :icon="itemIcon">
      <l-popup>{{ item.name }}</l-popup>
    </l-marker>
  </l-map>
</template>

<style scoped>
.map {
  background-color: transparent;
}
</style>
