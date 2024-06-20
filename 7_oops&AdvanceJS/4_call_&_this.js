function setUsername(username) {
    this.username = username;
    console.log(`This Function Is Being called`);
};

function userDetails(username, password) {
    setUsername(username); //We Don't Have The Access Of username Because The 'setUsername' Function's Execution Contex Will Be Done In Global EC Not Under 'userDetails' Function...
    setUsername.call(username);//This Will Hold The Reference...
    setUsername.call(this, username);
    //                 ^
    //                 |_________________________Now The 'setUsername' Function Will Pass His CEC To userDetails 'this'...
    this.password = password;
}

const user = new userDetails('Sayad', 0o6);
console.log(user);



