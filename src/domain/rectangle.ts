export interface Rectangle {
	x: number;
	y: number;
	width: number;
	height: number;
	name: string;
	color: string;
}

export const computeRectangleBounds = (item: Rectangle) => {
	return [
		[item.y, item.x],
		[item.y - item.height, item.x + item.width],
	];
};
