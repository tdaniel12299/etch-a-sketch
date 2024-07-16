
let flag = true
const defaultColor = "#000000"

let slider = document.getElementById("range1")
let output = document.getElementById("value")
let gridContainer = document.getElementById('grid')

let pickColor = document.getElementById('colorPicker')
let black = document.getElementById("black")
let clear = document.getElementById("clear")
let rainbow =document.getElementById("rnb")
let eraser = document.getElementById("eraser")

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

// get colors
        item.addEventListener("mouseover", () => {
            if(flag === true){
                item.style.backgroundColor = getBlackColor();
            }else if (flag === false) {
                item.style.backgroundColor = getRandomColor();
            } else{
                item.style.backgroundColor = getEraser();
            }
          });
        gridContainer.appendChild(item);
    }
}

const getRandomColor = () => {
    isntFlag();
    const red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    
    return `rgb(${red}, ${green}, ${blue})`;
}

const getBlackColor = () => {
    isFlag();
    return defaultColor
}

const getEraser = () => {
    nullFlag();
    return "#F0F8FF"

}

// const getColor = (pickColor) => {
//     pickColor.oninput= () => {
//         pickColor = pickColor.value
//     }
//     console.log(pickColor.value)
// }

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
}

let colorValue =()=> { defaultColor.addEventListener("input", ()=> {
    let item = document.querySelector(".item");

    item.style.backgroundColor = `${defaultColor}.value`
})
}

let isFlag = () => {
    flag = true
}
let isntFlag = () => {
flag = false
}
let nullFlag = () => {
flag = null
}

clear.addEventListener("click", clearGrid)
rainbow.addEventListener("click",getRandomColor)
eraser.addEventListener("click", getEraser)
black.addEventListener("click",getBlackColor)



createGrid(slider.value)



