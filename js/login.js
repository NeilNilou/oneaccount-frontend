 function login() {
     var user_email = document.getElementById('email-input').value;
     var emailError = document.getElementById('error-msg-email');
     var emailErrorContent = document.getElementById('error-msg-email-content');
     
     var user_password = document.getElementById('password-input').value;
     var passwordError = document.getElementById('error-msg-password');
     var passwordErrorContent = document.getElementById('error-msg-password-content');
     
     emailErrorContent.textContent = "Aucun compte trouvé";
     emailError.style.display = "block";
     
     passwordErrorContent.textContent = "Mot de passe incorrect";
     passwordError.style.display = "block";
 }