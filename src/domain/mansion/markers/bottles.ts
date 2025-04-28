import { icon } from "leaflet";

export const bottles = [
	[],
	[
		{ x: 73, y: -135 },
		{ x: 101, y: -144 },
		{ x: 120, y: -101 },
		{ x: 149, y: -93 },
		{ x: 164, y: -205 },
		{ x: 189, y: -223 },
		{ x: 151, y: -203 },
		{ x: 65, y: -132 },
		{ x: 45, y: -167 },
		{ x: 85, y: -118 },
	],
	[
		{ x: 82, y: -162 },
		{ x: 62, y: -134 },
		{ x: 35, y: -157 },
		{ x: 157, y: -111 },
		{ x: 193, y: -114 },
		{ x: 238, y: -99 },
		{ x: 149, y: -92 },
		{ x: 96, y: -106 },
	],
];

export const bottleIcon = icon({
	iconUrl: "/marker/bottle.png",
	iconSize: [32, 32],
	iconAnchor: [16, 16],
	popupAnchor: [0, -16],
});
