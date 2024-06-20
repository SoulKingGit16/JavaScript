class user {
    constructor(username, passWord) {
        this.username = username;
        this.passWord = passWord;
    }
    encryptpassWord() {
        return `*#${this.passWord}$*`;   //Here 'encryptPassWord' Is A Function But Cause It Is Under The Class We call It Method & Dont Have To Use Old Function Syntax
    }
    caseChanger() {
        return this.username.toUpperCase();
    }
}
const userOne = new user('nulla', 111);

console.log(userOne.encryptpassWord());
console.log(userOne.caseChanger());

//Behind The Scene

function user(username, passWord) {
    this.username = username;
    this.passWord = passWord;
}
user.prototype.encryptpassWord = function () {
    return `*#${this.passWord}$*`;
}
const userTwo = new user('nulla', 121);
console.log(userTwo.encryptpassWord());


