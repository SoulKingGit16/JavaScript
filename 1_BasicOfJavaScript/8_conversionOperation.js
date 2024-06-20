let score = "69abc";

console.log(typeof score);

let exchangeDatatype = Number(score);

console.log(typeof exchangeDatatype);

console.log(exchangeDatatype);

// Because "69abc" is not a number so its value prints NaN.....though js tries to convert it in number datatype;

console.log("another Example");

let haveAccount = 1;  //this will give us true everytime expect 0 , "" , or anything like empty;  

console.log(typeof haveAccount);
let exchangeDatatype2 = Boolean(haveAccount);

console.log(typeof exchangeDatatype2);
console.log(exchangeDatatype2);


console.log("some confusing conversions");

console.log(1 + "2");

console.log(1 + "2" + 3);

console.log("1" + 2 + 3);

console.log(1 + 2 + "3");

console.log(+true);

console.log(+"");


