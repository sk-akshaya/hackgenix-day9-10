const form = document.querySelector('#reg');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');


// Email validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone validation
function isValidPhone(phone) {
    return /^[6-9][0-9]{9}$/.test(phone);
}

// Show error
function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    input.classList.toggle('invalid', message !== '');
    input.classList.toggle('valid', message === '');
}


function validate() {
    let ok = true;
    if (name.value.trim().length < 3) { showError(name, 'Name needs at least 3 letters'); ok = false; }
    else showError(name, '');
    if (!isValidEmail(email.value)) { showError(email, 'Enter a valid email'); ok = false; }
    else showError(email, '');
    if (!isValidPhone(phone.value)) { showError(phone, 'Enter a 10-digit mobile number'); ok = false; }
    else showError(phone, '');
    if (password.value.length < 8) { showError(password, 'Password needs 8+ characters'); ok = false; }
    else showError(password, '');
    return ok;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validate()) {
        document.querySelector('#success').textContent = 'Registration successful, ' + name.value + '!';
        form.reset();
    }
});