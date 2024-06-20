"use strict";  //this will treat my all js code as newer version; that's why the rank variable is unable to do his work;


//data types:
const TheKing = 'soulking'; //"soulking"
let BadgeEarn = 999;
var possessive = true;
// rank="tier1";
console.log('the king ' + TheKing);
console.log(BadgeEarn);
console.log(possessive);
// another method of console;
console.table([TheKing,BadgeEarn,possessive,rank]);

// **prefer not to use var because of issue in block scope & functional scope;
//typeof operator:

console.log(typeof (TheKing));
console.log(typeof (BadgeEarn));
console.log(typeof (possessive));
console.log(typeof (tier1));


//some functions & bugs of javascript:

console.log(10 + "80");
console.log(9 - "4");//bug
console.log(4 - "9");//bug
console.log("soul" - "king"); //not a number
console.log(true + true);
console.log(false - true);


// Interview Question_1:The Difference Between Null & Undefined?

var IsNull = null; // now this var is empty or uselesss.
console.log(IsNull);
console.log(typeof (IsNull));  //bug

var StandBy;
console.log(StandBy); // the stangby variable is undefined & we can use it later.
console.log(typeof (StandBy));


// Interview Question_2: what is NaN?

//-->Nan is a property of Global Object.

var myPhoneNumber = 8695478778;
var myName = 'king';

console.log(isNaN(myPhoneNumber)); //is not a number method.
console.log(isNaN(myName));

if (isNaN(myName)) {
    console.log('please check your phone number.')
}



// Nan practice:
console.log('// Nan practice:');



NaN === NaN;
Number.NaN === NaN;
isNaN(NaN);
isNaN(Number.NaN);
Number.isNaN(NaN);


console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));




//                                                    expressions & operators
//                                                -------------------------------
//
//                               in js 5 is called operand <-----5   +  20        = 25-------->is called Numerical value
//                                                                   ^
//                                                                   |
//                                                                   |
//                                                                 operator
// 
// 
// Expressions:The combination of operator & operand is called expression.
// 
// 
// 
// 
//                                                    comparison operators
//                                                 ---------------------------
console.log("//comparison operators");

var a = 15;
var b = 10;

console.log(a == b);//equal
console.log(a != b);//not equal

console.log(a > b);//greater than
console.log(a < b);//less than

console.log(a >= b);//greater than equals to
console.log(a <= b);//less than equals to

// ---------------------------------------------------------------------------------------------------------------------------------------------------

console.log("//not operator");
console.log(!true); //not operator
console.log(!false); //not operator


//Note---->>> The (+) in string is called concatenated operator;


//                                                    exponential operator
//                                                 ---------------------------

console.log("//exponential operator");
console.log(4 ** 2);// 4 to the power of 2;



//                                    Interview Question_3:The Difference Between == & === ?
//                                  ----------------------------------------------------------

console.log("Interview Question_3:The Difference Between == & === ?");

var num1 = 5;
var num2 = "5";
console.log(num1 == num2);//this will give us true 
console.log(num1 === num2);// but this will give us false.

//-->so the difference between == & === is that,== only check the value but === will check value as well as the data type.


//                                    Own Question_1:The Difference Between = & == ?
//                                 -----------------------------------------------------

//----> "=" is a assignment operator so if we write Num = 3, so Num will be assigned 3. But if we write Num == 3, so now num will be 
// compared by 3;


