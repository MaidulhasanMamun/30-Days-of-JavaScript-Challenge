const catsWrapper = document.querySelector('.wrapper');
const catsAPI = 'https://api.thecatapi.com/v1/breeds';


const displayCats = async () => {
    try {
        const response = await fetch(catsAPI);
        const catsData = await response.json();
        console.log(catsData)
        for(const cat in catsData) {
            console.log(cat)
            let cats = catsData[cat]
            let {name, origin, temperament, description, child_friendly, dog_friendly, intelligence, wikipedia_url} = cats;
            console.log(name);
            let catContainer = document.createElement('div');
            let catName = document.createElement('p');
            let catOrigin = document.createElement('p');
            let catTemperament = document.createElement('p');
            let catDescription = document.createElement('p');
            let ratingsContainer = document.createElement('div');
            let childFriendly = document.createElement('p');
            let dogFriendly = document.createElement('p');
            let catIntelligence = document.createElement('p');
            let wikipediaURL = document.createElement('a');
    
            catContainer.setAttribute('class', 'cat')
            catName.textContent = `${name}`;
            catName.style.textTransform = 'uppercase';
            catOrigin.textContent = `Origin: ${origin}`;
            catTemperament.textContent = `Temperament: ${temperament}`;
            catDescription.textContent = `Description: ${description}`;

            ratingsContainer.setAttribute('class', 'ratings-container');
            childFriendly.textContent = `Child Friendly: ${child_friendly}`;
            dogFriendly.textContent = `Dog Friendly: ${dog_friendly}`;
            catIntelligence.textContent = `Cat Intelligence: ${intelligence}`
            wikipediaURL.src = `${wikipedia_url}`;
            ratingsContainer.append(childFriendly, dogFriendly);
            catContainer.append(catName, catOrigin, catTemperament, catDescription, ratingsContainer, catIntelligence, wikipediaURL);
            catsWrapper.append(catContainer);
            
        }
    } catch(err) {
        console.log(err)

    }
 

}


displayCats();

