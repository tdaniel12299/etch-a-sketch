let rows = 5;
let columns = 5;

const gridContainer = document.getElementById('grid');

for (let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        gridContainer.appendChild(gridItem)
    }
}





// let getGrid = (gridSize) => {

//     const container = document.querySelector("#container");
//         // container.style.display = "grid";
//         // container.style.gridTemplateColumns = "auto auto auto auto";

//         const squareSize = 500 / gridSize;

//         for (let i = 0; i < gridSize * gridSize; i++ ) {
//             const gridItem = document.createElement("div");

//             gridItem.classList.add("grid-item");
//             gridItem.style.height(`${squareSize}px`);
//             gridItem.style.width(`${squareSize}px`);

//             container.appendChild("gridItem")

//         }
// }