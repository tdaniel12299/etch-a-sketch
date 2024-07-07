let rowsWidth = 5;
let columnsHeight = 5;
let numOfDiv = 25;



let createGrid = (rowsWidth, columnsHeight) => {
    const gridContainer = document.getElementById('grid');
    // gridContainer.style.display = 'grid';
    // gridContainer.style.gridTemplateColumns = `repeat(${columnsHeight}, 1fr)`;
    // gridContainer.style.gridTemplateRows = `repeat(${rowsWidth}, 1fr)`;

    for (let i = 0; i < rowsWidth * columnsHeight; i++ ) {
        const gridItem = document.createElement('div');
        gridItem.className = 'item';
        gridItem.textContent = "w";
        gridItem.style.border = "2px solid black";

        gridContainer.style.display = 'grid';
        gridContainer.style.gridTemplateColumns = `repeat(${columnsHeight}, 5fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rowsWidth}, 1fr)`;

        gridContainer.appendChild(gridItem)
    }

}

createGrid(rowsWidth,columnsHeight)


