const totalCountries = document.querySelector('.total-countries');
const container = document.querySelector('.countries-wrapper');
const displayPopulationBtn = document.querySelector('.population-btn');
const displayLanguagesBtn = document.querySelector('.languages-btn');
const displayText = document.querySelector('.text-paragraph');
totalCountries.textContent = countries.length;

console.log(countries);


const displayTenLargestCountries = () => {
    container.textContent = "";
    for(const country of countries) {
        let {name, population} = country;
         countries.sort((a, b) => {
             if(a.population > b.population) return -1;
             if(a.population < b.population) return 1;
             return 0;
         })
         
     }
         let sortedCountByPop = countries.slice(0, 10);
         displayText.textContent = `${sortedCountByPop.length} largest countries in the world.`

         for(const country of sortedCountByPop) {
             let {name, population} = country;
            
             const countryContainer = document.createElement('div');
             countryContainer.setAttribute('class', 'country-container');
             let countryName = document.createElement('p');
             let countryNameDiv = document.createElement('div');
             let countryBar = document.createElement('div');
             countryBar.style.width = `${population/5000000}px`;
             countryBar.style.height = '40px';
             countryBar.style.backgroundColor = 'rgb(235, 150, 22)';
             let countryPopulation = document.createElement('p')
             let countryPopulationDiv = document.createElement('div');
             countryName.textContent = name;
             countryPopulation.textContent = population.toString();
             countryNameDiv.append(countryName);
             countryContainer.append(countryNameDiv);
             countryContainer.append(countryBar);
             
             countryPopulationDiv.append(countryPopulation);
             countryContainer.append(countryPopulationDiv);

             container.append(countryContainer);
     
         }
}

const displayTenSpokenLanguages = () => {
    container.textContent = "";
    let langArr = [];
    for(const country of countries) {
        let {languages} = country;
        for(const language of languages) {
            langArr.push(language);
    }


    }
    console.log(langArr);
    
    let setLang = new Set(langArr);
    const countWords = [];
    const paragraphWords = {};
    for (const w of setLang) {
        const filteredWords = langArr.filter(word => word === w);
        countWords.push({word: w, paragraphWords: filteredWords.length});
    }

    console.log(countWords);

    countWords.sort((a, b) => {
        if(a.paragraphWords > b.paragraphWords) return -1;
        if(a.paragraphWords < b.paragraphWords) return 1;
        return 0;
    })

    let sorted = countWords.slice(0, 10);
    console.log(sorted);
    displayText.textContent = `${sorted.length} most spoken languages in the world.`
    for(const w of sorted) {
        let{word, paragraphWords} = w;
        console.log(word, paragraphWords);
        const countryContainer = document.createElement('div');
             countryContainer.setAttribute('class', 'country-container');
             let languageName = document.createElement('p');
             let languageNameDiv = document.createElement('div');
             let countryBar = document.createElement('div');
             countryBar.style.width = `${paragraphWords*5}px`;
             countryBar.style.height = '40px';
             countryBar.style.backgroundColor = 'rgb(235, 150, 22)';
             let languageCount = document.createElement('p')
             let languageCountDiv = document.createElement('div');
             languageName.textContent = word;
             languageCount.textContent = paragraphWords;
             languageNameDiv.append(languageName);
             countryContainer.append(languageNameDiv);
             countryContainer.append(countryBar);
             
             languageCountDiv.append(languageCount);
             countryContainer.append(languageCountDiv);

             container.append(countryContainer);
      
    }
}



displayPopulationBtn.addEventListener('click', () => displayTenLargestCountries());
displayLanguagesBtn.addEventListener('click', () => displayTenSpokenLanguages());

displayTenLargestCountries();










