let eraser = document.getElementById('eraser')
let eraserLabel = document.querySelector('.eraser-label')

eraser.onchange = () => {
    if (eraser.checked) {
        currentColor = 'rgb(212, 212, 212)'
        eraserLabel.classList.add('active-eraser')
        let activeItems = document.querySelectorAll('.color')
        for (let i = 0; i < activeItems.length; i++) {
            activeItems[i].classList.remove('active')
        }
    } else {
        eraserLabel.classList.remove('active-eraser')
    }   
} 