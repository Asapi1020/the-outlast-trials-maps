<script setup lang="ts">
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import "leaflet/dist/leaflet.css";

const zoom = ref(10);
const center = ref([35.6895, 139.6917]); // 東京
</script>

<template>
  <l-map :zoom="zoom" :center="center" :use-global-leaflet="false" style="height: 1000px; width: 100%;">
    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <l-marker :lat-lng="center" />
  </l-map>
</template>
