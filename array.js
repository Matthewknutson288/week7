// Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the value of the first element in the array from the value in the last element of the array
let diff = ages[ages.length - 1] - ages[0];
console.log(diff);

// Add a new age to the array
ages.push(101);
diff = ages[ages.length - 1] - ages[0];
console.log(diff);

// Calculate the average age
let sum = 0;
for(let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let avg = sum / ages.length;
console.log(avg);

// Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
sum = 0;
for(let i = 0; i < names.length; i++) {
    sum += names[i].length;
}
avg = sum / names.length;
console.log(avg);

// Concatenate all the names together, separated by spaces
let allNames = '';
for(let i = 0; i < names.length; i++) {
    allNames += names[i] + ' ';
}
console.log(allNames.trim());

// Access the last element of any array
let lastElement = ages[ages.length - 1];
console.log(lastElement);

// Access the first element of any array
let firstElement = ages[0];
console.log(firstElement);

// Create a new array called nameLengths
let nameLengths = [];
for(let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// Calculate the sum of all the elements in the array
sum = 0;
for(let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum);

// Function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function repeatWord(word, n) {
    let result = '';
    for(let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}
console.log(repeatWord('Hello', 3));

// Function that takes two parameters, firstName and lastName, and returns a full name
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('John', 'Doe'));

// Function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
function isSumGreaterThan100(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}
console.log(isSumGreaterThan100([50, 30, 20, 10]));

// Function that takes an array of numbers and returns the average of all the elements in the array
function average(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(average([1, 2, 3, 4, 5]));

// Function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
function isAverageGreater(numbers1, numbers2) {
    return average(numbers1) > average(numbers2);
}
console.log(isAverageGreater([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// Function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 20));
// Function of your own that solves a problem
// This function checks if a number is prime or not
// I created this function because checking for prime numbers is a common operation in number theory
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    let sqrt = Math.sqrt(n);
    for(let i = 3; i <= sqrt; i += 2) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));