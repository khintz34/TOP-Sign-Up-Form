let pwd1Value = document.form1.password.value;
let pwd2Value = document.form1.confirmPwd.value;
let pwd1 = document.querySelector('.password');
let pwd2 = document.querySelector('.confirm-pwd');
let pwdError = document.querySelector('.pwd-error');
let pwdConfirmError = document.querySelector('.pwd-confirm-error');


function checkPassword() {
    pwd1Value = document.form1.password.value;
    pwd2Value = document.form1.confirmPwd.value;

    if (pwd1Value !== pwd2Value|| pwd1Value === '' || pwd2Value === '') {
        pwdError.innerHTML = '*PASSWORDS MUST MATCH';
        pwdConfirmError.innerHTML = 'DOES NOT MATCH PASSWORD';
        pwdConfirmError.style.color = 'red';
        pwd2.classList.add('errorClass');
        pwd1.classList.add('errorClass');
    } else {
        pwdError.textContent = '';
        pwdConfirmError.innerHTML = 'Passwords matched';
        pwd2.classList.remove('errorClass');
        pwd1.classList.remove('errorClass');
        pwdConfirmError.style.color = 'green';
    }
};

pwd1.onkeyup= checkPassword;
pwd2.onkeyup = checkPassword;

