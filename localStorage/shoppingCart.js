 
function addProduct () {
    const productInput = document.getElementById('productInput');    
    const quantity = document.getElementById('quantity');  
    
    displayData(productInput.value, quantity.value);
    saveDateIntoLocalStorage(productInput.value, quantity.value);
    productInput.value = '';
    quantity.value = '';
}

function displayData (product, quantity) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerText = `${product} is ${quantity}`
    ul.appendChild(li);
    document.getElementById('ulDataShow').appendChild(ul);
}
function getStorageShoppingCart() {
    let cart = {};
    const getData = localStorage.getItem('cart');
    if(getData){
        cart = JSON.parse(getData);; 
    }
    return cart;
}
function saveDateIntoLocalStorage(product, quantity) {
    const cart = getStorageShoppingCart();
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showLocalStData (){
    const getCart = JSON.parse(window.localStorage.getItem('cart'));
    for(let data in getCart) {
        displayData(data, getCart[data]);
    }
}
showLocalStData();