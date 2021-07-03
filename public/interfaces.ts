/* eslint-disable */

interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
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

const printVehicle = (vehicle: Vehicle): void => {
	console.log(`
  name: ${vehicle.name}
  year: ${vehicle.year}
  broken: ${vehicle.broken}
  `);
};

printVehicle(oldCivic);
