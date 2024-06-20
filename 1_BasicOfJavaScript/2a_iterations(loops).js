//                                           Do-while loop in javascript
//                                     --------------------------------------

console.log(" Do-while loop in javascript");
debugger
var a = 10;
do {
    console.log(a);
    a++;
} while (a < 9);
//                                            For loop in javascript
//                                     --------------------------------------
for (let i = 0; i <= 5; i++) {
    console.log(`outter value ${i}`);
    for (let j = 0; j <= 5; j++) {
        console.log(`inner value ${j} & outter value ${i}`);

    }

}
//                                            Break & Continue in javascript
//                                       --------------------------------------
for (let index = 0; index <= 10; index++) {
    if (index == 5) {
        console.log(`5 is detected`);
        // break;
        continue;
    }
    console.log(`index:${index}`);
}
//                                          Truthy and falsy values in javascript
//                                  ----------------------------------------------------------
//  --->Truthy values: [],{},"0",'false'," ",function(){}...etc.
//  ---> We have mainly 5 falsy values in javascript.
//  Those are:  0,"", undefined , null , NaN. && -0, bigIng-->0n

if (score = 0) {
    console.log("loose");
}
else {
    console.log("victory");
}

//also can be write as:
if (0) {
    console.log("loose");
}
else {
    console.log("victory");
}

//                                          Conditional(Ternary) operator in javascript
//                                    --------------------------------------------------------
//  ---> The ternary operator is the only operator in javascript who takes there operands.
console.log("//Conditional(Ternary) operator in javascript");

var age = 17;
console.log((age >= 18) ? "you have license" : "you don't have license");
//           condition         true value             false value

//                                          Switch & brake statement in javascript
//                                     ------------------------------------------
console.log("//Switch & brake statement in javascript");

var area = "circle", pi = 3.14, l = 5, b = 4, r = 3;

switch (area) {
    case "circle": console.log("Area of " + area + " is:: " + pi * r ** 2);
    case "circle": console.log(` Area of ${area} is:: ${pi * r ** 2} `); //ES6
        break;
    case "triangle": console.log("Area of " + area + " is:: " + (l * b) / 2);
        break;
    case "rectangle": console.log("Area of " + area + " is::" + (l * b));
        break;

    default: console.log("please enter a valid area");
}

const emptyArr = [];
if (emptyArr.length === 0) {
    console.log("empty arr")
};

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log(`Obj is Empty`);
}

//Nullish Coalescing Operator(??) : null undefined
// To avoid null & undefined we use it 

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10; //-->In real wrold a complex function takes the 10's place;
// val1 = undefined ?? 10;
// val1 = null ?? 10 ?? 25;
console.log(val1);


