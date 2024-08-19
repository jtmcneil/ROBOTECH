
// global variables

const showLoginButtons = document.querySelectorAll('.show-login');
const showRegisterButtons = document.querySelectorAll('.show-register');
const authDialog = document.getElementById('auth-dialog');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const backgroundBlur = document.getElementById('background-blur');
const closeDialogButton = document.getElementById('close-dialog-button');
const registerPassword = document.getElementById('register-password');
const passwordConfirm = document.getElementById('confirm-password');
const passwordMatchMessage = document.querySelector('.password-match-message');

// helper functions
const showLogin = () => {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
}

const showReister = () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
}

const showDialog = () => {
    authDialog.showModal();
    backgroundBlur.classList.add('show');
}

const hideDialog = () => {
    authDialog.close();
    backgroundBlur.classList.remove('show');
}


// event listeners

const submitRegister = (event) => {

    if (registerPassword.value !== passwordConfirm.value) {
        event.preventDefault();
        passwordMatchMessage.classList.add('show');
        return;
    }

    passwordConfirm.disabled = true;
}

// event listener assignment

showLoginButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        showLogin();
        showDialog();
    });
})


showRegisterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        showReister();
        showDialog();
    });
})

closeDialogButton.addEventListener('click', (event) => {
    hideDialog();
});

registerForm.addEventListener('submit', submitRegister);

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        hideDialog();
    }
})