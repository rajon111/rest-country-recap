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
/*===========original=========
const getCountryHTML =country =>{
    return `
     <div class= "country">
       <h2> Name: ${country.name.common}</h2>
       <img src="${country.flags.png}" alt="">
     </div>
    
    `
}
========================*/

/*===========option1=========
const getCountryHTML =country =>{
    const{name,flags} = country
    return `
     <div class= "country">
       <h2> Name: ${name.common}</h2>
       <img src="${flags.png}" alt="">
     </div>
    
    `
}
========================*/

// /*===========option1=========
const getCountryHTML =country =>{
    const{name,flags} = country
    return `
     <div class= "country">
       <h2> Name: ${name.common}</h2>
       <img src="${flags.png}" alt="">
     </div>
    
    `
}
// ========================*/

loadCountries()