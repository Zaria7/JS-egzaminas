/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.querySelector('#output');

fetch(ENDPOINT)
.then((response) => response.json())
.then((data) => {

data.forEach(element =>{
console.log(element.brand, element.models)

const card = document.createElement ("div");
card.textContent = `${element.brand}: ${element.models}`
card.style.margin = "50px";
card.style.boxShadow = "0 2px 8px lightgray";
card.style.padding = "10px";
card.style.color = "gray";
card.style.fontSize = "15px"


output.append(card);




})
})

/*
    let result = "<h2>Cars</h2>";
      console.log(result)
    data.forEach(function(model){
        result +=`
        <ul>
         <li> Model: ${model} </li>
        </ul>
        
        `;
      
    })
output.innerHTML = result;


//    output.textContent = `sudas kaip reta ${}`
});

 //       console.log(data.brand)
  //      })

 

 
   



     fetch(ENDPOINT)
     .then(data => data.json())
     .then(data => displayCars(data))
 
 const displayCars = dataset => {
     dataset/forEach(brand => {
         createCard(brand);
     
     });
      } 
*/