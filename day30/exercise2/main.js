const form = document.querySelector('.form');
const firstNameInput = document.querySelector('.first-name__input');
const lastNameInput = document.querySelector('.last-name__input');
const email = document.querySelector('.email-input');
const password = document.querySelector('.password-input');
const phone = document.querySelector('.phone-input');
const bio = document.querySelector('.bio-input');
const submitBtn = document.querySelector('.submit-btn');
let warningFirstName = document.querySelector('.warning-first-name');
let warningLastName = document.querySelector('.warning-last-name');
let warningEmail = document.querySelector('.warning-email');
let warningPassword = document.querySelector('.warning-password');
let warningPhone = document.querySelector('.warning-phone');





form.addEventListener('submit', (e) => {
    e.preventDefault();
});

firstNameInput.addEventListener('keyup', () => {
    let regex = /[A-Za-z]\d{3,16}/g
    let input = firstNameInput.value;
    let match = input.match(regex);
    console.log(match)
    if(!input.match(regex)) {
        warningFirstName.textContent = 'First name must be alphanumeric and include 3 - 16 letters';
        email.classList.add('warning');

    }  else{
        warningFirstName.textContent = "";
        email.classList.add('ticked');

    }
  
})

lastNameInput.addEventListener('keyup', () => {
    let regex = /[A-Za-z]\d{3,16}/g
    let input = lastNameInput.value;
    let match = input.match(regex);
    console.log(match)
    if(!input.match(regex)) {
        warningLastName.textContent = 'Last name must be alphanumeric and include 3 - 16 letters';
        email.classList.add('warning');

    }  else{
        warningLastName.textContent = "";
        email.classList.add('ticked');

    }
  
})

email.addEventListener('keyup', () => {
    let regex = /[@][a-z.com]/g;
    let text = email.value;
    let match = text.match(regex);
    console.log(match)
    if(!email.value.match(regex)) {
        warningEmail.textContent = 'Email must be a valid address, e.g. example@example.com';
        email.classList.add('warning');
    } else {
        warningEmail.textContent = "";
        email.classList.remove('warning');
        email.classList.add('ticked');

    }
  
})

password.addEventListener('keyup', () => {
    let regex = /[A-Za-z@._-]\d{6,20}/g
    let input = password.value;
    let match = input.match(regex);
    console.log(match)
    if(!input.match(regex)) {
        warningPassword.textContent = 'Passord be alphanumeric and include 6 - 20 letters';
        email.classList.add('warning');

    }  else{
        warningPassword.textContent = "";
        email.classList.remove('warning');
        email.classList.add('ticked');
    }
  
})

phone.addEventListener('keyup', () => {
    let regex = /\d{3}d{3}d{4}/g
    let input = phone.value;
    let match = input.match(regex);
    console.log(match)
    if(!input.match(regex)) {
        warningPhone.textContent = 'A valid Telephone number(11 digits and 333-333-3334)';
        email.classList.add('warning');

    }  else{
        warningPhone.textContent = "";
        email.classList.remove('warning');
        email.classList.add('ticked');
    }
  
})