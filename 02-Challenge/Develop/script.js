// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Added function that would generate the password when the button was clicked
function generatePassword() {
  numCharacters = prompt("How many Characters");
  // created an if then statement and prompt to determine the character count for the password. Also created an alert and return if numbers were outside of 8 and 128
  if (numCharacters < 8 || numCharacters > 128) {
    alert ("Your number needs to be between 8-128");
    return "Error"
  }
  var useableCharacters = [];
  // created an if then statement and prompt to determine if there would be capital and lowercase letters in the password
  userStatement = prompt("Include Uppercase Letters? Y/(N)");
  if (userStatement === "y") {
   useableCharacters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

  }
  userStatement = prompt("Include Lowercase Letters? Y/(N)");
  if (userStatement === "y") {
   useableCharacters.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
   
  }
  // created an if then statement and prompt to determine if numbers would be included in the password
  userStatement = prompt("Include Numbers? Y/(N)");
  if (userStatement === "y") {
   useableCharacters.push("0","1","2","3","4","5","6","7","8","9");
   
  }
  // created an if then statement and prompt to determine if specail characters would be included in the password
  userStatement = prompt("Include Special Characters? Y/(N)");
  if (userStatement === "y") {
   useableCharacters.push(" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "\"");
   
  }
  // created an if statement and alert if there were no letters, numbers, or special characters were selected.
  if (useableCharacters.length === 0) {
    alert ("Unable to generate password.");
    return "Error"
  }
  // Created a for loop that would randomly select each character within the password character length that would generate the password that met the parameters the user set in place.
  var password = "";
  for (let i = 0; i < numCharacters; i++) {
    var randomNumber = Math.floor(Math.random() *useableCharacters.length);
    password += useableCharacters[randomNumber]
  }
  return password
};