const numsContainer = document.querySelector('.wrapper');
const generateBtn = document.querySelector('.btn-generate');
const input = document.querySelector('.numbers-input');
const error = document.querySelector('.error');

let n = input.value
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        console.log(input.value[i])
    if (n % i === 0) {
        return false
    }
}   
    return n > 1;
    
}

input.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        document.querySelector('.btn-generate').click();
    }
})

generateBtn.addEventListener('click', generateNums = () => {
    numsContainer.textContent = '';
    if(!input.value.match(/^[0-9]*$/)) {
        error.textContent = "Plese enter only digits";
    } else {
        error.textContent = ""
        for(let i = 0; i < input.value; i++) {
            let numberBox = document.createElement('div');
            let numberHeader = document.createElement('h2');
            numberBox.textContent = i;
            numberBox.style.height = '4rem';
            numberBox.style.width = '6rem';
            numberBox.style.display = 'flex';
            numberBox.style.justifyContent = 'center';
            numberBox.style.alignItems = 'center';
            numberBox.style.fontSize = '25px';
            numberBox.style.color = 'white';
            numberBox.style.margin = '.1rem';
            numberBox.style.textAlign = 'center';
        
            if(isPrime(i)) {
                numberBox.style.background = "#EB695B";

            }
            else if(i % 2 === 0) {
                numberBox.style.background = "#21BF73";
            } else {
                numberBox.style.background = "#FDDB3A";
        
            }
              
            numberBox.appendChild(numberHeader);
            numsContainer.appendChild(numberBox);
        
        }
    }
    
})
