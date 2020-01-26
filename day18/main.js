const countriesAPI = 'https://restcountries.eu/rest/v2/all'

// Exercises: Level 1
//1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

fetch(countriesAPI)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    for (const country in data) {
        let {name, capital, languages, population, area} = data[country];
        console.log(name, capital, languages, population, area);

    }
    
})

// Exercises: Level 2
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//1. Print out all the cat names in to catNames variable.

fetch(catsAPI)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    for(const cat in data) {
        let {name} = data[cat];
        let catNames = name;
        console.log(catNames);
    }
})

// Exercises: Level 3
//1. Read the cats api and find the average weight of cat in metric unit.

fetch(catsAPI)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    for(const cat in data) {
        let catWeight = data[cat].weight;
        // console.log(catWeight)
        newArr = [];
        newArr.push(parseInt(catWeight.metric.slice(0,1)));
        newArr.push(parseInt(catWeight.metric.slice(4)));
        console.log(newArr);
        let result = (newArr[0] + newArr[1]) / 2;
        let catName = data[cat].name;
        console.log(catName);
        console.log(`Average cat's weight in metric is ${result}`)
        

    }
})
//2. Read the countries api and find out the 10 largest countries

    fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
        let countries = data;     
        console.log(countries);
        countries.sort((a, b) => {
            if(a.area > b.area) return -1;
            if(a.area < b.area) return 1;
            return 0;
        })
        console.log(data.slice(0,10));   
    })

    
//3. Read the countries api and count total number of languages in the world used as officials.


fetch(countriesAPI)
.then((response) => response.json())
.then((data) => {
    let countries = data;
    console.log(countries);
    let langArr = [];
    for(const country of countries) {
        let {languages} = country;
        for(const language of languages) {
            let {name} = language;
            langArr.push(name);
    }

    
        
        /*let [setLang] = new Set(lang);
        for(const l in setLang) {
            console.log(setLang[l])
        }*/

    }
    console.log(langArr);
    let setOfLanguages = new Set(langArr);
    console.log(setOfLanguages);
    console.log(`There are a total of ${setOfLanguages.size} official languages in the world.`)

    
})

