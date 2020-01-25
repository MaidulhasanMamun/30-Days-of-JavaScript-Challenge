let totalCountries = document.querySelector('.total');
totalCountries.textContent = countries.length;
let countriesWrapper = document.querySelector('.countries-wrapper');
countriesWrapper.style.display = 'grid';
countriesWrapper.style.gridTemplateColumns = 'repeat(6, 1fr)';
countriesWrapper.style.gridGap = '1rem';



const displayCountries = () => {
    for (let i = 0; i < countries.length; i++) {
        let countryContainer = document.createElement('div');
        countryContainer.textContent = countries[i];
        console.log(countryContainer)
        countryContainer.padding = '7rem';
        countryContainer.style.height = '10rem';
        countryContainer.style.border = '1px solid lightgrey';
        countryContainer.style.display = 'flex';
        countryContainer.style.alignItems = 'center';
        countryContainer.style.justifyContent = 'center';
        countryContainer.align = 'center';
        countryContainer.style.textTransform = 'uppercase';
        countriesWrapper.append(countryContainer);
    }
}
displayCountries();