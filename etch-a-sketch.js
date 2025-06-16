//Grab the grid container and add in the 8x8 row
const grid = document.querySelector("#gridContainer");
let sideLength = 8;
let opacityArray = [];

function sideLengthInput() {
    //Get input from user on how many squares per side
    sideLength = prompt("How many squares per side? Must be less than 100")
    if (sideLength > 100) {
        alert("User Input more than 100, setting the side length to 100")
        sideLength = 100
    }
    //Remove existing grid
    grid.innerHTML = '';
    //Reset Opacity Array
    opacityArray = [];

    //Create a new grid with side length equal to the user input
    for (i=0; i < sideLength; i++) {
        let singleGridRow = document.createElement("div");
        for (let j = 0; j < sideLength; j++){
            let singleGridUnit = document.createElement("div")
            opacityArray = opacityArray.concat(0)
            singleGridUnit.classList.add("singleGridUnit")
            singleGridUnit.classList.add(`${i},${j}`)
            singleGridUnit.addEventListener("mouseenter", ()=>{
                redVal = Math.random() * 255;
                greenVal = Math.random() * 255;
                blueVal = Math.random() * 255;
                singleGridUnitPosition = singleGridUnit.classList[1];
                posSplit = singleGridUnitPosition.split(',')
                singleGridUnitRowPos = Number(posSplit[0]);
                singleGridUnitColPos = Number(posSplit[1]);
                opacityArrayPos = singleGridUnitRowPos * sideLength + (singleGridUnitColPos);
                opacityArray[opacityArrayPos] = opacityArray[opacityArrayPos] + 0.1;
                singleGridUnit.style.opacity = opacityArray[opacityArrayPos];
                singleGridUnit.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`;
            })
            singleGridRow.appendChild(singleGridUnit);
        }
        singleGridRow.className = "singleGridRow";
        grid.appendChild(singleGridRow);
    }
}

//Initialize an 8x8 grid to start with the etch-a-sketch
for (let i = 0; i < sideLength; i++) {
    let singleGridRow = document.createElement("div");
    for (let j = 0; j < sideLength; j++){
        let singleGridUnit = document.createElement("div")
        opacityArray = opacityArray.concat(0)
        singleGridUnit.classList.add("singleGridUnit")
        singleGridUnit.classList.add(`${i},${j}`)
        singleGridUnit.addEventListener("mouseenter", ()=>{
            redVal = Math.random() * 255;
            greenVal = Math.random() * 255;
            blueVal = Math.random() * 255;
            singleGridUnitPosition = singleGridUnit.classList[1];
            posSplit = singleGridUnitPosition.split(',')
            singleGridUnitRowPos = Number(posSplit[0]);
            singleGridUnitColPos = Number(posSplit[1]);
            opacityArrayPos = singleGridUnitRowPos * sideLength + (singleGridUnitColPos);
            opacityArray[opacityArrayPos] = opacityArray[opacityArrayPos] + 0.1;
            singleGridUnit.style.opacity = opacityArray[opacityArrayPos];
            singleGridUnit.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`;
        })
        singleGridRow.appendChild(singleGridUnit);
    }
    singleGridRow.className = "singleGridRow";
    grid.appendChild(singleGridRow);
}