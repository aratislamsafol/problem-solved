// product quantity check && Price 
function priceCalculate(quantity){
    if(quantity <= 0){
        throw new error(`Quantity must be gater than 0`);
    }
    // data load
    const priceBrackets = [
        { maxQuantity: 100, pricePerUnit: 100 },
        { maxQuantity: 200, pricePerUnit: 90 },
        { maxQuantity: Infinity, pricePerUnit: 80 },
    ];

    let price = 0, previousQuantity = 0;

    for(let items of priceBrackets){
        if(quantity > previousQuantity){
            let unitItems = Math.min(quantity, items.maxQuantity) - previousQuantity;
            price+= unitItems * items.pricePerUnit;
            previousQuantity = items.maxQuantity;
        }
    }

    return price;
}


console.log(priceCalculate(110)); 