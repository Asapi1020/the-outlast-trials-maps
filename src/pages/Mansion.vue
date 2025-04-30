<script setup lang="ts">
import {
	LMap,
	LMarker,
	LPopup,
	LRectangle,
	LTileLayer,
} from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import "leaflet/dist/leaflet.css";
import { Mansion } from "@this/domain";
import {
	bottleIcon,
	brickIcon,
	containerIcon,
	hideSpotsIcon,
	objectiveIcon,
} from "@this/domain/mansion";
import { CRS, type Map as LeafletMap } from "leaflet";

const zoom = ref<number>(2);
const cursorPosition = ref({ x: 0, y: 0 });
const floor = ref<number>(2);

const latLang = (x: number, y: number) => {
	return [y, x];
};

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

    <l-marker v-for="(item, index) in Mansion.hideSpots[floor]" :key="index" :lat-lng="latLang(item.x, item.y)" :icon="hideSpotsIcon">
      <l-popup>{{ `Hide Spot (${item.name})` }}</l-popup>
    </l-marker>
    <l-marker v-for="(item, index) in Mansion.containers[floor]" :key="index" :lat-lng="latLang(item.x, item.y)" :icon="containerIcon">
      <l-popup>{{ `Container (${item.name})` }}</l-popup>
    </l-marker>
    <l-marker v-for="(item, index) in Mansion.bottles[floor]" :key="index" :lat-lng="latLang(item.x, item.y)" :icon="bottleIcon">
      <l-popup>Bottle</l-popup>
    </l-marker>
    <l-marker v-for="(item, index) in Mansion.bricks[floor]" :key="index" :lat-lng="latLang(item.x, item.y)" :icon="brickIcon">
      <l-popup>Brick</l-popup>
    </l-marker>
    <l-marker v-for="(item, index) in Mansion.objectives[floor]" :key="index" :lat-lng="latLang(item.x, item.y)" :icon="objectiveIcon(item.name)">
      <l-popup>{{ item.name }}</l-popup>
    </l-marker>

    <l-rectangle v-for="(item, index) in Mansion.rectangles[floor]" :key="index"
      :bounds="[[item.y, item.x], [item.y-item.height, item.x+item.width]]"
      :color="item.color"
      :fillColor="item.color"
      :fillOpacity="1"
      :weight="2"
    >
      <l-popup>{{ item.name }}</l-popup>
    </l-rectangle>
  </l-map>
</template>

<style scoped>
.map {
  background-color: transparent;
}
</style>
