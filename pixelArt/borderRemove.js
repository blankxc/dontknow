let checkBorders = document.getElementById('borders-check')
let checkBordersLabel = document.querySelector('.borders-check-label')

let firstCheckboxLabel = 'Удалить рамки'
let secondCheckboxLabel = 'Вернуть рамки'

checkBordersLabel.textContent = firstCheckboxLabel;

    checkBorders.onchange = () => {
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.toggle('cell-border')
        }
        if (checkBorders.checked) {
            checkBordersLabel.textContent = secondCheckboxLabel;
        } else {
            checkBordersLabel.textContent = firstCheckboxLabel
        }
    }

