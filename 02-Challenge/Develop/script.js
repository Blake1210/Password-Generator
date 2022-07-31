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

function generatePassword() {
  numCharacters = prompt("How many Characters");
  if (numCharacters < 8 || numCharacters > 128) {
    alert ("Your number needs to be between 8-128");
    return "Error"
  }
  var useableCharacters = [];
  userStatement = prompt("Include Uppercase Letters? Y/(N)");
  if (userStatement === "Y") {
   useableCharacters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

  }
  userStatement = prompt("Include Lowercase Letters? Y/(N)");
  if (userStatement === "Y") {
   useableCharacters.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
   
  }
  userStatement = prompt("Include Numbers? Y/(N)");
  if (userStatement === "Y") {
   useableCharacters.push("0","1","2","3","4","5","6","7","8","9");
   
  }
  userStatement = prompt("Include Special Characters? Y/(N)");
  if (userStatement === "Y") {
   useableCharacters.push(" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "\"");
   
  }
  if (useableCharacters.length === 0) {
    alert ("Unable to generate password.");
    return "Error"
  }
  var password = "";
  for (let i = 0; i < numCharacters; i++) {
    var randomNumber = Math.floor(Math.random() *useableCharacters.length);
    password += useableCharacters[randomNumber]
  }
  return password
};