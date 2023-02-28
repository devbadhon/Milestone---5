// array vs object
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen']
var friendsAge = [12, 32, 41, 57, 23, 34]
var friendsAge = {
    hohima: 12,
    korima: 32,
    salma: 41,
    mim: 57,
    mini: 23,
    milea: 34
}

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}


const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

//var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]

for(var i = 0; i < keys.length; i ++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

//for in loop

for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName);
}