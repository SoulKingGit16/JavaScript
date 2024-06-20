var ary = new Array; //NOT MANDATORY IN JS;

var ary = ["soulking", 2, 0, 6, "Tyson"]; // WE CAN PUT ANY TYPE OF DATA IN ARRAY ONLY IN JS;
//               ^                 ^
//               ^                 ^-------------->Upper Index/ Upper Boundary;
//               |
//          Lower Index/
//          Lower Boundary

console.log(ary.length);// "length" property to know length of an array;
console.log(ary[4]);
console.log(ary[ary.length - 1]);
console.log("------------------------------------");

//                                                    For In and For Of Loop
//                                                -------------------------------

// For In
for (let elements in ary) {
    console.log(elements);
}

console.log("------------------------------------");

for (var ok of ary) {
    console.log(ok);
}


//                                                      forEach Method
//                                                --------------------------
console.log("------------------------------------");
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// but we can't break or stop forEach Method.

ary.forEach(function (element, index, array) {
    // console.log(element);
    console.log(`${element}'s Index.No:: ${index} of  ${array}`);
});

//                                               forEach Method using Fat Arrow
//                                             -----------------------------------
console.log("  ");
console.log("ForEach Method using Fat Arrow:");

ary.forEach((element, index, array) => {
    console.log(`${element}'s Index.No:: ${index} of ${array}`);
});
// WE CAN'T USE "THIS OPERATOR" IN ^THIS METHOD;




