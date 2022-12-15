class Calculator{
    constructor(displayContainer){
        this.displayContainer = displayContainer;
        this.clear();
    }
    appendNumber(number){
       this.currentNumber = this.currentNumber.toString() + number.toString();
    }
    updateDisplay(){
        if(this.previousNumber !== ''){
            this.displayContainer.innerText = `${this.previousNumber} ${this.operator} ${this.currentNumber}` ;
        } else {
            this.displayContainer.innerText = this.currentNumber;
        }
    }
    assignOperator(operator){
        if(this.operator !== undefined){
            this.compute();
        } else{
            this.previousNumber = this.currentNumber;
            this.currentNumber = '';
            this.operator = operator
        }
    }
    compute(){
        let result;
        let prev = parseFloat(this.previousNumber);
        let current = parseFloat(this.currentNumber);
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operator){
            case '+':
                result = prev + current;
                break;
            case '−':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            default:
                return;
        }
        this.currentNumber = result;
        this.operator = undefined;
        this.previousNumber = '';
    }
    delete(){
        this.currentNumber = this.currentNumber.toString().slice(0, -1);
    }
    clear(){
        this.currentNumber = '';
        this.previousNumber = '';
        this.operator = undefined;
    }
}
const displayContainer = document.getElementById('display');
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const deleteButton = document.getElementById('delete');
const allClearButton = document.getElementById('all-clear');
const equals = document.getElementById('equals');

const calculator = new Calculator(displayContainer);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.assignOperator(button.innerText);
        calculator.updateDisplay();
    })
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

equals.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})