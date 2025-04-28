import { icon } from "leaflet";

export const objectives = [
	[],
	[
		{ x: 198, y: -112, name: "Radio" },
		{ x: 147, y: -152, name: "Radio" },
		{ x: 140, y: -185, name: "Radio" },
		{ x: 208, y: -177, name: "Radio" },
		{ x: 152, y: -222, name: "Radio" },
		{ x: 39, y: -143, name: "Radio" },
		{ x: 28, y: -158, name: "Radio" },
		{ x: 214, y: -124, name: "Radio" },
		{ x: 9, y: -117, name: "Radio" },
		{ x: 229, y: -120, name: "Fuel" },
		{ x: 168, y: -217, name: "Fuel" },
		{ x: 135, y: -171, name: "Fuel" },
		{ x: 45, y: -122, name: "Film" },
		{ x: 14, y: -110, name: "Film" },
		{ x: 39, y: -139, name: "Film" },
	],
	[
		{ x: 107, y: -118, name: "Private Records" },
		{ x: 116, y: -118, name: "Public Records" },
		{ x: 14, y: -175, name: "Private Records Case" },
		{ x: 217, y: -168, name: "Public Records Case" },
		{ x: 189, y: -201, name: "Fuel" },
	],
];

export const objectiveIcon = (name: string) => {
	return icon({
		iconUrl: objectiveSVG(name),
		iconSize: [32, 32],
		iconAnchor: [16, 16],
		popupAnchor: [0, -16],
	});
};

const objectiveSVG = (name: string) => {
	switch (name) {
		case "Radio": {
			return "/marker/singleWave.svg";
		}
		case "Film": {
			return "/marker/movieRole.svg";
		}
		case "Fuel": {
			return "/marker/fuel.svg";
		}
		case "Private Records":
		case "Public Records":
		case "Private Records Case":
		case "Public Records Case": {
			return "/marker/archive.svg";
		}
		default: {
			return "/marker/intel.svg";
		}
	}
};
