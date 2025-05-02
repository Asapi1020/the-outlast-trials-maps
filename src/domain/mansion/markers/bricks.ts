import { icon } from "leaflet";

export const bricks = [
	[],
	[
		{ x: 101, y: -183 },
		{ x: 80, y: -164 },
		{ x: 87, y: -131 },
		{ x: 209, y: -125 },
		{ x: 208, y: -140 },
		{ x: 217, y: -172 },
		{ x: 160, y: -172 },
		{ x: 193, y: -213 },
		{ x: 163, y: -217 },
	],
	[
		{ x: 47, y: -142 },
		{ x: 33, y: -179 },
		{ x: 19, y: -186 },
		{ x: 212, y: -126 },
		{ x: 76, y: -80 },
		{ x: 124, y: -73 },
	],
];

export const brickIcon = icon({
	iconUrl: "/marker/brick.png",
	iconSize: [32, 32],
	iconAnchor: [16, 16],
	popupAnchor: [0, -16],
});
