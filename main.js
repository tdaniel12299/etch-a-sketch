
let defaultNum = 5;
let slider = document.getElementById("range1")
let output = document.getElementById("value")
gridContainer = document.getElementById('grid');

output.innerHTML = slider.value;


let createGrid = (defaultNum) => {

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }

    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${defaultNum}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${defaultNum}, 1fr)`


    
    for (let i=0; i < defaultNum**2; i++) {
        const item = document.createElement("div");
    
        item.className = 'item';
        item.style.border = "0.1px solid rgba(0,0,0,0.4)";
        item.style.backgroundColor = "aliceblue";

        gridContainer.appendChild(item);
    }
}
document.addEventListener('DOMContentLoaded',() => {
    gridContainer = document.getElementById('grid')
})
slider.oninput = ()=>{
    
    output.innerHTML = slider.value;
    createGrid(slider.value)
    
    
}

slider.addEventListener("mousemove", ()=>{
    let x = slider.value;
    let color = 'linear-gradient(90deg, rgb(118, 118, 233)' + x + '%, rgb(193, 193, 238)' + x +'%';
    slider.style.background = color;
})

createGrid(slider.value)



