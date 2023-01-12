var soupVegetables = ["carrots", "celery", "onion", "peas"];
var milesDriven = [100, 23, 40, 240];
var answers = [true, false, false, true, true];

// This push method will add one element to the end of 'soupVegetables': ["beans"]
soupVegetables.push("beans")
console.log(soupVegetables)

// This slice method will create a copy of 'milesDriven' array using elements 1 thru 3, returing: [23, 40, 240]
console.log(milesDriven.slice(1));

// This shift method will remove the first element from 'answers' array, returning 4 elements: [false, false, true, true]
answers.shift();
console.log(answers);

// Index position is the relative place of each element within an Array
// and is used when accessing elements using bracket notation.
// In Javascript, and most other programming languages,
// the first element in an array has Index position 0.
// Each subsequent element increases by 1 Index position.
// For example, an Array of 10 elements would have Index positions 0 thru 9.
// In my variable soupVegetables, Index position 3 is declared at "peas".
// By the end of this code, my variable soupVegetables has max Index position of 4.
