function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum);
    return sum;
}

// add(30, 34)
var total = add(80, 20);
// console.log("total", total);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var singaras = bringSingara(200)
console.log('Eating singara', singaras);