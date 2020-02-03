const form = document.querySelector('.form');
const totalCountries = document.querySelector('.total-countries')
const searchInput = document.querySelector('.search-input');
const nameBtnSort = document.querySelector('.name-btn');
const capitalBtnSort = document.querySelector('.capital-btn');
const populationBtnSort = document.querySelector('.population-btn');
const countriesWrapper = document.querySelector('.countries-wrapper');
const statisticsContainer = document.querySelector('.statistics-container');
const backToTopBtn = document.querySelector('.back-to-top');

// statistics
const statisticsWrapper = document.querySelector('.statistics-countries__wrapper');
const btnStatsContainer = document.querySelector('.statistics-btn__container');
const displayPopulationBtn = document.querySelector('.pop-btn');
const displayLanguagesBtn = document.querySelector('.lang-btn');
const displayText = document.querySelector('.text-paragraph');

let countryContainer,
     countryFlag,
     countryName,
     countryCapital,
     countryLanguages,
     countryPopulation;

let popSorted = true;

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

const createNode = (e) => {
    return document.createElement(e);
};

const calculateWorldPopulation = () => {
    let sum = 0;
    for(const country in countries) {
        let{population} = countries[country];
        sum = sum + population;
        

    }
    return sum 
    
}

const createCountry = () => {
    countryContainer = createNode('div');
    countryFlag = createNode('img');
    countryName = createNode('h4');
    countryCapital = createNode('p');
    countryLanguages = createNode('p');
    countryPopulation = createNode('p');

    countryContainer.setAttribute('class', 'country-container');
    countryFlag.setAttribute('class', 'flag');
    countryName.setAttribute('class', 'country-name');

}

const appendCountry = () => {
    countryContainer.append(countryFlag, countryName, countryCapital, countryLanguages, countryPopulation);
    countriesWrapper.append(countryContainer);
}

const createWorldBar = () => {

    let worldDiv = createNode('div');
    let worldNameDiv = createNode('div');
    let worldName = createNode('p');
    let worldPop = createNode('p');
    let worldBar = createNode('div');
    worldDiv.setAttribute('class', 'statistics-countries__container')
    worldName.textContent = 'World';
    let worldPopulation = calculateWorldPopulation();
    worldBar.style.width = `${worldPopulation/8000000}px`;
    worldBar.style.height = '40px';
    worldBar.style.backgroundColor = 'rgb(235, 150, 22)';
    worldPop.textContent = worldPopulation.toString();
    worldNameDiv.append(worldName);
    worldDiv.append(worldNameDiv, worldBar, worldPop);
    statisticsWrapper.append(worldDiv);

} 
    
const searchByAll = () => {

    countriesWrapper.textContent = '';
    btnStatsContainer.textContent = '';
    statisticsWrapper.textContent = '';
    displayText.textContent = '';
    const popHeader = createNode('h2');
    popHeader.textContent = 'Population';
    popHeader.setAttribute('class', 'population-header');
    statisticsWrapper.append(popHeader);
    createWorldBar();

    for(const country in countries) {
        let {name, capital, languages, flag, population} = countries[country];
        
        if(name.toLowerCase().includes(searchInput.value) || capital.toLowerCase().includes(searchInput.value) || languages.toString().toLowerCase().includes(searchInput.value)) {

        //create elements
        createCountry();
                
        //setting textContent
        countryFlag.src = `${flag}`;
        countryName.textContent = `${name}`;
        countryCapital.textContent = `Capital: ${capital}`;
        countryLanguages.textContent = `Languages: ${languages}`;
        countryPopulation.textContent = `Population: ${population}`;

        //appendingDivs
        appendCountry();
        
        //update population statistics
        const countryPopContainer = createNode('div');
        countryPopContainer.setAttribute('class', 'statistics-countries__container');
        let countryPopName = createNode('p');
        let countryNameDiv = createNode('div');
        let countryBar = createNode('div');
        countryBar.style.width = `${population/5000000}px`;
        countryBar.style.height = '40px';
        countryBar.style.backgroundColor = 'rgb(235, 150, 22)';
        let countryPop = createNode('p')
        let countryPopulationDiv = createNode('div');
        countryPopName.textContent = name;
        countryPop.textContent = population.toString();
        countryNameDiv.append(countryPopName);
        countryPopContainer.append(countryNameDiv, countryBar);
        
        countryPopulationDiv.append(countryPop);
        countryPopContainer.append(countryPopulationDiv);

        statisticsWrapper.append(countryPopContainer);


        }
    
    }
}
    
  
        
searchInput.addEventListener('keyup', () => searchByAll());

const displayCountries = () => {

    totalCountries.textContent = countries.length;

    for(const country in countries) {
        let {name, flag, capital, languages, population} = countries[country];

        createCountry();
        
        //setting textContent
        countryFlag.src = `${flag}`;
        countryName.textContent = `${name}`;
        countryCapital.textContent = `Capital: ${capital}`;
        countryLanguages.textContent = `Languages: ${languages}`;
        countryPopulation.textContent = `Population: ${population}`;

        //appendingDivs
        appendCountry();


    }
}


nameBtnSort.addEventListener('click', sortByName = () => {
    countriesWrapper.textContent = '';

    // let arrowUp = createNode('i');
    // arrowUp.setAttribute('class', 'fas fa-long-arrow-alt-up')
    // nameBtnSort.append(arrowUp)
    
    for(const country in countries) {
        let {name, flag, capital, languages, population} = countries[country];
        if(name.toLowerCase().includes(searchInput.value)) {
            countries.sort()
            createCountry();

            //setting textContent
            countryFlag.src = `${flag}`;
            countryName.textContent = `${name}`;
            countryCapital.textContent = `Capital: ${capital}`;
            countryLanguages.textContent = `Languages: ${languages}`;
            countryPopulation.textContent = `Population: ${population}`;
    
            //appendingDivs
            appendCountry();

        }
    

 
    }

});

capitalBtnSort.addEventListener('click', sortCountriesByCapital = () => {
    countriesWrapper.textContent = '';

    // let arrowUp = createNode('i');
    // arrowUp.setAttribute('class', 'fas fa-long-arrow-alt-up')
    // nameBtnSort.append(arrowUp)
    
    for(const country in countries) {
        countriesWrapper.textContent = '';
        let {name, flag, capital, languages, population} = countries[country];
        if(capital.toLowerCase().includes(searchInput.value)) {
            countries.sort()
            createCountry();

            //setting textContent
            countryFlag.src = `${flag}`;
            countryName.textContent = `${name}`;
            countryCapital.textContent = `Capital: ${capital}`;
            countryLanguages.textContent = `Languages: ${languages}`;
            countryPopulation.textContent = `Population: ${population}`;
    
            //appendingDivs
            appendCountry();

        }
    

 
    }

});

populationBtnSort.addEventListener('click', sortCountriesByPopulation = () => {
    countriesWrapper.textContent = '';
    let sortedByPop = Object.assign([{}], countries);
    
    sortedByPop.sort((a, b) => {
        if(a.population > b.population) return -1;
        if(a.population < b.population) return 1;
        return 0;
    })

    console.table(sortedByPop);
    popSorted ?  sortedByPop.reverse(): sortedByPop.sort();
   


        for(const country in sortedByPop) {
            let {name, flag, capital, languages, population} = sortedByPop[country];

            if(name.toLowerCase().includes(searchInput.value) || capital.toLowerCase().includes(searchInput.value) || languages.toString().toLowerCase().includes(searchInput.value)) {
    
                
                createCountry();
            
                //setting textContent
                countryFlag.src = `${flag}`;
                countryName.textContent = `${name}`;
                countryCapital.textContent = `Capital: ${capital}`;
                countryLanguages.textContent = `Languages: ${languages}`;
                countryPopulation.textContent = `Population: ${population}`;
        
                //appendingDivs
                appendCountry();

    }
    

    }
   
    
})

//loads the countries
displayCountries();




const displayTenLargestCountries = () => {
    statisticsWrapper.textContent = "";
         countries.sort((a, b) => {
             if(a.population > b.population) return -1;
             if(a.population < b.population) return 1;
             return 0;
         })
         
     
         let sortedCountByPop = countries.slice(0, 10);
         displayText.textContent = `${sortedCountByPop.length} largest countries in the world.`
         createWorldBar();

         for(const country of sortedCountByPop) {
             let {name, population} = country;     
             
            const countryPopContainer = createNode('div');
            countryPopContainer.setAttribute('class', 'statistics-countries__container');
            let countryPopName = createNode('p');
            let countryNameDiv = createNode('div');
            let countryBar = createNode('div');
            countryBar.style.width = `${population/5000000}px`;
            countryBar.style.height = '40px';
            countryBar.style.backgroundColor = 'rgb(235, 150, 22)';
            let countryPop = createNode('p')
            let countryPopulationDiv = createNode('div');
            countryPopName.textContent = name;
            countryPop.textContent = population.toString();
            countryNameDiv.append(countryPopName);
            countryPopContainer.append(countryNameDiv, countryBar);
            
            countryPopulationDiv.append(countryPop);
            countryPopContainer.append(countryPopulationDiv);

            statisticsWrapper.append(countryPopContainer);
     
         }
}

const displayTenSpokenLanguages = () => {
    statisticsWrapper.textContent = "";
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
             countryContainer.setAttribute('class', 'statistics-countries__container');
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

             statisticsWrapper.append(countryContainer);
      
    }
}





displayPopulationBtn.addEventListener('click', () => displayTenLargestCountries());
displayLanguagesBtn.addEventListener('click', () => displayTenSpokenLanguages());

backToTopBtn.addEventListener('click', backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

displayTenLargestCountries();











