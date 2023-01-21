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

/* var LC = Math.floor[(Math.random * lowerCasedCharacters.length)]
var UP = Math.floor[(Math.random * upperCasedCharacters.length)]
var Num = Math.floor[(Math.random * numericCharacters.length)]
var SC = Math.floor[(Math.random * specialCharacters.length)] */



// Concatenate all arrays
var AllCharacters = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters)
console.log(AllCharacters);

// Function to prompt user for password options
function getPasswordOptions() {
  var Userinput = window.prompt("Please specify the length of your password; the length is 10 - 64 characters");
  if (Userinput > 10 || Userinput < 64) {
    var Lowercase = confirm("Would like the password to include lowercase letters enter: LC")
    var Uppercase = confirm("Would like the password to include uppercase letters enter: UC")
    var Numbers = confirm("Would like the password to include numeric letters enter: Num")
    var Specialcharcters = confirm("Would like the password to include special letters enter: SC")
    if (Lowercase || Numbers || Uppercase || Specialcharcters) {
      return getRandom(Lowercase, Uppercase, Numbers, Specialcharcters, Userinput);
    }
  }
}



// Function for getting a random element from an array
function getRandom(Lowercase, Uppercase, Numbers, SpecialCharacters, Userinput) {
  var finalPassword = ""
  for (var i = 0; i < Userinput; i++) {
    if (Lowercase && finalPassword.length < Userinput) { 
      // Math floors gets rid of decimal 
      var index = Math.floor(Math.random() * lowerCasedCharacters.length)
      finalPassword = finalPassword + lowerCasedCharacters[index]
    }
    if (Uppercase && finalPassword.length < Userinput) {
      var index = Math.floor(Math.random() * upperCasedCharacters.length)
      finalPassword = finalPassword + upperCasedCharacters[index]
    }
    if (Numbers && finalPassword.length < Userinput) {
      var index = Math.floor(Math.random() * numericCharacters.length)
      finalPassword = finalPassword + numericCharacters[index]
    }
    if (SpecialCharacters && finalPassword.length < Userinput) {
      var index = Math.floor(Math.random() * specialCharacters.length)
      finalPassword = finalPassword + specialCharacters[index]
    } 
  }
  return finalPassword
  // Will select element from new concatenated array
  /* var LC = Math.floor[(Math.random * lowerCasedCharacters.length)]
  var UP = Math.floor[(Math.random * upperCasedCharacters.length)]
  var Num = Math.floor[(Math.random * numericCharacters.length)]
  var SC = Math.floor[(Math.random * specialCharacters.length)] */
}




// Function to generate password with user input
function generatePassword() {
  var Userconfirmation = window.confirm("Would you like to generate a random password");
  if (Userconfirmation) {
    alert("Here are the password character options: ")
    return getPasswordOptions();
  } else if (Userconfirmation === false) {
    console.log("Please select 'Ok' to proceed")
  }
  // add validation to make sure user 
  return ""
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
