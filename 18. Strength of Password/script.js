
let password = document.getElementById("password")
let message = document.getElementById("message")
let strength = document.getElementById("strength")


password.addEventListener('input',()=>{
    if(password.value.length >0){
        message.style.display = 'block'
    }
    else{
        message.style.display = 'none'
    }
    if(password.value.length <4){
                strength.innerHTML= "weak"
                password.style.bordercolor = '#ff5925'
                message.style.color='#ff5925'
    }
    if (password.value.length >= 4 && password.value.length <8 ) {
                strength.innerHTML = "medium";
                password.style.bordercolor = "yellow";
                message.style.color = "yellow";
    }
    if (password.value.length >= 8) {
                strength.innerHTML = "strong";
                password.style.bordercolor = "##26d730";
                message.style.color = "#ff5925";
    }
})