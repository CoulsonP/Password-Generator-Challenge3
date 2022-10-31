// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating random function with min and max values
function randomInt(min, max) {
    if (!max) {
        max = min
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}

// function for grabbing random item from list
function getRandomItem(list) {
    return list[randomInt(list.length)]
}

function generatePassword() {

    while (true) {

        var userInput = window.prompt("How long will your password be?")//returns a string ie "9"
// user left prompt
        if (userInput === null){
            return
        }

// Takes string and turns it into number value
 var passwordLength = parseInt(userInput) /// changes "9" returned from prompt to 9
 
// if statement saying if a number is valid or not,if not then returns to origin
 if (isNaN(passwordLength)) {
    window.alert("That is not a number.")
    return
 } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Not valid password length. Must be between 8 and 128 characters.")
    return
    } else {
    break//return
     }

}
// Prompts user to ask what type of characters they want in there password, confirm returns true/false
var userWantsNumbers = window.confirm("Do you want to have numbers in your password?")
var userWantsUppercase = window.confirm("Do you want to have uppercase letters in your password?")
var userWantsLowercase = window.confirm("Do you want to have lowercase letters in your password?")
var userWantsSymbols = window.confirm("Do you want to have symbols in your password?")
// array lists for prompt drop down
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = ["!", '@', "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ".", ",", ";", ":", "?", "'", "<", ">"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// cart list for random generation
var optionsCart = []

if (userWantsNumbers === true) { //if false, don't push array to options cart, move to next if statement
    optionsCart.push(numberList)
}

if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
}

if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
}

if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
}

// if statement for all previous if statements are not met
if (optionsCart.length === 0) {
optionsCart.push(lowercaseList)//if user chooses no to all character options, default with lowercase
}

var generatedPassword = ""

// for loop used to grab random character from options cart, and place into generatedPassword string
for (var i = 0; i < passwordLength; i++) {

    var randomList = getRandomItem(optionsCart)//returns random index

    var randomChar = getRandomItem(randomList)//returns random index's true value

    generatedPassword += randomChar //pushes random true value to generatedPassword string

    
}
//need to return a string that becomes #password textarea value
return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//return from function becomes password value
  var passwordText = document.querySelector("#password");//textrea to place value returned from generatePassword function

  if (password) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);