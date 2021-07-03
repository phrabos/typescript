export const today = new Date();
export const person = {
	age: 20,
};
class Dog {
	name;
	age;
	breed;
	constructor(name: string, age: number, breed: string) {
		this.name = name;
		this.age = age;
		this.breed = breed;
	}
}

const spot = new Dog('spot', 5, 'poodle');
