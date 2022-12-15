class Calculator{
    constructor(display){
        this.display = display;
        this.displayText = '';
    }

    appendNumber(number){
        this.displayText = this.displayText.toString() + number.toString();
    }
    updateDisplay(){
        this.display.innerText = this.displayText;
    }
}
const numberButton = document.querySelectorAll('.number');
const display = document.querySelector('.display');

const calculator = new Calculator(display)

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})
