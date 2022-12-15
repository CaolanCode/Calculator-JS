const numberButton = document.querySelectorAll('.number');
const display = document.querySelector('.display');

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        display.innerText = button.innerText;
    })
})
