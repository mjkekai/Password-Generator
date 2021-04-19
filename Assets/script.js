// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*_-=+";

var possibilities = "";
var password = "";

function generatePassword() {
  var passLength = parseInt(prompt("What is the password length?")); //this will return a string

  //validate type
  if (isNaN(passLength) === true) {
    alert("This is not a number!!!");
    return;
  }

  //validate range
  if (passLength < 8 || passLength > 128) {
    alert("This length is not in the range of 8-128 characters!!!");
    return;
  }

  var wantLowers = confirm("Do you want lower case letters?"); //boolean type is returned
  var wantUppers = confirm("Do you want upper case letters?"); //boolean type is returned
  var wantSpecials = confirm("Do you want special characters?"); //boolean type is returned
  var wantNumbers = confirm("Do you want numbers?"); //boolean type is returned

  //include lower case letter
  if (wantLowers) {
    possibilities += letters;
  }
  //include upper case letters
  if (wantUppers) {
    possibilities += uppercaseLetters;
  }
  //include special characters 
  if (wantSpecials) {
    possibilities += special;
  }
  //include numbers
  if (wantNumbers) {
    possibilities += number;
  }

  console.log("***possibilities: ",possibilities);

  //get random numbers and construct the password
  for (var i = 0; i < passLength; i++) {
	  //pick random index
		var randomIndex = Math.floor(Math.random() * possibilities.length);
	  //use index to pick random character
		var randomCharacter = possibilities[randomIndex];
	  //add to password string
	  	password += randomCharacter;
  }

  console.log("***password: ",password);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);