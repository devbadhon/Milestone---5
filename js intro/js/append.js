// 1. Where to add
const placesList = document.getElementById('places-list');

// 2. where to be added
const li = document.createElement('li')
li.innerText = 'Pahar toli Bon'

// 3. add the child
placesList.appendChild(li);

//================[ add korar ata system]==================

// 1. Where to add
const mainContainer = document.getElementById('main-container');
// 2. Where to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biff Biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Chicken Biryani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Chicken Biryani';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Chicken Biryani';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);


//================[ set innerHTML directly ]==================
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Drees section </h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando Genji</li>
    <li>Pent</li>
</ul>
`
mainContainer.appendChild(sectionDress);