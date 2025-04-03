function calculateFinalScore(input) {
    const {name, testScore, schoolGrade, isFFamily} = input;
    if (typeof input !== 'object' || input === null) {
        return `Invalid Input`;
    }
    else if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return `Invalid Inputs`;
    }
    else if(testScore <=50 && schoolGrade <=30){
        let data= testScore + schoolGrade  + (isFFamily == true ? 20 : 0);
        if( data >= 80) {
            return true;
        }else{
            return false;
        }
    }else{
        return `Invalid Input`;
    }
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true }));


