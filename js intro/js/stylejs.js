const sections = document.querySelectorAll("section");
for (const section of sections) {
    section.style.border = '2px solid green';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = "15px";
    section.style.textAlign = "center";
    section.style.listStyle = "none";
    section.style.backgroundColor = "lightgray";
}

//If you want to give color on a particular thing
/* const placesContainer = document.getElementById("place-container");
placesContainer.style.backgroundColor = 'yellow' */


const placesContainer = document.getElementById("place-container");
placesContainer.classList.add("text-start");
