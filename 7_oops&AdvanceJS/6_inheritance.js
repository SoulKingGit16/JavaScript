class user {
    constructor(username) {
        this.username = username
    }
    log() {
        console.log(`Name:${this.username}`);
    }
}
class primeUser extends user {
    constructor(username, duration) {
        super(username)             // Super keyWord Will Automatically Do All The Dramas Done In '4_call_&_this.JS'
        this.duration = duration
    }
    freeDelivery() {
        console.log(`${this.username} Got Free Delivery For ${this.duration}`);
    }
}

const userOne = new primeUser('Alpha', '3M');
userOne.log();
userOne.freeDelivery();

const userTwo = new user('Rescarch');
userTwo.log();

console.log(userOne === userTwo);
console.log(user === primeUser);
console.log(userOne === primeUser);
console.log(userOne instanceof user);
console.log(userOne instanceof primeUser);

