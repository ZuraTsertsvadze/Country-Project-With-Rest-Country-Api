"use strict"

const flagsCont = document.querySelector(".flags-cont")
const searchBtn=document.querySelector( ".search-btn")




const request = fetch( "https://restcountries.com/v3.1/name/peru");


const responsFulfill=request.then((respons)=>{return respons.json()})



searchBtn.addEventListener("click",  (e) => {
    


    e.preventDefault()

    





responsFulfill.then((data)=>{


        flagsCont.innerHTML=`
        
        <div class="flag">
        <div class="flag-img">
        
        </div>
        
        <div class="other-info">
          <div></div>  
        
        </div>
        
        
        </div>
           `

 const flag=document.querySelector(".flag")

 const flagImg=document.querySelector(".flag-img")

 flagImg.style.backgroundImage=`url("${data[0].flags.png}")`

        console.log(data)
    
        return data
    
    });
    






})


