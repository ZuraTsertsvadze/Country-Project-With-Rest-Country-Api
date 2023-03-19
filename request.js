

import { ara, flagBody } from "./flagPage.js";
import { loadArray, flagsCont } from "./script.js";
import { search } from "./search.js";

const searchInput = document.querySelector(".input")




const requestFunction = (typeRequest) => {


    const request = fetch(`${typeRequest}`);




    const responsFulfill = request.then((respons) => { return respons.json() })


    const flagData = responsFulfill.then((data) => {



        for (const load of loadArray) {

            load.style.display = "none";

        }


        for (const country of data) {

            flagsCont.innerHTML += `
        
                <div class="flag" >

                <div class="flag-img">

                <img src="${country.flags.png}">
                
                </div>
                
                <div class="other-info">
        
                  <div class="countryName">${country.name.common}</div>
        
                  <div class="population">
                  <span class="bold">Population:</span> 
                  ${country.population.toLocaleString()}
                  </div>
        
                 <div class="region">
                 <span class="bold">Region:</span> 
                 ${country.region}
                 </div>
        
                 <div class="capital"> 
                 <span class="bold">Capital:</span>
                 ${country.capital?.[0]} 
                 </div>
        
                 </div>
                
                
                </div>
        
                   `


        }



        const flagArray = document.querySelectorAll(".flag")


        for (const flag of flagArray) {


            flag.addEventListener("click", () => { ara(flag.lastElementChild.firstElementChild.textContent) })


        }

        const flagCardNameElement = document.querySelectorAll(".countryName")


       
        search(flagCardNameElement,searchInput);



        return data

    });

    return flagData





}








export { requestFunction, flagBody };


