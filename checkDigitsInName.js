function checkDigitsInName(input){
    if(typeof input !== 'string'){
        return `Invalid Input`;
    }
    return (/\d/g).test(input);

}

console.log(checkDigitsInName(["Raj"]));

// 2nd way
function checkDigitsInName(input){
    if(typeof input !== 'string'){
        return `Invalid Input`;
    }
    return input.split("").some(char=>/\d/.test(char));
}


console.log(checkDigitsInName("Raj"));