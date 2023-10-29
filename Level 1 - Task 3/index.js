document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');

    let currentInput = '';
    let operator = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;

            if (buttonText >= '0' && buttonText <= '9') {
                currentInput += buttonText;
                display.value = currentInput;
            }

            if (buttonText === '.' && !currentInput.includes('.')) {
                currentInput += buttonText;
                display.value = currentInput;
            }

            if (buttonText === 'AC') {
                currentInput = '';
                operator = '';
                result = '';
                display.value = '';
            }

            if (['+', '-', '*', '/'].includes(buttonText)) {
                operator = buttonText;
                result += currentInput + ' ' + operator + ' ';
                currentInput = '';
                display.value = result;
            }

            if (buttonText === '=') {
                result += currentInput;
                display.value = eval(result);
                currentInput = eval(result);
                result = '';
            }
        });
    });
});
