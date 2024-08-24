document.addEventListener('DOMContentLoaded', function () {

  
    const signUpForm = document.getElementById('signUpForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();  

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '' || password === '' || password.length < 6) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            
            alert('Form Submitted Successfully!');
        }
    });


    const signInForm = document.getElementById('signInForm');
    const signInEmailInput = document.getElementById('signInEmail');
    const signInPasswordInput = document.getElementById('signInPassword');
    const signInErrorMessage = document.getElementById('signInErrorMessage');

    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();  

        const email = signInEmailInput.value.trim();
        const password = signInPasswordInput.value.trim();

        if (email === '' || password === '') {
            signInErrorMessage.style.display = 'block';
        } else {
            signInErrorMessage.style.display = 'none';
           
            alert('Sign In Successful!');
        }
    });

});
