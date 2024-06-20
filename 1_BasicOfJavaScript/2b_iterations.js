//                                                  FOR OF WITH ARRAYS
//                                               ------------------------
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}


const replied = "Hann Ji";
for (const reply of replied) {
    if (reply != " ") {
        console.log(`each char is :: ${reply}`);
        continue;
    }
}
//                                                   MAP
//                                               ------------
const myMap = new Map();
myMap.set('IN', "India");
myMap.set('USA', "Amarica");
myMap.set("IN", "India");

console.log(myMap);

// for (const key of myMap) {
//     console.log(key);------------------>>MAP IS NOT ITERTRABLE
// }

for (const [key, value] of myMap) {
    console.log(key, ":->", value);
}

//                                                  FOR IN WITH OBJECTS
//                                               -------------------------
const myObj =
{
    js: "javaScript",
    rb: "ruby"
}
for (const key in myObj) {
    console.log(key);
    console.log(`${key} :: ${myObj[key]}`);
}

//                                                  FOR IN WITH ARRAYS
//                                               -------------------------
const languages = ["cpp", "java", "cobol"];
for (const key in languages) {
    console.log(key);
    console.log(`${key}-->${languages[key]}`);
}

//                                                  FOR EACH WITH ARRAYS
//                                               -------------------------
const lang = ["cpp", "java", "cobol"];

lang.forEach(function (val) {
    console.log(val);           //--->FOR EACH uses a callback function;Means the function has no name;
});

//DIFFERENT WAY
lang.forEach((val) => {
    console.log(val);
});

//DIFFERENT WAY
lang.forEach(val => {
    console.log(val);
});

//DIFFERENT WAY
function printMe(val) {
    console.log(val);
}
lang.forEach(printMe);

// MORE IN 6a_array.js
//                                                  FOR EACH WITH OBJECTS IN ARRAYS 
//                                               -------------------------------------
const coding = [
    {
        language: "javaScript",
        extension: "js"
    },
    {
        language: "c++",
        extension: "cpp"
    },
    {
        language: "c",
        extension: "c"
    }
]

coding.forEach(item => {
    console.log(item.extension);
});



