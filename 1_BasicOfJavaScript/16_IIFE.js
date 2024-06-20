//                                       Immediately Invoked Function Expression (IIFE)
// >> To avoid polution of global scope we use IFFE...

(function dB() {
    //NAMED IFFE
    console.log(`connect to dB`);
})();  // Syntax ()()        IN THIS LINE WE HAVE TO GIVE ";" BY SELF.

(() => {
    //UNNAMED IFFE
    console.log(`dB connected`);
})();


((name) => {
    console.log(`${name}dB connected`);
})("mongo");

