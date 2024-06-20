// symbol use to make a string unique;

const example = Symbol(123);

const example2 = Symbol(123);

console.log(typeof (example));

console.log(typeof (example2));

console.log(example === example2);



// WE USE "n" to declear bigInt;
const bigInt = 344n;
console.log(typeof (bigInt));


// WE USE "{ }" TO DECLEAR OBJECT;

const object = {
    name: "bikram",
    age: 18,
}

console.log(typeof (object));

