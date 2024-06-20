const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
//                                                         ^
//                                                         |_________________________Property Name Which WE Want...   
console.log(descriptor);
//So We Can't Change The Value Of PI As It Is UnWritable...


//-----------------------------------------------------------Doing Same With Our Object^
const Obj = {
    Name: "Bikram",
    Age: 18,
}
console.log(Object.getOwnPropertyDescriptor(Obj, 'Name'));

Object.defineProperty(Obj, 'Name', {
    writable: false,
    enumerable: false,

});
console.log(Object.getOwnPropertyDescriptor(Obj, 'Name'));


const newObject = {
    Name: 'MakshaD',
    Rank: 'ACE',
    Season: 5,
    aFunction: function () {
        console.log(`otherthan Line No.34 , A Function Can Also Give Trouble`);
    }
}

// for (const [key, value] of myObject) {
//     console.log(`${key} : ${value}`);   Depends Upon Cases Object Aren't Itertable...
// }
for (const [key, value] of Object.entries(newObject)) {  //Soo Use This Method <---
    if (typeof value !== 'function') {   //Soo Use This Method For Function <---
        console.log(`${key} : ${value}`);
    }
    else ("Function Can't Be Itertable");
}

