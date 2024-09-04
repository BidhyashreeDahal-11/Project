/* Plan everything here
Buttons

Buttons inside div contaner, one input different style for input
Two buttons top and other buttons down
*/

document.addEventListener("DOMContentLoaded", function(){
    const input = document.querySelector(".input");
    const buttons = document.querySelector(".button,.lbutton");

    let currentInput = "";
    let previousInput = "";
    let operation = null;

    buttons.forEach(button => {
        button.addEventListener("click",function(){
            const value = this.innerText;

            if(value === "ON"){
                resetCalculator();
            }else if(value === "SQR"){
                power();
            }else if(value === "="){
                calculateResult();
            }else if(value === "+" || value === "-" || value === "*" || value === "/"){
                setOperation(value);
            }else{
                appendNumber(value);

            }
        });
    });
    
    function resetCalculator(){
        currentInput = "";
        previousInput = "";
        operation = null;
        UpdateDisplay();
    }
    
    function power(){
        if(currentInput){
            currentInput = Math.pow(parseFloat(currentInput),2).toString;
            UpdateDisplay();
        }
    }
    
    function calculateResult(){
        if(currentInput && previousInput && operation){
            let result;
            let previousInput = parseFloat(previousInput);
            let currentInput = parseFloat(currentInput);

            switch(operation){
                case("+"):{
                result = previousInput + currentInput;
                break;
                }
                case("-"):{
                    result = previousInput - currentInput;
                    break;
                }
                case("*"):{
                    result = previousInput * currentInput;
                    break;
                }
                case("/"):{
                    result = previousInput / currentInput;
                    break;
                }
                default:
                    return;
            }
        }
        currentInput = result.toString();
        previousInput = "";
        operation = null;
        UpdateDisplay();
    }

    function setOperation(op){
        if(currentInput){
            if(previousInput){
                calculateResult();
            }
            operation = op;
            previousInput = currentInput;
            currentInput = "";
        }
    }

    function UpdateDisplay(){
        input.value = currentInput || "0"
    }
})
console.log("Previous Input:", previousInput);
console.log("Current Input:", currentInput);
console.log("Operation:", operation);
console.log("Result:", result);
