function makeErrors(text){
    try{
        let str = text.trim();
        let words = str.split(' ');
        return words;
    }catch(err){
        console.log('Please Given Valid Input '+ err.message)
    }
}

console.log(makeErrors(54))