class member {
    constructor(username) {
        this.username = username;
    }

    static createUnqId() {
        return `#${Math.floor(Math.random() * 1000)}`
    }
}

class primeMember extends member {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const newMember = new member('mongoDB');
console.log(newMember.username);
console.log(newMember.createUnqId());  // We Can't Use This Cause Of Static KeyWord...

const user = new primeMember('nulla', 'nulla@Error.com');
console.log(user.email);
console.log(user.createUnqId());  // Same Reason^


