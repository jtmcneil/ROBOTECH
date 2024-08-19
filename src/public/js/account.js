// global variables

const editAccountForm = document.getElementById('edit-account-form');
const newPassword = document.getElementById('new-password');
const passwordConfirm = document.getElementById('new-password-confirm');
const passwordMatchMessage = document.querySelector('.password-match-message');

// event listeners

const submitEditAccount = (event) => {

    if (newPassword.value !== passwordConfirm.value) {
        event.preventDefault();
        passwordMatchMessage.classList.add('show');
        return;
    }

    passwordConfirm.disabled = true;
}

// event listener assignment

editAccountForm.addEventListener('submit', submitEditAccount)