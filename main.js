// Request a user’s name and display the response “Hello, [name]”.

// Prompt the user for their name
let userName = prompt("What is your name?");

// Display the greeting
alert("Hello, " + userName + "!");

// Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 

// Prompt the user for their birthday
const birthday = prompt("What is your birtday?");

// Setting the currentYear to 2024
const currentYear = 2024;
// Calculating the age
let age = currentYear - birthday;

// Display the users age
alert("Your age is " + age);

// Request a length of a side of a square from a user and display the perimeter of the square. 

// Prompt the user for the length
let length = prompt("What is the length?");

// Calculating the perimeter
let perimeter = length * 4;

alert("The perimeter is " + perimeter + " m");

// Request a distance in km between the two cities from a user, and the time they want to cover it within. Count    the speed needed to be on time. 

// Prompt the user for the cities

let cityOne = prompt("What is the name of the first city ?");
let cityTwo = prompt("What is the name of the second city ?");

const distance = prompt("What is the distance between " + cityOne + " and " + cityTwo + " ?");

let time = prompt("What is the driving time you want to spend between " + cityOne + " and " + cityTwo + " ?");

let speed = distance / time;

alert("You will need to drive " + speed + " km/h");

// A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 

// Prompt the user for the flash drive memory in GB

let memory = prompt("What is the flash drive memory in GB ?");

const gbSize = 1024;
const fileSize = 820;
const fileCount = Math.round((memory * gbSize) / fileSize);

alert("You can store " + fileCount + " files on this drive");

// A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left. 

// Prompt the user for his money in the wallet

const moneyWallet = prompt("How much money do you have ?");

const priceChocolateBar = 2;

const change = moneyWallet % priceChocolateBar;
const amountOfChocolateBars = Math.floor(moneyWallet / priceChocolateBar);


alert("You can buy " + amountOfChocolateBars + " and you will have " + change + " left");

// The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest


// Prompt the user for his sum on the account

const sumAccount = prompt("How much do you have on the account ?");
const depositTime = prompt("How long are you depositing the money ?");

const interestRate = 0.05;

let interest = ((sumAccount * interestRate) / 12)* depositTime;
interest = interest.toFixed(2);

alert("You will have " + interest + " Euro interest with " + depositTime + " months");












