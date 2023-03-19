
import { requestFunction } from "./request.js";

const main = document.querySelector(".main");
const flagBody = document.querySelector(".flag-body");
const countryFlagName = document.querySelector(".country-flag-title");
const countryFlag = document.querySelector(".country-flag");
const nativeCountryName = document.querySelector(".country-name")

const countryPopulation = document.querySelector(".population-country");
const countryRegion = document.querySelector(".country-reg");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".Capital");
const countryLang = document.querySelector(".country-lang")
const domain = document.querySelector(".domain")
const currencies = document.querySelector(".currencies")
const borderInfoCont = document.querySelector(".border-info-cont")








const flagPageMaker = (searchCountry) => {

   const countryName = searchCountry

  
   const country = requestFunction(`https://restcountries.com/v3.1/name/${countryName}`);

   countryLang.innerHTML="";
   borderInfoCont.innerHTML="";

   main.style.display = "none"
   flagBody.style.display = "block"

   countryFlagName.innerHTML = `${countryName}`;


   country.then((sad) => {

//shame on me XD
      countryName==="China"?sad[0]=sad[2]:sad[0];

      nativeCountryName.innerHTML=`${Object.values(sad[0].name.nativeName)[0].common}`


      countryFlag.src = `${sad[0].flags.png}`

      countryPopulation.innerHTML = ` ${sad[0].population.toLocaleString()}`
      countryRegion.innerHTML = ` ${sad[0].region}`
      capital.innerHTML = ` ${sad[0].capital[0]}`
      subRegion.innerHTML = ` ${sad[0].subregion}`
      //countryName.innerHTML="drgdf"

      for (const lang of Object.values(sad[0].languages)) {

         countryLang.innerHTML +=` , ${lang}`

      }

      domain.innerHTML = sad[0].tld[0]
      currencies.innerHTML = Object.values(sad[0].currencies)[0].name;

      if (sad[0].borders) {


         for (const neibhour of sad[0].borders) {

            const code = requestFunction(`https://restcountries.com/v3.1/alpha/${neibhour}`);

            code.then((el) => {

               borderInfoCont.innerHTML += ` <li class="border-country">${el[0].name.common}</li>`


               const borderCountryArray = document.querySelectorAll(".border-country")


               for (const borderCountry of borderCountryArray) {


                  borderCountry.addEventListener("click", () => {

                     const borderCountryName = borderCountry.textContent;



                     flagPageMaker(borderCountryName)






                  })


               }



            })




         }




      } else {

         borderInfoCont.innerHTML += `<li class="border-country">no borders</li>`





      }


   })










}



export { flagPageMaker,main,flagBody };
