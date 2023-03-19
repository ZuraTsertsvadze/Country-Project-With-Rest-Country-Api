

import { requestFunction } from "./request.js"
import { flagBody, main } from "./flagPage.js"


const flagsCont = document.querySelector(".flags-cont")
const loadArray = document.querySelectorAll(".flag-load ")
const all = document.querySelector(".all")
const america = document.querySelector(".america ")
const europe = document.querySelector(".Europe")
const asia = document.querySelector(".Asia")
const oceania = document.querySelector(".oceania")
const africa = document.querySelector(".Africa")
const selectionElement = document.querySelector(".filter")
const selectionCont = document.querySelector(".select-cont")

const backBut = document.querySelector(".back-cont")


flagBody.style.display = "none"


const reseter = () => {

    for (const load of loadArray) {

        load.style.display = "block";

    }

    flagBody.style.display = "none"

    flagsCont.innerHTML = "";

}






window.addEventListener("load", () => {




    requestFunction("https://restcountries.com/v3.1/all");

    reseter();

})





africa.addEventListener("click", (e) => {


    reseter();


    requestFunction("https://restcountries.com/v3.1/region/africa");

})


all.addEventListener("click", (e) => {


    reseter();

    requestFunction("https://restcountries.com/v3.1/all");

})



europe.addEventListener("click", (e) => {


    reseter();

    requestFunction("https://restcountries.com/v3.1/region/europe");



})

asia.addEventListener("click", (e) => {


    reseter();
    requestFunction("https://restcountries.com/v3.1/region/asia");

})


oceania.addEventListener("click", (e) => {

    reseter();
    requestFunction("https://restcountries.com/v3.1/region/oceania");

})


america.addEventListener("click", (e) => {

    reseter();

    requestFunction("https://restcountries.com/v3.1/region/americas");




})



selectionElement.addEventListener("click",()=>{

    selectionCont.classList.toggle("block")

})



backBut.addEventListener("click", () => { flagBody.style.display = "none";

main.style.display = "block" })





export { loadArray, flagsCont };
