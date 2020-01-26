let numsContainer = document.querySelector('.wrapper');
;

const isPrime = () => {
    for (let i = 2; i < 100; i++) {
    if (num % i === 0) {
        return false
    }
}
    numberBox.style.background = 'red'
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

    if(i % 2 === 0) {
        numberBox.style.background = "#21BF73";
    } else if(i % 2 !== 0) {
        numberBox.style.background = "#FDDB3A";

    } else {

        numberBox.style.background = isPrime();
    }

    
    numberBox.appendChild(numberHeader);
    numsContainer.appendChild(numberBox);

}