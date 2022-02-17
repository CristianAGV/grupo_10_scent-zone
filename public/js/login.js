let email = document.querySelector('#email');
let password = document.querySelector('#password');
let form = document.querySelector('#login-form')
let submit = document.querySelector('#login-submit');
let errorDisplay = document.querySelector('.input-error');
let emailError = document.querySelector('#email-login-error');
let passwordError = document.querySelector('#password-login-error');
let notFilledDisplay = document.querySelector("#not-filled");

let correctEmail = false;
let correctPassword = false;
let notFilled = true;

email.addEventListener('blur', (e) => {
    let userEmail = e.target.value;    

    if(userEmail == "" || userEmail === null){
        emailError.innerText = "Debes ingresar un email";
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(userEmail))){
        emailError.innerText = "Debes ingresar un email con un formato válido";
    }else{
        notFilled = false;
        correctEmail = true;
        emailError.innerText = ""; 
    }

})

password.addEventListener('blur', (e) => {
    let userPassword = e.target.value;

    if(userPassword == "" || userPassword === null){
        passwordError.innerText = "Debes ingresar una contraseña"
    } else {
        correctPassword = true;
        notFilled = false;
        passwordError.innerText = ""
    }

})



form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(notFilled){
        notFilledDisplay.innerText = "Debes llenar todos los campos";
    } else if(correctPassword && correctEmail){
        form.submit()
    }
   
    
})