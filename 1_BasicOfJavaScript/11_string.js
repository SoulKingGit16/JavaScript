const str = new String("DisXcord");
console.log(`Your Discord Name Is >> ${str}`);

// SOME METHODS OF STRINGS;

console.log(str[0]);  // REMEMBER STRING IS NOT AN ARRAY . WE CAN USE INDEX OPERATION BECAUSE ITS A OBJECT;
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(0));
console.log(str.indexOf("-"));


const newStr = str.substring(0, 5); //WE CANT USE NEGATIVE VALUES AND IF WE USE IT AUTOMATICALLY IGNORES THAT AND START FORM 0;
console.log(newStr);

// const newStr2=str.slice(1,3);
// console.log(newStr2);

const newStr2 = str.slice(-8, 3);
console.log(newStr2);

const str2 = new String("     XCORD      ");
console.log(`${str2}`);
console.log(str2.trim());

const url = "https://ReaderMonk.com/soul%20king";

console.log(url.replace("%20", "_"));
console.log(url.includes("king"));


const spt = "ooo-aaaa-hosss";

console.log(spt.split("-"));  //COVERTING STRING TO A ARRAY;


