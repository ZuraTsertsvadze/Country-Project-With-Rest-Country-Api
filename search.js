



function search(flagCardNameElement,searchInput) {

    searchInput.addEventListener("input", (e) => {



        for (const name of flagCardNameElement) {

            console.log([...name.textContent.toLocaleLowerCase()])

            for (const x of [...e.target.value.toLocaleLowerCase()]) {


                if (!(name.textContent.toLocaleLowerCase().includes(x))) {



                    name.closest(".flag").style.display = "none";


                } else {

                    name.closest(".flag").style.display = "block";


                }

            }


            if (e.target.value === "") {


                name.closest(".flag").style.display = "block";



            }




        }











    })
}


export{search};