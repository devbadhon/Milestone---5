// option 1. directly set on the  HTML element
{/* <button onclick="document.body.style.backgroundColor='yellow'">Click Me</button> */}

// Option 2. add click function
function makeRed(){
    document.body.style.backgroundColor='orange'
}


// option 3. 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


//Option 3. another

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

//Option 4,

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
//Option 4 another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor = 'green';
});

// option 4. Final
// Important : we will use this sometime
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});
