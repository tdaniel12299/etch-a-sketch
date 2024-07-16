
let slider = document.getElementById("range1")
let output = document.getElementById("value")
gridContainer = document.getElementById('grid')
defaultColor = document.getElementById('colorPicker')
clear = document.getElementById("clear")
// item = document.querySelector('item')

output.innerHTML = slider.value;



let createGrid = (defaultNum) => {
// console.log(defaultColor.value)
// while loop is to clear the container so the new divs dont stack over old divs, used for resizing container

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }

    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${defaultNum}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${defaultNum}, 1fr)`

// for loop creates grid 
    
    for (let i=0; i < defaultNum**2; i++) {
        const item = document.createElement("div");
    
        item.className = 'item';
        item.style.border = "0.1px solid rgba(0,0,0,0.4)";
        item.style.backgroundColor = "aliceblue"

// get random colors
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = getRandomColor();
          });
        gridContainer.appendChild(item);

        

    }
}



const getRandomColor = () => {
    const red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  
    return `rgb(${red}, ${green}, ${blue})`;
  };
  

document.addEventListener('DOMContentLoaded',() => {
    gridContainer = document.getElementById('grid')
})

// connects the slider functionalty to the displayed value and number of divs

slider.oninput = ()=>{    
    output.innerHTML = slider.value;
    createGrid(slider.value)
}



// adds stylization to slider for a smoother transition 

slider.addEventListener("mousemove", ()=>{
    let x = slider.value;
    let color = 'linear-gradient(90deg, rgb(118, 118, 233)' + x + '%, rgb(193, 193, 238)' + x +'%';
    slider.style.background = color;
})


let clearGrid=()=>{
    createGrid(slider.value);
    console.log("this")
}


clear.addEventListener("click", clearGrid)


createGrid(slider.value)



