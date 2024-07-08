
let numOfDivs = 5;

let createGrid = () => {
    gridContainer = document.getElementById('grid');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${numOfDivs}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${numOfDivs}, 1fr)`


    
    for (let i=0; i < numOfDivs**2; i++) {
        const item = document.createElement("div");
    
        item.className = 'item';
        item.style.border = "0.1px solid black";
        item.style.backgroundColor = "aliceblue";

        gridContainer.appendChild(item);
    }
}

createGrid()