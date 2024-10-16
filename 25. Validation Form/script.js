
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName(){
        let name = document.getElementById('contact-name').value;
        if(name.length==0){
            nameError.textContent = 'Name is required.'
            return false;
        }
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameError.textContent = 'Write full name'
            return false;
        }
        nameError.innerHTML = '<i class ="fas fa-check-circle"></i>' ;
        return true;
    }

function validatePhone(){
            let phone = document.getElementById("contact-phone").value;
            if(phone.length == 0){
                phoneError.textContent = "Phone No. is required";
                return false;
            }
            if (phone.length !== 10) {
            phoneError.textContent = "Phone No. should be 10 digits";
            return false;
            }
            if(!phone.match(/^[0-9]{10}$/)){
                phoneError.textContent = "Only digits allowed."
                return false;
            }
            phoneError.innerHTML = '<i class ="fas fa-check-circle"></i>';
            return true;
    }

function validateEmail(){
                let email = document.getElementById("contact-email").value;
                if(email.length == 0){
                    emailError.textContent = "Please enter your Email"
                    return false
                }
                if (
                !email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
                ) {
                emailError.textContent = "Invalid Email";
                return false;
                }
                emailError.innerHTML = '<i class ="fas fa-check-circle"></i>';
                return true;
    }

function validateMessage(){
        const message = document.getElementById("contact-message").value;
        const required = 30;
        const left = required - message.length;
        if(left>0){
            messageError.textContent = `${left} more characters required`
            return false ;
        }
        messageError.innerHTML = '<i class ="fas fa-check-circle"></i>';
        return true;
    }

function validateForm(){
        if( !validateName() || !validatePhone() || !validateEmail() || !validateMessage() ){
            submitError.style.display = "block"
            submitError.textContent = "Please fill all details to submit "
            setTimeout(function() {submitError.style.display = 'none'},3000)
            return false;
        }
    }