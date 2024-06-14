
let getGrid = (gridSize) => {

    const container = document.querySelector("#container");
        // container.style.display = "grid";
        // container.style.gridTemplateColumns = "auto auto auto auto";

        const squareSize = 500 / gridSize;

        for (let i = 0; i < gridSize * gridSize; i++ ) {
            const gridItem = document.createElement("div");

            gridItem.classList.add("grid-item");
            gridItem.style.height(`${squareSize}px`);
            gridItem.style.width(`${squareSize}px`);

            container.appendChild("gridItem")

        }
}