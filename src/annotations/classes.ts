/* eslint-disable */

export class Vehicle {
	color: string;
	constructor(color: string) {
		this.color = color;
	}
	drive(): void {
		console.log('it drives');
	}

	honk(): void {
		console.log('beep');
	}
}

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
		this.wheels = wheels;
	}
	drive(): void {
		console.log('car drives');
	}
}

const vehicle1 = new Car(4, 'blue');
vehicle1.drive();
