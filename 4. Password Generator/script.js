
const passwordInputBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const specialChar = "@#$%&*()_+~|{}[]<>/-="


const allCh = upperCase + lowerCase + number +specialChar;

function createPassword(){
    let pass="";
    pass += upperCase[Math.floor(Math.random()*upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
    pass += number[Math.floor(Math.random() * number.length)]; 
    pass += specialChar[Math.floor(Math.random() * specialChar.length)]; 

    while(length > pass.length){
        pass += allCh[Math.floor(Math.random() * allCh.length)]; 
    }
    console.log(pass);
    passwordInputBox.value = pass ;
}

function copyPassword() {
  navigator.clipboard
    .writeText(passwordInputBox.value)
    .then(() => {
      console.log("Password copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy password: ", err);
    });
}
