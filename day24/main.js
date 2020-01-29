const imageContainer = document.querySelector('.image-container');
const massInput = document.querySelector('.mass-input');
const planetInput = document.querySelector('.planet-options') 
const calculateWeightBtn = document.querySelector('.calculate-weight__btn');
const wrapper = document.querySelector('.planet-container');
const planet = document.querySelectorAll('.option');
let displayedWindow = document.createElement('div');
const p = document.querySelector('.paragraph');



calculateWeightBtn.addEventListener('click', calculateWeight = () => {
    if(massInput.value < 1) {
        p.textContent = 'Mass is required';
        p.style.color = 'red';

    } else if (!massInput.value.match(/^[0-9]*$/)){ 
        p.textContent = 'Please enter only digits, not letters or special characters';
        p.style.color = 'red';

    } else {
        p.textContent = '';
        displayedWindow.textContent = "";
        let weightDisplayed = document.createElement('p');
        weightDisplayed.style.textAlign = 'center';
        let weightContainer = document.createElement('div');
        weightContainer.setAttribute('class', 'weight-container');
        let planetImg = document.createElement('img');
        planetImg.style.width = '35%';
        let weightText = document.createElement('span');
        // weightContainer.setAttribute('class', 'weight-container');
    
    
        let mass = massInput.value;
        let gravity = planetInput.value;
        let weight = Math.round(mass * gravity);
        weightText.setAttribute('class','weight');
        weightText = weight;
        console.log(weightText)
        if(planetInput.value === '100') {
            planetImg.src = 'mercury.png';
            weightDisplayed.textContent = `The weight of an object in Mercury is ${weightText} N`
        } else if(planetInput.value === '8.87') {
            planetImg.src = 'venus.png';
            weightDisplayed.textContent = `The weight of an object in Venus is ${weightText} N`
    
        } else if(planetInput.value === '9.79') {
            planetImg.src = 'earth.png';
            weightDisplayed.textContent = `The weight of an object in Earth is ${weightText} N`
        } else if(planetInput.value === '1.62') {
            planetImg.src = 'moon.png';
            weightDisplayed.textContent = `The weight of an object in Moon is ${weightText} N`
    
        } else if(planetInput.value === '3.71') {
            planetImg.src = 'mars.png';
            weightDisplayed.textContent = `The weight of an object in Mars is ${weightText} N`
            console.log(weightText)
    
        } else if(planetInput.value === '25') {
            planetImg.src = 'jupiter.png';
            weightDisplayed.textContent = `The weight of an object in Jupiter is ${weightText} N`
    
        } else if(planetInput.value === '10.44') {
            planetImg.src = 'saturn.png';
            weightDisplayed.textContent = `The weight of an object in Saturn is ${weightText} N`
    
        }  else if(planetInput.value === '8.86') {
            planetImg.src = 'uranus.png';
            weightDisplayed.textContent = `The weight of an object in Uranus is ${weightText} N`
    
        }  else if(planetInput.value === '11.15') {
            planetImg.src = 'neptune.png';
            weightDisplayed.textContent = `The weight of an object in Neptune is ${weightText} N`
        } else if(planetInput.value === '0.58') {
            planetImg.src = 'pluto.png';
            weightDisplayed.textContent = `The weight of an object in Pluto is ${weightText} N`
        }
    
    
    
        weightDisplayed.style.color = 'white';
        weightContainer.append(weightDisplayed);
        imageContainer.append(planetImg);
        displayedWindow.setAttribute('class', 'planet-window');
        displayedWindow.append(planetImg);
        displayedWindow.append(weightContainer);
        wrapper.append(displayedWindow);
    
    }
    

});

massInput.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        document.querySelector('.calculate-weight__btn').click();
    }
});

let planets = [
    mercury = {
        name: 'Mercury',
        img: 'mercury.png'
    },
    venus = {
        name: 'Venus',
        img: 'venus.png'
    },
    earth = {
        name: 'Earth',
        img: 'earth.png'
    },
    moon = {
        name: 'Moon',
        img: 'moon.png'
    },
    mars = {
        name: 'Mars',
        img: 'mercury.png'
    },
    jupiter = {
        name: 'Jupiter',
        img: 'mercury.png'
    },
    saturn = {
        name: 'Saturn',
        img: 'mercury.png'
    },
    uranus = {
        name: 'Uranus',
        img: 'uranus.png'
    },
    neptune = {
        name: 'Neptune',
        img: 'neptune.png'
    },
    pluto = {
        name: 'Pluto',
        img: 'pluto.png'
    }


]




