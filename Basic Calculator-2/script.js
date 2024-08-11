document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let operator = '';
    let firstValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstValue = '';
                display.textContent = '';
            } else if (value === '=') {
                if (firstValue && operator && currentInput) {
                    currentInput = eval(firstValue + operator + currentInput);
                    display.textContent = currentInput;
                    firstValue = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    firstValue = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
