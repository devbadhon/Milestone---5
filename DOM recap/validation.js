const number = '23';
if (typeof number === 'number') {
    console.log('value is a number');
} else {
    console.log('value is not a number');
}



const numbers = [23, 23, 65, 24];
const student = {name: 'Badhon Sharker', job: 'Programing kora'}
console.log(Array.isArray(numbers));
console.log(typeof student);



/* isNaN  হলো JS   এর মধ্যে  যে জিনিস টা তুমি Chack করতেছ সেটা একটা (নাম্বার নয়) isNan 

Input : isNaN ('46') 
Runn : false 

Input : isNaN  ({'badhon'}) 
Runn :  true 



উত্তর False আসার কারন হলো একটি একটি নাম্বার...!

 True আসার কারন  হলো 
এটি একটি  string.... */