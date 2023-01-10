// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Concatenate all arrays
var AllCharacters = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters)
console.log(AllCharacters);

// Function to prompt user for password options
function getPasswordOptions() {
  alert(AllCharacters)
}



// Function for getting a random element from an array
function getRandom(arr) {
  // Will select element from new concatenated array
TotalArray = Math.floor[(Math.random * AllCharacters.length)]
RandomArray = prompt(Math.floor[Math.random * AllCharacters.length])
}




// Function to generate password with user input
function generatePassword() {
var Userconfirmation = confirm("Would you like to generate a random password");
if (Userconfirmation) {
  alert("Here are the password character options: ")
  getPasswordOptions();
} else if (Userconfirmation === false) {
  console.log("Please select 'Ok' to proceed")
}
// add validation to make sure user 
prompt("Would you like the password to include mixed characters?")
if (prompt === false) {
  console.log("Please type an answer")
};
var Userinput = prompt("Please specify the length of your password; the length is 10 - 64 characters");
if (Userinput => 10 || Userinput <= 64) {
  alert(TotalArray);
} else if (Userinput < 10 || Userinput > 64 ||  Userinput == null) {
  console.log("Please enter the correct length of characters")
}
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password'); 
  // User input is assigned to password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Password should be between 10 - 64 charcters
// Code should validate for each input and at least one character type should be selected
// Once prompt are answered; password should be generated and displayed to page as an alert
// Tools needed:
// random function to be used on arrays
// prompt to show options
// validation with conditional statements such as if statement
