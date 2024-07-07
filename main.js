
let numOfDivs = 10;

let createGrid = () => {
    gridContainer = document.getElementById('grid');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${numOfDivs}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${numOfDivs}, 1fr)`


    
    for (let i=0; i < numOfDivs**2; i++) {
        const item = document.createElement("div");
    
        item.className = 'item';
        item.style.border = "2px solid black";

        gridContainer.appendChild(item);
    }
}

createGrid()