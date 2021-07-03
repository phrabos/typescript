/* eslint-disable */
const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 43,
};

export type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 43];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['green', false, 0];
