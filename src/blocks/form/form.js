const form = document.querySelector('.form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const myForm = new FormData(form);

    const result = checkEmail(myForm.get('email'));

    changeFormDependingOnResult(result);
})

function checkEmail(email) {
    const emailRegularExpression = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
    const russianLettersRegularExpression = /[а-я]/;
    return emailRegularExpression.test(email) && !russianLettersRegularExpression.test(email);
}

function changeFormDependingOnResult(result) {
    const errorMessage = document.querySelector('.form__error');
    if(result) {
        hideError(errorMessage);
    }
    else {
        showError(errorMessage);
    }
}

function hideError(errorMessage) {
    errorMessage.classList.remove('form__error_display_block');
    errorMessage.classList.add('form__error_display_none');
}

function showError(errorMessage) {
    errorMessage.classList.remove('form__error_display_none');
    errorMessage.classList.add('form__error_display_block');
}