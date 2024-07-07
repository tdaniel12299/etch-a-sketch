// let rowsWidth = 25;
// let columnsHeight = 25;
// let numOfDiv = 25;


// let createGrid = (rowsWidth, columnsHeight) => {
//     const gridContainer = document.getElementById('grid');
//     // gridContainer.style.display = 'grid';
//     // gridContainer.style.gridTemplateColumns = `repeat(${columnsHeight}, 1fr)`;
//     // gridContainer.style.gridTemplateRows = `repeat(${rowsWidth}, 1fr)`;

//     for (let i = 0; i < rowsWidth * columnsHeight; i++ ) {
//         const gridItem = document.createElement('div');
//         gridItem.className = 'item';
//         gridItem.textContent = "w";
//         gridItem.style.border = "2px solid black";

//         gridContainer.style.display = 'grid';
//         gridContainer.style.gridTemplateColumns = `repeat(${columnsHeight}, 5fr)`;
//         gridContainer.style.gridTemplateRows = `repeat(${rowsWidth}, 5fr)`;
        

//         gridContainer.appendChild(gridItem)
//     }

// }

// createGrid(rowsWidth,columnsHeight)


let numOfDivs = 5;
let width = 5
let lenght = 5

let widthAndHeight = () => {
    return width/numOfDivs
}

let createGrid = () => {
    gridContainer = document.getElementById('grid');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${lenght}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${width}, 1fr)`

    
    
    for (let i=0; i < numOfDivs**2; i++) {
        const item = document.createElement("div");
    
        item.className = 'item';
        item.textContent = "";
        item.style.border = "2px solid black";

        gridContainer.appendChild(item);
    }
}

createGrid()