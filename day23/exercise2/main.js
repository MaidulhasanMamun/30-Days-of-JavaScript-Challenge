
let wrapper = document.querySelector('.wrapper');
let keyPressCode = document.querySelector('.key-press');
let keyCode = document.querySelector('.keycode');
let input = document.querySelector('input');
let body = document.getElementsByTagName('BODY')[0];
let keyCodeContainer = document.querySelector('.keycode-container');

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
    keyPressCode.textContent = e.key
     console.log(e.which)
     keyCode.textContent = e.keyCode
 })

