const loadCountries =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>showCountries(data))
}
const showCountries =countries=>{
    console.log(countries);
    const allCountriesHTML = countries.map(country =>getCountryHTML(country))
    console.log(allCountriesHTML.join(' '));
    const container = document.getElementById('countries')
    container.innerHTML = allCountriesHTML.join(' ')

}
const getCountryHTML =country =>{
    return `
     <div class= "country">
       <h2> Name: ${country.name.common}</h2>
       <img src="${country.flags.png}" alt="">
     </div>
    
    `
}
loadCountries()