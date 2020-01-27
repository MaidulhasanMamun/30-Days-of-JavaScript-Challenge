
const wrapper = document.querySelector('.wrapper');
const keyPressCode = document.querySelector('.key-press');
const keyCode = document.querySelector('.keycode');
const input = document.querySelector('input');
const body = document.getElementsByTagName('BODY')[0];
const keyCodeContainer = document.querySelector('.keycode-container');
const header = document.querySelector('.header');

keyCode.addEventListener('click', () => {
    console.log('something');
    
    
})

/*
body.addEventListener('keypress', (e) => {

     console.log(e.which)
     keyCode.textContent = e.keyCode
 })*/

body.addEventListener('keydown', (e) => {
    keyCodeContainer.classList.add('show');
    header.textContent = 'You pressed'
    keyPressCode.textContent = e.key
     console.log(e.which)
     keyCode.textContent = e.keyCode
 })

