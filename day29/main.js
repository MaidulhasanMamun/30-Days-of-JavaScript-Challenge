const container = document.querySelector('.container');
const title = document.querySelector('.title');


let str = '30 Days of JavaScript Challenge 2020 Asabeneh Yetayeh'
const generateRandomColor = () => {
    let randomColor = '#';
    let str = '0123456789abcdef';
    for(let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      randomColor += str[index];

    }
    return randomColor
}

setInterval(() => {
    let randomColor = generateRandomColor();
    container.style.backgroundColor = randomColor;
}, 2000);

title.textContent = str;








let arr = str.split('')
title.textContent = ""


const displayText = () => {
    for (let i = 0; i < arr.length; i++) {
        //give each letter a random color
        let spannedLetter = document.createElement('span');
        spannedLetter.textContent = arr[i];

        setInterval(() => {
            let randomColor = generateRandomColor();
            spannedLetter.style.color = randomColor;
        }, 3000);
        title.append(spannedLetter);

        setInterval(() => {
            title.classList.toggle('change-font-weight');
            title.classList.toggle('change-font-family');
            title.classList.toggle('change-alignment');
        }, 4000);

        setInterval(() => {
            title.classList.toggle('change-alignment');
        }, 5000);

        setInterval(() => {
             title.classList.toggle('reduce-opacity');
        }, 5000);

        setInterval(() => {
            title.classList.toggle('change-line-height');
        }, 2000);

        setInterval(() => {
            title.classList.toggle('change-letter-spacing');
        }, 2000);


/*
        const changeFontToBold = setInterval(() => {
            console.log('I am working')
            clearInterval(changeFontToSlim); 
            title.style.fontWeight = '700';
            title.style.fontFamily = 'Garamond';
            console.log(title);
            () => changeFontToSlim
            
        
        }, 2000);*/
        
        //append the letter in title using a loop
        
    
    }
}


displayText();

