import { icon } from "leaflet";

export const containers = [
	[],
	[
		{ x: 49, y: -163, name: "Tool" },
		{ x: 73, y: -141, name: "Tool" },
		{ x: 214, y: -160, name: "Tool" },
		{ x: 27, y: -177, name: "Tool" },
		{ x: 8, y: -108, name: "Medic" },
	],
	[
		{ x: 62, y: -140, name: "Tool" },
		{ x: 154, y: -141, name: "Tool" },
		{ x: 112, y: -79, name: "Tool" },
		{ x: 240, y: -98, name: "Tool" },
		{ x: 33, y: -157, name: "Tool" },
		{ x: 229, y: -167, name: "Tool" },
		{ x: 65, y: -118, name: "Medic" },
		{ x: 74, y: -98, name: "Medic" },
	],
];

export const containerIcon = icon({
	iconUrl: "/marker/container.png",
	iconSize: [32, 32],
	iconAnchor: [16, 16],
	popupAnchor: [0, -16],
});
