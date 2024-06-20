const myNum = [1, 2, 3, 4, 5, 6];

// const newNum = myNum.map((num) => num + 10);
// console.log(newNum);

const newNum = myNum.map((num) => { return num + 10 });
console.log(newNum);

const Chaning = myNum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);
console.log(Chaning);
