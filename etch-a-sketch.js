const grid = document.querySelector("#gridContainer");

for (let i = 0; i < 8; i++) {
    let singleGridRow = document.createElement("div");
    for (let i = 0; i < 8; i++){
        let singleGridUnit = document.createElement("div")
        singleGridUnit.className = "singleGridUnit"
        singleGridRow.appendChild(singleGridUnit);
    }
    singleGridRow.className = "singleGridRow";
    grid.appendChild(singleGridRow);
}