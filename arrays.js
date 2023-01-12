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