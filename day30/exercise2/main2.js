const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
let warning = document.querySelectorAll('.warning');
const submitBtn = document.querySelector('.submit-btn');

let firstNameValidated = false
lastNameValidated = false
emailValidated = false
passwordValidated = false
phoneValidated = false
bioValidated = false

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        let target = e.target.name;
        let value = e.target.value;


        console.log(target)
        if (target === 'firstname') {
            let regex = /^[A-Za-z0-9]{3,16}$/g
            if (!regex.test(value)) {
                console.log(target)
                warning.textContent = 'First name must be alphanumeric and include 3 - 16 letters';
                input.classList.add('warning-outline');
                input.classList.remove('thicked');
                firstNameValidated = false
                validateForm();

            } else {
                warning.textContent = "";
                input.classList.add('thicked');
                firstNameValidated = true
                validateForm();

            }

        } else if (target === 'lastname') {

            let regex = /[A-Za-z0-9]{3,16}$/ig
            if (!regex.test(value)) {
                warning.textContent = 'Last name must be alphanumeric and include 3 - 16 letters';
                input.classList.add('warning-outline');
                input.classList.remove('thicked');
                lastNameValidated = false
                validateForm();


            } else {
                warning.textContent = "";
                input.classList.add('thicked');
                lastNameValidated = true
                validateForm();

            }

        } else if (target === 'email') {
            let regex = /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,}$/ig;
            if (!regex.test(value)) {
                warning.textContent = 'Email must be a valid address, e.g. example@example.com';
                input.classList.add('warning-outline');
                input.classList.remove('thicked');
                emailValidated = false
                validateForm();

            } else {
                warning.textContent = "";
                input.classList.add('thicked');
                emailValidated = true
                validateForm();

            }
        } else if (target === 'password') {
            let regex = /[A-Z-a-z0-9\/@._$--]{6,20}$/g
            if (!regex.test(value)) {
                warning.textContent = 'Passord be alphanumeric and include 6 - 20 letters';
                input.classList.add('warning-outline');
                input.classList.remove('thicked');
                passwordValidated = false;
                validateForm();


            } else {
                warning.textContent = "";
                input.classList.add('thicked');
                passwordValidated = true;
                validateForm();
            }

        } else if (target === 'phone') {
            let regex = /[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}$/ig
            if (!regex.test(value)) {
                warning.textContent = 'A valid Telephone number(11 digits and 333-333-3334)';
                input.classList.add('warning-outline');
                input.classList.remove('thicked');
                phoneValidated = false
                validateForm();

            } else {
                warning.textContent = "";
                input.classList.add('thicked');
                phoneValidated = true;
                validateForm();
            }
        } else if (target === 'bio') {
            let regex = /^[a-z_!.;,? ]{8,50}$/ig
            if (!regex.test(value)) {
                warning.textContent = 'Bio must contain only lowercase letters, underscores,\n hyphens and be 8-50 characters';
                input.classList.add('warning-outline');
                input.classList.remove('thicked');
                bioValidated = false
                validateForm();

            } else {
                warning.textContent = "";
                input.classList.add('thicked');
                bioValidated = true
                validateForm();
            }
        }

    })
})


const validateForm = () => {

    if (firstNameValidated === true && lastNameValidated === true && emailValidated === true && passwordValidated === true && phoneValidated === true && bioValidated === true) {
        submitBtn.classList.add('validated');
        submitBtn.addEventListener('click', sendForm);
    } else {
        console.log('not validated')
        submitBtn.classList.remove('validated');
        submitBtn.removeEventListener('click', sendForm);


    }
}

const sendForm = () => form.innerHTML = `<h1>Thanks for submitting this form!</h1>`;
const removeSend = () => submitBtn.removeEventListener('click', sendForm);