//                                                                     Constructor
//                                                           ---------------------------------

function user(userName, age) {
    this.userName = userName;
    this.age = age;//   ^
    //  ^               |_________________________Passed Value Storing Variable.
    //  |__________________________variable Name.

    return this; //(By Default)
}

userOne = new user('Bikram', 18);
//         ^
//         |_________________________Constructer Function, Which Gives A New Instance Everytime. 
userTwo = new user('King', 16);
//         ^
//         |_________________________Execution: i> Creates A New Objet.
//                                             ii>Then A Constructor Function Was Called And It Collects All The Given Arguments(Etc.) & Injects Into '.this' ***
//                                            iii>We Get It.

console.log(userTwo.constructor);
//                     ^
//                     |________________Reference Of Its(userTwo's) Function.

console.log(userOne instanceof user);
console.log(userTwo instanceof Object);


