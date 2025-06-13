//Grab the grid container and add in the 8x8 row
const grid = document.querySelector("#gridContainer");
let sideLength = 8;

function sideLengthInput() {
    //Get input from user on how many squares per side
    sideLength = prompt("How many squares per side? Must be less than 100")
    if (sideLength > 100) {
        alert("User Input more than 100, setting the side length to 100")
        sideLength = 100
    }
    //Remove existing grid
    grid.innerHTML = '';

    for (i=0; i < sideLength; i++) {
        let singleGridRow = document.createElement("div");
        for (let i = 0; i < sideLength; i++){
            let singleGridUnit = document.createElement("div")
            singleGridUnit.classList.add("singleGridUnit")
            singleGridUnit.addEventListener("mouseenter", ()=>{
                singleGridUnit.classList.add("hovered")
                console.log("added hovered class")
            })
            singleGridRow.appendChild(singleGridUnit);
        }
        singleGridRow.className = "singleGridRow";
        grid.appendChild(singleGridRow);
    }
}

for (let i = 0; i < 8; i++) {
    let singleGridRow = document.createElement("div");
    for (let i = 0; i < 8; i++){
        let singleGridUnit = document.createElement("div")
        singleGridUnit.classList.add("singleGridUnit")
        singleGridUnit.addEventListener("mouseenter", ()=>{
            singleGridUnit.classList.add("hovered")
            console.log("added hovered class")
        })
        singleGridRow.appendChild(singleGridUnit);
    }
    singleGridRow.className = "singleGridRow";
    grid.appendChild(singleGridRow);
}