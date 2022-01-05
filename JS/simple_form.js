const NAME_REGEX = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
const EMAIL_REGEX = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');
const PHONE_REGEX = RegExp('^[0-9]{1,2}\\s{1}[0-9]{10}$');

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    if (NAME_REGEX.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "NAME Is Incorrect!";
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    if (EMAIL_REGEX.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "EMAIL Is Incorrect!";
    }
});

const telephone = document.querySelector('#tel');
const telephoneError = document.querySelector('.tel-error');
telephone.addEventListener('input', function() {
    if (PHONE_REGEX.test(telephone.value)) {
        telephoneError.textContent = "";
    } else {
        telephoneError.textContent = "TELEPHONE NUMBER Is Incorrect";
    }
});
