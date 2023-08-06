// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
var choiceArr = [];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  console.log("Start your Password!")
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomLetter];
  }
}
// Write password to the #password input
function writePassword() {}
  var correctPrompts = prompts();
  if (correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;

}


function prompts() {
  passwordLength = parseInt(prompt("How long would you like your password to be?"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
    return false;

  if (confirm("Include lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCase);
  }
  if (confirm("Include uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCase);
  }
  if (confirm("Include Numbers?")) {
    choiceArr = choiceArr.concat(numbers);
  }
  if (confirm("Include special characters?")) {
    choiceArr = choiceArr.concat(specialCharacters);
  }
  return true;
}