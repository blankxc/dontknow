let quantityItems = document.querySelectorAll('.quantity-value-item')
let allAreas = document.querySelectorAll('.cells-area')

let getActiveQuantity = (quantityButton) => {
    quantityButton.onclick = () => {
    for (let j = 0; j < quantityItems.length; j++) {
        quantityItems[j].classList.remove('active-quantity')
    }
    quantityButton.classList.add('active-quantity')
    
    for (let i = 0; i < allAreas.length; i++) {
        let area = allAreas[i]
                area.classList.add('none-display')
        if (quantityButton.dataset.quantityvalue == area.dataset.quantityvalue) {
            
            area.classList.remove('none-display')
            }
        }
    }
}

for (let i = 0; i < quantityItems.length; i++) {
    getActiveQuantity(quantityItems[i]);
} 