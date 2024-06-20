// Almost Everything In Js Behaves Like An Object...
// So We Can Use Anything Like Object... 
function multiBy5(num) {
    return num * 5
}

multiBy5.power = 2; //(E.g.)

console.log((multiBy5(5)));
console.log(multiBy5.power);
console.log(multiBy5.prototype);

function createUser(itemName, price) {
    this.itemName = itemName;
    this.price = price;

}

createUser.prototype.increment = function () {                         // Declaring Own Function...
    this.price++; //('this'->increment the value who calls you)...
}

// createUser.prototype.printMe = () => {
//     console.log(`Price of ${this.itemName} is > ${this.price}`);   //We Cant Use '.this' in Fat Arrow Function (Since the static methods doesn't have any 
// }                                                                  //instance you  cannot use the 'this' reference within a static method - Google)
createUser.prototype.printMe = function () {
    console.log(`Price of ${this.itemName} is > ${this.price}`);
}

// const coffie = createUser('Coffie', 450);  //To Use The Aditional Properties(increment,printMe) We Have To Tell Frist, Which Was Done By The 'new' KeyWord...
// const chai =  createUser('Chai', 5);

const coffie = new createUser('Coffie', 450); //(E.g.)
const chai = new createUser('Chai', 5);

coffie.increment();
chai.printMe();


/*
//                                                                      Interview
//                                                           ---------------------------------


Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

