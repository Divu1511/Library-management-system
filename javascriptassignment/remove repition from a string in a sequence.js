function removeDuplicatesAlphabetically(str) {
    const charArray = str.split('');
    
    charArray.sort();
    
    let result = '';
    
    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] !== charArray[i - 1]) {
            result += charArray[i];
        }
    }
    
    return result;
}


const input = "AABBCCRRDDTTYY";
const output = removeDuplicatesAlphabetically(input);
console.log(output); 
