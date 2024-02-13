function reversestring(str) {
    return str.split('').reverse().join('');
}


const originalstring = "DIVU";
const reversedstring = reversestring(originalstring);
console.log(reversedstring); 
