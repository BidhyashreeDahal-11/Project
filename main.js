document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".input");
    const buttons = document.querySelectorAll(".button, .lbutton");

    let currentInput = "";
    let previousInput = "";
    let operation = null;

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = this.innerText;

            if (value === "ON") {
                resetCalculator();
            } else if (value === "SQR") {
                performPower();
            } else if (value === "=") {
                calculateResult();
            } else if (value === "+" || value === "-" || value === "*" || value === "/") {
                setOperation(value);
            } else {
                appendNumber(value);
            }
        });
    });

    function resetCalculator() {
        currentInput = "";
        previousInput = "";
        operation = null;
        updateDisplay();
    }

    function performPower() {
        if (currentInput) {
            currentInput = Math.pow(parseFloat(currentInput), 2).toString();
            updateDisplay();
        }
    }

    function calculateResult() {
            if(currentInput && previousInput && operation){
                let result;
                let previous = parseFloat(previousInput);
                let current = parseFloat(currentInput);
                switch(operation){
                    case("+"):{
                        result = previous + current;
                        break;
                    }
                    case("-"):{
                        result = previous - current;
                        break;
                    }
                    case("*"):{
                        result = previous * current;
                        break;
                    }
                    case("/"):{
                        result = previous / current;
                        break;
                    }
                    default:{
                        return; 
                    }
                       
                }
                currentInput = result.toString();
                previousInput = "";
                operation = null;
                updateDisplay();
                
            }
        }
    function setOperation(op) {
        if (currentInput) {
            if (previousInput) {
                calculateResult();
            }
            operation = op;
            previousInput = currentInput;
            currentInput = "";
        }
    }

    function appendNumber(num) {
        if (num === "." && currentInput.includes(".")) return;
        currentInput += num;
        updateDisplay();
    }

    function updateDisplay() {
        input.value = currentInput || "0";
    }

    resetCalculator();
});
