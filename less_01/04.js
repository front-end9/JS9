const mileCoeficient = 0.621371;

let distance, mileResult;

distance = prompt("Enter distance in km", 1);

mileResult = mileCoeficient * distance;

alert(`Distance in miles = ${mileResult}`);