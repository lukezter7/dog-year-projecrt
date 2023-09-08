// This represents my age
var myAge = 26;

// This represents the early years of life
var earlyYears = 2;

earlyYears =  earlyYears * 10.5; 

// This represent the later years of a dogs life.
var laterYears = myAge - 2;

// This is the result of a dogs age in human years.
 laterYears *= 4;

// This is my age in dog years;
var myAgeInDogYears = earlyYears + laterYears;

var myName = 'Luke Ruffin';

// my name lowercased
myName = myName.toLowerCase();

// my name in lowercase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
