let Masters = ['soulKing', 'MakshaD'];

let abilities = {
    soulKing: 'weaponMaster',
    MakshaD: 'perfectionist',

    getAbility: function () {
        console.log(`soulKing's Ability >> ${this.soulKing}`);
    }
}

/*
Function()------------------------------------
//                                           |
//                                           |
//                                           |
Arrays----------------------------------->[Object]----------------------------→[null];
//                                           ^
//                                           |
//                                           |
strings---------------------------------------
*/


Object.prototype.objToArray = function () {
    console.log(` Now This Function Will Be Present In All Object! `);  //As We Decleare Our Property into Object So Array will Also Get It...E.g.^ 
}

abilities.objToArray();
Masters.objToArray();  // According To The Diagram^
//Butt

Array.prototype.arrayToObj = function () {
    console.log(` Will Present In All Arrays But Not In Objects! `);
}

Masters.arrayToObj();
// abilities.arrayToObj();

//                                                                      Prototypal Inheritance
//                                                           ---------------------------------------------
const user = {
    user: 'king',
}
const programmer = {
    canFixPrinter: false,
    __proto__: user  //<i
}
const laptop = {
    temparatue: '100C',
    // __proto__:programmer
}
user.__proto__ = laptop;//<ii                                   Wrong-->(// laptop.__proto__ = programmer)

console.log(programmer.user);
console.log(user.temparatue);

//Modern Syntax

const Acc = {
    name: 'null'
}
const kart = {
    item: 'x1'
}

Object.setPrototypeOf(Acc, kart);
console.log(Acc.item);

// Object.setPrototypeOf(kart, Acc);
// console.log(kart.name);                Situation Matters


const withSpace = '    COBOL    '

String.prototype.spaceCutter = function () {
    console.log(this);
    console.log(`${this}`);
    console.log(`True Lenth Is->${this.trim().length}`);
}

withSpace.spaceCutter();
'  Java Script'.spaceCutter();
'null'.spaceCutter();

