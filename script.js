const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit-button");
const decimalButton = document.querySelector(".decimal-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.querySelector(".equals-button");
const clearButton = document.querySelector(".clear-button");
const negativeButton = document.querySelector(".negative-button");
const percentButton = document.querySelector(".percent-button");

// let displayValue = display.textContent;

let digitCount = 0;
let decimalCount = 0;
let equalsCount = 0;

let leftOperand;
let operator;
let rightOperand;
let calculation = [];

function displayDigit (e) {
    display.textContent = display.textContent.replace(/^0+/, '');
    display.textContent += e.target.textContent;
};

function displayDecimal (e) {
    display.textContent += e.target.textContent;
};

function clearDisplay () {
    display.textContent = "";
};

function saveLeftOperand () {
    leftOperand = display.textContent;
    calculation.push(leftOperand);
    console.log(`Left operand: ${leftOperand}`);
};

function saveRightOperand () {
    rightOperand = display.textContent;
    calculation.push(rightOperand);
    console.log(`Right operand: ${rightOperand}`);
};

function saveOperator (usedOperator) {
    operator = usedOperator;
    calculation.push(operator);
    console.log(`Operator: ${operator}`);
};

function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1, num2) {
    return num1 / num2;
};

function operate (num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
};

function displayOperationResult (operationResult) {
    if (Number(operationResult) === operationResult && operationResult % 1 !== 0) {
        display.textContent = Number.parseFloat(operationResult).toFixed(2);
    } else {
        display.textContent = operationResult;
    }
    console.log(`Operation result: ${display.textContent}`);
};

function displayCalculationResult (calculationResult) {
    if (Number(calculationResult) === calculationResult && calculationResult % 1 !== 0) {
        display.textContent = Number.parseFloat(calculationResult).toFixed(2);
    } else {
        display.textContent = calculationResult;
    }
    console.log(`Calculation result: ${display.textContent}`);
};

function resetDisplay () {
    display.textContent = 0;
};

function togglePlusMinus() {
    display.textContent *= -1;
};

function showPercentage() {
    display.textContent /= 100;
};


digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", (e) => {
        if (digitCount === 0) {
            clearDisplay();
            displayDigit(e);
        }
        else if (equalsCount === 1) {
            clearDisplay();
        } else {
            displayDigit(e);    
        }
        digitCount++  
    })
})

decimalButton.addEventListener("click", (e) => {
    displayDecimal(e);
    if (decimalCount === 1) {
        e.target.setAttribute("disabled", true);
    } 
    decimalCount++;
})

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) => {
        digitCount = 0;
        decimalCount = 0;
        switch (true) {
            case !leftOperand && !rightOperand: 
                saveLeftOperand();
                saveOperator(e.target.textContent);
                break;
            case leftOperand && !rightOperand: 
                saveRightOperand();
                const operationResult = operate(+leftOperand, operator, +rightOperand);
                displayOperationResult(operationResult);
                saveLeftOperand(operationResult);
                rightOperand = undefined;
                saveOperator(e.target.textContent);
        }
    });
})

equalsButton.addEventListener("click", (e) => {
    equalsCount++;
    if (!leftOperand && !rightOperand) {
        e.target.setAttribute("disabled", true);
    }
    if (leftOperand && !rightOperand) {
        e.target.setAttribute("disabled", false);
        saveRightOperand();
        const calculationResult = operate(+leftOperand, operator, +rightOperand);
        displayCalculationResult(calculationResult);
        console.log(`The whole calcultation was: ${calculation.join(" ")}`)
    }
});

clearButton.addEventListener("click", (e) => {
    resetDisplay();
});

negativeButton.addEventListener("click", (e) => {
    togglePlusMinus();
});

percentButton.addEventListener("click", (e) => {
    showPercentage();
});
