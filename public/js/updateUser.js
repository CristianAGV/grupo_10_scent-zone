let formReg        = document.querySelector("form")
let fileUpdateUser    = document.querySelector("#file-updateUser");
let fileUserError  = document.querySelector("#userImageError");
let firstName      = document.querySelector("#first_name");
let firstNameError = document.querySelector("#userNameError");
let lastName       = document.querySelector("#last_name");
let lastNameError  = document.querySelector("#userLastNameError");
let email          = document.querySelector("#email");
let emailError     = document.querySelector("#userEmailError");
let password       = document.querySelector("#password");
let passwordError  = document.querySelector("#userPasswordError");
let generalErrors  = document.querySelector("#generalErrors")
let btnSubmit      = document.querySelector("#btn-submit")

// console.log("this is fucking running! |..| ");

let anyError = true;
let isFileUploaded = false;

fileUpdateUser.addEventListener("change", () => {    
    
    const fileUser = fileUpdateUser.files[0];
    
    if ( fileUser.type === "image/jpeg" || fileUser.type === "image/jpg" || fileUser.type === "image/png" ) {
        fileUserError.innerHTML = "";
        isFileUploaded = true
        anyError = false;
        return;
      } else {
        fileUserError.innerHTML = "Debes subir una imagen con formato valido (JPG, JPEG, PNG, GIF).";
        anyError = true;
        return;
      }
    
});


firstName.addEventListener("blur", ( e ) => {
    
    const userName = e.target.value;
    
    if (userName.length < 3) {
        firstNameError.innerHTML = "El nombre debe tener minimo 3 caracteres";
        anyError = true;
      } else if (userName.length >= 3) {
        firstNameError.innerHTML = "";
        anyError = false;
      }

});

lastName.addEventListener("blur", ( e ) => {

    const userLastName = e.target.value;

    if ( userLastName.length < 3 ){
        lastNameError.innerHTML = "El apellido debe tener minimo 3 caracteres";
        anyError = true; 
    }else{
        lastNameError.innerHTML = "";
        anyError = false
    }

});


email.addEventListener("blur", ( e )=>{

    const userEmail = e.target.value;    
  
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(userEmail))){
        emailError.innerHTML = "Debes ingresar un correo válido";
        anyError= true;
    }else{
        emailError.innerHTML = "";
        anyError= false;
    }

});


password.addEventListener("focus", ( e ) => {

    const userPassword = e.target.value

    if ( userPassword.length < 4 ){
        passwordError.innerHTML = "Debes ingresar una contraseña de al menos 4 caracteres"
        anyError = true;
    }
    
    
})

password.addEventListener("change", (e) => {    

    const userPassword = e.target.value;

    if ( userPassword.length >= 4 ){
        passwordError.innerHTML = ""
        anyError = false
    }

});

btnSubmit.addEventListener("click", (e) => {
        
    e.preventDefault();
    if ( anyError || !isFileUploaded ){
        generalErrors.innerHTML="Debes verificar que todos los campos sean correctos y estén llenos"
    }else if ( !anyError ) {
        formReg.submit()        
    }

})

