//                                                      Fat Arrow Function
//                                               --------------------------------
console.log("//Fat Arrow Function");

// NORMAL WAY 

// adder(20, 20);  // IN NORMAL FUNCTION WE CAN CALL THE FUNCTION ANYWHERE;
// function adder(a, b) {
//     sum = a + b;
//     console.log("sum = " + sum);
// }

// MODERN WAY
// const total = (a, b) => {
//     return `sum = ${a + b}`;                 THIS IS CALLED ARRAW FUNCTION
// }
// console.log(total(10,10));


const total = (a, b) => `sum = ${a + b}`; // WE DON'T NEED TO WRITE RETURN OR {} FOR ONE LINE CODES;  & ALSO FOR ();
console.log(total(10, 10));



const sum = (num1, num2) => (
    `sum=${num1 + num2}`                        //EXAMPLE;
);
console.log(sum(5, 5));

