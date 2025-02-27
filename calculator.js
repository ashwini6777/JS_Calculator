// Select display input
const display = document.getElementById("display");

function appendNumber(num) {
    const lastChar = display.value.slice(-1);

    // Prevent operators before any number is entered
    if (display.value === "" && isOperator(num)) {
        return;
    }

    // Prevent consecutive operators
    if (isOperator(lastChar) && isOperator(num)) {
        return;
    }
    display.value += num;
}

// Function to check if a character is an operator
function isOperator(char) {
    return ["+", "-", "*", "/","%"].includes(char);
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result with error handling
function calculateResult() {
    try {
        if (display.value === "" || isOperator(display.value.slice(-1))) {
            display.value = "...Invalid Expression...";
            return;
        }
        display.value = eval(display.value);
    } catch (error) {
        display.value = "...Error Occur...";
    }
}
