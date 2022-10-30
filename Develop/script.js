// Assignment Code
var generateBtn = document.querySelector("#generate");
// creating random function with min and max values
function randomInt(min, max) {
return Math.floor(Math.Random ()* (max - min) + min)
}

function generatePassword() {
// prompt when clicking on generate password
 var userinput = window.prompt("How long will your password be?")
// Takes string and turns it into number value
 var passwordlength = parseInt(userinput)
// if statement saying if a number is valid or not,if not then returns to origin
 if (isNaN(passwordlength)) {
    window.alert("That is not a number.")
    return
 }
// tells user if the number they entered in prompt is too short or too long
if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Passwordlength has to be between 8 and 128 characters.")
    return
}
// Prompts user to ask what type of characters they want in there password
var userWantsNumbers = window.confirm("Do you want to have numbers in your password?")
var userWantsUppercase = window.confirm("Do you want to have uppercase letters in your password?")
var userWantsLowercase = window.confirm("Do you want to have lowercase letters in your password?")
var userWantsSymbols = window.confirm("Do you want to have symbols in your password?")
// array lists for prompt drop down
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolist = ["!", '@', "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ".", ",", ";", ":", "?", "'", "<", ">"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// cart list for random generation
var optionsCart = []

if (userWantsNumbers === true) {
    optionsCart.push(numberList)
}

if (userWantsSymbols === true) {
    optionsCart.push(symbolist)
}

if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
}

if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
}

var generatedPassword = ""
// for loop used to grab random character from options cart
for (var i = 0; i < passwordLength; i++){
    var randomItem = optionsCart[randomInt(0, optionsCart -1)]
}


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);