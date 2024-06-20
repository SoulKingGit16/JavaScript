function outer() {
    let browser = 'Chrome';
    function display() {
        console.log(browser);
    }
    return display; //This will Store Or Return Display As Well As The Outer Function's Lexical Scope... 
}

const myBr = outer();
myBr();

