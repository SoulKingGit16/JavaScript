let Mydate = new Date();
console.log(Mydate);
console.log(Mydate.toString());
console.log(Mydate.toJSON());
console.log(Mydate.toDateString());
console.log(Mydate.toLocaleString());
console.log(Mydate.toISOString());
console.log(Mydate.toISOString());

console.log(typeof Mydate);

let owndate = new Date(2006, 0, 6, 5, 10); //MONTH STARTS FORM 0;
console.log(owndate.toString());

let createdDate = new Date("06-1-2006");  //IN THIS FORMAT MONTH START FORM 1;
console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(Math.floor(Date.now() / 1000)); //SAME---------->covrting ms to seconds
console.log(Math.floor(myTimeStamp / 1000));  //SAME---------->covrting ms to seconds
console.log(createdDate.getTime());

let newDate = new Date();
console.log(newDate.toLocaleString('default', {
    weekday: "long",

}));
