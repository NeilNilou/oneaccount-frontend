 function register() {
     // inputs
     var userEmail, userPhone, userPasswordCreation, userPasswordConfirmation;
     
     // messages d'erreurs
     var emailError, phoneError, passwordCreationError, passwordConfirmationError;
     var emailErrorContent, phoneErrorContent, passwordCreationErrorContent, passwordConfirmationErrorContent;
     
     userEmail = document.getElementById('email-input').value;
     userPhone = document.getElementById('phone-input').value;
     userPasswordCreation = document.getElementById('password-creation-input').value;
     userPasswordConfirmation = document.getElementById('password-confirmation-input').value;
     
     emailError = document.getElementById('error-msg-email');
     phoneError = document.getElementById('error-msg-phone');
     passwordCreationError = document.getElementById('error-msg-password-creation');
     passwordConfirmationError = document.getElementById('error-msg-password-confirmation');
     emailErrorContent = document.getElementById('error-msg-email-content');
     phoneErrorContent = document.getElementById('error-msg-phone-content');
     passwordCreationErrorContent = document.getElementById('error-msg-password-creation-content');
     passwordConfirmationErrorContent = document.getElementById('error-msg-password-confirmation-content');
     
     if (userEmail == "") {
         emailErrorContent.textContent = "Veuillez renseigner votre adresse email"
         emailError.style.display = "block";
     }
     if (userEmail == "") {
         phoneErrorContent.textContent = "Veuillez renseigner votre numéro de téléphone"
         phoneError.style.display = "block";
     }
     if (userPasswordCreation == "") {
         passwordCreationErrorContent.textContent = "Veuillez créer un mot de passe"
         passwordCreationError.style.display = "block";
     }
     if (userPasswordConfirmation == "") {
         passwordConfirmationErrorContent.textContent = "Veuillez confirmer votre mot de passe"
         passwordConfirmationError.style.display = "block";
     }
     
    if (userPasswordCreation != userPasswordConfirmation) {
        passwordCreationErrorContent.textContent = "Les mots de passes diffèrent";
        passwordConfirmationErrorContent.textContent = "Les mots de passes diffèrent";
        passwordCreationError.style.display = "block";
        passwordConfirmationError.style.display = "block";
     }
 }