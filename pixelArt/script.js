let colors = document.querySelectorAll('.color')
let cells = document.querySelectorAll('.cell')
let colorsControls = document.querySelector('.colors-controls')

let currentColor;

for (let i = 0; i < colors.length; i++) {
    colors[i].style.backgroundColor = colors[i].dataset.color
}

let paint = (cell) => {
    cell.onclick = () => {
        cell.style.backgroundColor = currentColor
    }    
}

for (let i = 0; i < cells.length; i++) {
    paint(cells[i])
}


let toggleActive = (element) => {
    let allColors = document.querySelectorAll('.color')
    eraserLabel.classList.remove('active-eraser')
    !eraser.checked
    for (let i = 0; i < allColors.length; i++) {
        allColors[i].classList.remove('active')
    }
    currentColor = element.dataset.color;
    element.classList.add('active')
}







