let firstNumber,
    secondNumber,
    sum,
    dif,
    mult,
    div;

firstNumber = +prompt("Enter first number");
secondNumber = +prompt("Enter second number");

sum = firstNumber + secondNumber;
dif = firstNumber - secondNumber;
mult = firstNumber * secondNumber;
div = firstNumber / secondNumber;

alert(`Result of sum = ${sum}`);
alert(`Result of dif = ${dif}`);
alert(`Result of mult = ${mult}`);
alert(`Result of div = ${div}`);