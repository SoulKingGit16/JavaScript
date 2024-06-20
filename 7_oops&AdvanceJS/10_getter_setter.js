class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    set password(value) {
        this._password = value;  //set will use to set the main password in class but get will return user the costom password...
        console.log(value);
    }
    get password() {
        return this._password.toUpperCase();    //If We Use Same Variable Names So The Getter & Setter Will Start Race With Constructor & Fill The Call-Stack...
    }
    set username(value) {
        this.userId = value;
    }
    get username() {
        return `Your User-Id : ${this.userId.toUpperCase()}`
    }

}

const userOne = new user('nulla@!', 'defined@12');
console.log(userOne.password);
console.log(userOne.username);

//                                                                       Properties Based Get-Set
//                                                                ---------------------------------------
function User(email) {
    this._email = email;
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        Set: function (value) {
            this._email = value;
        }
    })
}

const userTwo = new User('@yahoo.in');
console.log(userTwo.email);

//                                                                       Object Based Get-Set
//                                                                ---------------------------------------
const person = {
    _email: 'contact@Vikram',
    _password: 'superSecure',
 // ^-----------------------------Defining a Private Property...
    get email() {
        return `E-mail: ${this._email}`
    },
    set email(value) {
        this._email = value;
    }
}

const personId = Object.create(person);
console.log(personId.email);


