// Assignment Code
var generateBtn = document.querySelector["#generate"];
var passwordLength = [8<=128];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers =['1','2','3','4','5','6','7','8','9','0'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')',];

function generatePassword(){
  console.log("Start your Password!")
  // 1. Prompt the user for the password criteria
  //    a. pasword length 8 < 128
  //    b. Lowercase, uppercase, numbers, special characters
 
  //2. Validate the Input
  //3. Display Password
  return "Generated password will go here!"
}
// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function genratePassword(){

}
function getPrompts(){
  passwordLength = prompt("How long do you want your password to be?")
}