
const aSymbol = Symbol("key1");

const user = {
    Name: "Bikram",
    "Age": 18,                    //Javascript Automatically Detectes it, when we dont give "__"  ;
    [aSymbol]: "mykey1",
    "E mail": "Bikram@google.com",
    Qualities: ["C", "C++", "Javascript"]
}

console.log(user.Age);
// console.log(user."E mail");     WE CANT DO THIS SOO RIGHT SYNTAX IS GIVEN BILOW:
console.log(user["E mail"]);
// console.log(user[Qualities]);
console.log(user["Qualities"]);
console.log(user[aSymbol]);


user["E mail"] = "Bikram@codedamn.com";
user.Age = 19;
console.log(user["E mail"]);
console.log(user["Age"]);

// Object.freeze(user);  //NOW WE CANT CHANGE ANYTHING;
user["Age"] = 20;
console.log(user["Age"]);

user.greetings = function () {
    console.log(`hello user ${this.Name}`)
}

console.log(user.greetings);
console.log(user.greetings());


