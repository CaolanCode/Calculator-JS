class Calculator{
    constructor(displayContainer){
        this.displayContainer = displayContainer;
        this.currentNumber = '';
    }
    appendNumber(number){
       this.currentNumber = this.currentNumber.toString() + number.toString();
    }
    updateDisplay(){
        this.displayContainer.innerText = this.currentNumber;
    }
}
const displayContainer = document.getElementById('display');
const numberButton = document.querySelectorAll('.number');

const calculator = new Calculator(displayContainer);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})