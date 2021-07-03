//primitives
export let apples: number = 5;
export let speed: string = 'fast';
export let hasName: boolean = true;
export let noResponse: null = null;
export let nothing: undefined = undefined;

//array
export const color: string[] = ['red', 'blue', 'green'];
export const myNumbers: number[] = [1, 2, 3, 4];

//class
export let now: Date = new Date();
export class Car {}
export let car: Car = new Car();

//object literals
export let point: { x: number; y: number } = {
	x: 0,
	y: 20,
};

//function
export const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};
