/* eslint-disable */
export let carMakers: string[] = [];
carMakers = ['ford', 'subaru', 'toyota'];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['forester']];

const subaru = carMakers[1];
//carMakers.push(100); this will error

//flexible types

const importantDates: (Date | string)[] = [new Date(), '2020-07-03'];
