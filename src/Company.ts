import faker from 'faker';

export class Company {
	name: string;
	slogan: string;
	location: {
		lat: number;
		lng: number;
	};
	constructor() {
		this.name = faker.company.companyName();
		this.slogan = faker.company.catchPhrase();
		this.location = {
			lat: +faker.address.latitude(),
			lng: +faker.address.longitude(),
		};
	}
}
