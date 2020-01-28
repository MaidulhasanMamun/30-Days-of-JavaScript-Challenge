const banner = document.querySelector('.banner');
const techText = document.querySelector('.tech');
let test = asabenehChallenges2020.author.titles;
console.log(test)
let titles = asabenehChallenges2020.author.titles;

for(let i = 0; i < 1; i++) {
    console.log(test)
    let randomIcon = '';
    let randomTitle = '';
    let randomIconIndex = Math.floor(Math.random()*titles.length);
    randomIcon = randomIcon + test[randomIconIndex].slice(0,1);
    randomTitle = randomTitle + test[randomIconIndex].slice(1,2);
    console.log(randomIcon)
    console.log(randomTitle)
    let randomText = `${randomIcon} ${randomTitle}`;
    console.log(randomText)
}


setInterval(() => {
    for(let i = 0; i < 1; i++) {
            banner.textContent = '';
            let randomIcon = '';
            let randomTitle = '';            
            let titlesIcon = document.createElement('div');
            let titlesDetails = document.createElement('div');
            let randomIconIndex = Math.floor(Math.random()*titles.length);
            randomIcon = randomIcon + titles[randomIconIndex].slice(0,1);
            randomTitle = randomTitle + titles[randomIconIndex].slice(1,2);
            titlesIcon.textContent = randomIcon;
            titlesIcon.setAttribute('class', 'icon');
            titlesIcon.style.marginLeft = '2rem';
            titlesDetails.setAttribute('class', 'title');
            titlesDetails.textContent = randomTitle;
            titlesIcon.style.margin = '.2rem';
            titlesDetails.style.margin = '.2rem';
            let titlesWrapper = document.createElement('div');
            titlesWrapper.style.display = 'flex';
            titlesWrapper.style.alignItems = 'center';
            titlesWrapper.append(titlesIcon, titlesDetails);
            banner.append(titlesWrapper);

        }
    }, 2000);

const generateRandomColor = () => {
    let randomColor = '#';
    let str = '0123456789abcdef';
    for(let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      randomColor += str[index];

    }
    return randomColor
}

const displayWord = () => {

    setInterval(() => {
        for(let i = 0; i < 1; i++) {
            let randomTech = '';
            let index = Math.floor(Math.random() * asabenehChallenges2020.keywords.length);
            randomTech = randomTech + asabenehChallenges2020.keywords[index]
            techText.textContent = "";
            techText.setAttribute('class', 'tech-font');
            techText.textContent = randomTech;
            let randomColor = generateRandomColor();
            techText.style.color = randomColor;
        }
    }, 2000);
}

displayWord();




