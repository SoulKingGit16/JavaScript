const languages = ["c++", "c", "Rust"];
const Declarative_languages = ["Html", "Css"];
const populerLanguages = ["Go", "Ruby"];

// languages.push(Declarative_languages);
// console.log(languages);               --------->outputs: [ 'c++', 'c', 'Rust', [ 'Html', 'Css' ] ]
// console.log(Declarative_languages);                      [ 'Html', 'Css' ]

const newArrByConcat = languages.concat(Declarative_languages, populerLanguages);
console.log(newArrByConcat);

const newArr = [...languages, ...Declarative_languages, ...populerLanguages];
console.log(newArr);

const complexArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(complexArray.flat(Infinity));

console.log(Array.isArray(languages));
console.log(Array.from("COBOL"));
console.log(Array.from({ name: "COBOL" }));  //*** 

let intiger = 100;
let string = "Github";
let char = '64';
console.log(Array.of(intiger, string, char));

