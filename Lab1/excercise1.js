//wap to create function  number between 0 to 9 and return in words
// const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

// const numberToWord = (num) => {
//     return words[num];
// };
// console.log(numberToWord(8)); 
//write a function a number between 0 to 9 and return in words.
const numToWords=(num)=>{
    switch(num){
        case 0: return "Zero";
        case 1: return "one";
        case 2: return "two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid Number";
    }
};
// console.log(numToWords(7));
// console.log(numToWords(3));
// console.log(numToWords(34));
//create another function that takes a number and show in words with the help of two words only
// const words=["zero", "one","two","three","four","five","six","seven","eight","nine"];
// const number
const rollnum="2503201000497";
const digits=String(rollnum).split("");
console.log(digits);
let inwords=" "
digits.forEach((d)=>{
    inwords+=" " + numToWords(Number(d));
});
console.log(inwords);