let openPopupBtn = document.querySelector('.to-add-color-popup-button');
let colorPopup = document.querySelector('.add-color-popup')
let addColorBtn = document.querySelector('.to-add-color-button')
let newColorInput = document.querySelector('.add-color-input')
let colorsArea = document.querySelector('.colors')
let closeButton = document.querySelector('.add-color-modal span')

colorsArea.onclick = (event) => {
    if (event.target.classList.contains('color')) {
      toggleActive(event.target);
    }
  };

let colorsArray = []

openPopupBtn.onclick = () => {
    colorPopup.classList.add('open')
}

addColorBtn.onclick = () => {
    let color = document.createElement('li')
    color.classList.add('color')
    color.dataset.color = newColorInput.value;
    color.style.backgroundColor = color.dataset.color

    colorsArea.appendChild(color)
}

closeButton.onclick = () => {
    colorPopup.classList.remove('open')
}

