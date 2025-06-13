//Grab the grid container and add in the 8x8 row
const grid = document.querySelector("#gridContainer");

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