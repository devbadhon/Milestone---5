var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

//When you know the property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative System
// When you know the specific property name, use dot notation to get the property value


var properties = Object.keys(shoppingCart);
// console.log(properties);


var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);


var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue);



console.log(shoppingCart);

// set properties values

shoppingCart.mouse = 10;
console.log(shoppingCart);

shoppingCart['mouse'] = 30;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart);