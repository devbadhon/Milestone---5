/* // calculate kitkat chocolate price with quantity
// document
//   .getElementById("kitkat-buy-btn")
//   .addEventListener("click", function () {
//     const kitkatCost = multiplePriceWithQuantity("kitkat-quantity", 200);
//     setInnerText("chocolate", kitkatCost);
//     document.getElementById("kitkat-quantity").value = "";
//     total();
//   });

function handleKitkat() {
  const kitkatCost = multiplePriceWithQuantity("kitkat-quantity", 200);
  setInnerText("chocolate", kitkatCost);
  document.getElementById("kitkat-quantity").value = "";
  total();
}
// calculate rose  price with quantity
document.getElementById("rose-buy-btn").addEventListener("click", function () {
  const roseCost = multiplePriceWithQuantity("rose-quantity", 100);
  setInnerText("rose", roseCost);
  document.getElementById("rose-quantity").value = "";
  total();
});
// calculate diary  price with quantity
document.getElementById("diary-buy-btn").addEventListener("click", function () {
  const diaryCost = multiplePriceWithQuantity("diary-quantity", 500);
  setInnerText("diary", diaryCost);
  document.getElementById("diary-quantity").value = "";
  total();
});
function total(params) {
  const chocolate = stringToNumberConverter("chocolate");
  const rose = stringToNumberConverter("rose");
  const diary = stringToNumberConverter("diary");
  const total = chocolate + rose + diary;
  setInnerText("total", total);
}
// pass the id of the tag this function will convert just innertext to number
function stringToNumberConverter(id) {
  const element = document.getElementById(id).innerText;
  return parseFloat(element);
}
// this function will take id & value of tag and set innertext
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// this fucntion will calculate the quatity and price of gift this fucntion will take two parameter inutField id & price of gift
function multiplePriceWithQuantity(id, price) {
  const quantity = document.getElementById(id).value;
  const totalPrice = parseInt(quantity) * parseInt(price);
  return totalPrice;
}

function handlePromoCode(params) {
  const promoCode = document.getElementById("promo-code").value;
  if (promoCode == "101") {
    const total = stringToNumberConverter("total");
    setInnerText("all-total", total - total * 0.1);
  } else {
    alert("promo code is not correct");
  }
}
 */


/* // Step 1: common line k function er bitor rekehe reuse kora 

function setInnerText(id,value){
  document.getElementById(id).innerText = value;
}

document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
  const quantity = document.getElementById('kitkat-quantity').value;
  const kitkatCost = quantity * 200;
  setInnerText('chocolate',kitkatCost);
})
document.getElementById('rose-buy-btn').addEventListener('click',function(){
  const quantity = document.getElementById('rose-quantity').value;
  const roseCost = quantity * 200;
  setInnerText('rose',roseCost);
})
document.getElementById('diary-buy-btn').addEventListener('click',function(){
  const quantity = document.getElementById('diary-quantity').value;
  const diaryCost = quantity * 200;
  setInnerText('diary',diaryCost);
})
 */











// Step 2: common line k function er bitor rekehe reuse kora
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
// Step 3: common line k function er bitor rekehe reuse kora
function getInputValue(id) {
  const value = document.getElementById(id).value;
  return parseInt(value);
}
// Step 3: all price er total man ber korar jonno function
function total() {
  const chocolate = document.getElementById('chocolate').innerText;
  const rose = document.getElementById('rose').innerText;
  const diary = document.getElementById('diary').innerText;
  const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
  // document.getElementById('total').innerText = totalSum;
  setInnerText('total',totalSum);
}


document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
  const quantity = getInputValue('kitkat-quantity');
  const kitkatCost = quantity * 200;
  setInnerText('chocolate', kitkatCost);
  total();
})
document.getElementById('rose-buy-btn').addEventListener('click', function () {
  const quantity = getInputValue('rose-quantity');
  const roseCost = quantity * 200;
  setInnerText('rose', roseCost);
  total();

})
document.getElementById('diary-buy-btn').addEventListener('click', function () {
  const quantity = getInputValue('diary-quantity');
  const diaryCost = quantity * 200;
  setInnerText('diary', diaryCost);
  total();

})





// use promo code

document.getElementById('promo-apply-btn').addEventListener('click',function(){
  const promoCode = getInputValue('promo-code');
  if (promoCode == 101) {
    const total = document.getElementById("total").innerText;
    const sum = total - parseInt(total)*0.1;
    setInnerText('all-total',sum);
  }
    else{
      alert("wrong promo code")
    }
  
})