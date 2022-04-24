var password;

/**
 * This if or password generating
 * First it's checks for length of the password if lenght is less or big than limit will not continue
 * Then, Start the questionig for other requirements
 * @returns password
 */
function generatePassword() {

    var pwLength = window.prompt(
        "Please choose lenght of password at least 8 characters and maximum 128 characters"
    );
    
    var intLength = parseInt(pwLength);

    if (intLength >= 8 && intLength <= 128) { 
        var lowerCase = window.prompt(
            "Would you like to include lowercase characters?"
        );
    
        var upperCase = window.prompt(
            "Would you like to include uppercase characters?"
        );
    
        var numeric = window.prompt(
            "Would you like to include numeric characters?"
        );
    
        var specialChar = window.prompt(
            "Would you like to include special characters?"
        );
        
        // this IF statement for if every question answered as yes will create a password and assign to global password variable

        if (lowerCase.toLowerCase() === "yes" && specialChar.toLowerCase() === "yes" && upperCase.toLowerCase() === "yes" && numeric.toLowerCase() === "yes") {
            var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            password = "";
    
            for (var i = 0; i <= intLength; i++) {
                var randomNumber = Math.floor(Math.random() * chars.length);
                password += chars.substring(randomNumber, randomNumber + 1);
            }
    
        }

    } else {
        window.alert(intLength + " is too small or too big than limit of password, Please try again!");
        generatePassword();
    }
    console.log(password);

    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);