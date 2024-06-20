// // const insta = new Object();  //SINGLETONE OBJECT.
// const insta = {};               //NON-SINGLETONE OBJECT.
// console.log(insta);

const instaUser = {
    Email: "Bikaram@google.com",
    name: {
        username: {
            fullName: "Bikram.s"
        }
    }
};

console.log(instaUser.name.username.fullName);


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
// const obj3 = { obj1, obj2 };       PROBLEM.....


// const obj3 = Object.assign(obj1, obj2);

// //                             Sources
// //              Target < _      ^    ^
// //                         |    |    |
// //                         |    |    |
// const obj3 = Object.assign({}, obj1, obj2);  //though it returnes same output but for readability we use {}

obj3 = { ...obj1, ...obj2 };    //SPREAD

console.log(obj3);



console.log(Object.keys(instaUser));   //Important for DataBase;cause its returens array...so we can use loop etc.
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty("Email"));



const course = {
    name: "javaScript",
    price: 199,
    courseInstructor: "Bari"
}

// console.log(course.courseInstructor);

// const{courseInstructor}=course;
// console.log(courseInstructor);

const { courseInstructor: cIns } = course;
console.log(cIns);

