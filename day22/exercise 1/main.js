let numsContainer = document.querySelector('.wrapper');
;
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        return false
    }
}   
    return n > 1;
    
}

for(let i = 0; i < 100 +1; i++) {
    let numberBox = document.createElement('div');
    let numberHeader = document.createElement('h2');
    numberBox.textContent = i;
    numberBox.style.height = '4rem';
    numberBox.style.width = '8rem';
    numberBox.style.display = 'flex';
    numberBox.style.justifyContent = 'center';
    numberBox.style.alignItems = 'center';
    numberBox.style.fontSize = '30px';
    numberBox.style.color = 'white';
    numberBox.style.margin = '.1rem';
    numberBox.style.textAlign = 'center';

    if(isPrime(i)) {
        numberBox.style.background = '#EB695B';
    }
    else if(i % 2 === 0) {
        numberBox.style.background = "#21BF73";
    } else {
        numberBox.style.background = "#FDDB3A";

    }

    
    numberBox.appendChild(numberHeader);
    numsContainer.appendChild(numberBox);

}