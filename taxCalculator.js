function calculateTax(income, expense){
    if(typeof income !== 'number' || typeof expense !== 'number'){
        return `must be provide number for income, expense both case`;
    }else if(income < 0 || expense < 0 || income < expense){
        return `Invalid Input`;
    }else{
        return (income - expense)* .20;
    }

}

console.log(calculateTax(5000, 1500));