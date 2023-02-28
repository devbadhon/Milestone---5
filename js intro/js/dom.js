/* 



// Option - 1: getElementsByTagName sob gulu k peye jabo
const liCollection = document.getElementsByTagName('li');
for(const h1 of liCollection){
}
const allHeadings = document.getElementsByTagName('h1');
for(const h1 of allHeadings){
}

// Option - 2: getElementById Particular element k Select kore niya asbo
const fruitesTitle = document.getElementById("fruits-title");
fruitsTitle.innerText = 'Fruits change by js';

// Option - 3: getElementsByClassName -  Many elements will be found
const places = document.getElementsByClassName("importent-places");
for(const place of places){
    // console.log(place.innerText);
}

// Option - 4: querySelectorAll akti node list dibe
const someLi = document.querySelectorAll(".fruits-container li");
// console.log(someLi);
for (const li of someLi) {
    // console.log(li.innerText);
}

// Option - 5: querySelector it's will return the first one
const single = document.querySelector('.fruits-container li');
// console.log(single); 




*/