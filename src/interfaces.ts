/* eslint-disable */

export interface Reportable {
	summary(): string;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return `name is ${this.name}`;
	},
};

const drink = {
	color: 'clear',
	carbonated: true,
	sugar: 45,
	summary(): string {
		return `this has ${this.sugar} grams of sugar`;
	},
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary);
};

printSummary(oldCivic);
