const balance = new Number(187.91);
const temp = (balance.toString());
console.log(typeof temp);
console.log(balance.toPrecision(3));

const bigNumber = 1000000000;
console.log(bigNumber.toLocaleString());  //US
console.log(bigNumber.toLocaleString("en-IN"));//INDIAN

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.9));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));


console.log(Math.random());

const max = 6;
const min = 1;

console.log(Math.floor(Math.random() * ((max - min) + 1) + min));

