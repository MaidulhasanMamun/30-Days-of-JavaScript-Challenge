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





form.addEventListener('submit', (e) => {
    e.preventDefault();
});

firstNameInput.addEventListener('keyup', () => {
    let regex = /[0-9]/g
    if(firstNameInput.value.length < 3 || firstNameInput.value.match(regex)) {
        warningFirstName.textContent = 'First name must be alphanumeric and include 3 - 16 letters'
    }  else if (firstNameInput.value.length > 16) {
        warningFirstName.textContent = 'First name is too long'
    } else{
        warningFirstName.textContent = "";
    }
  
})

lastNameInput.addEventListener('keyup', () => {
    let regex = /[0-9]/g
    if(lastNameInput.value.length < 3 || lastNameInput.value.match(regex)) {
        warningLastName.textContent = 'Last name must be alphanumeric and include 3 - 16 letters'
    }  else if (lastNameInput.value.length > 16) {
        warningLastName.textContent = 'Last name is too long'
    } else{
        warningLastName.textContent = "";
    }
  
})

email.addEventListener('keyup', () => {
    let regex = /[@]/&&/[.com]/g
    if(!email.value.match(regex)) {
        warningEmail.textContent = 'Email must be a valid address, e.g. example@example.com'
    } else {
        warningEmail.textContent = "";
    }
  
})