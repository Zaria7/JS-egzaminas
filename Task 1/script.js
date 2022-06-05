/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiama
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const forma = document.querySelector("form");
const output = document.querySelector("#output")

forma.addEventListener("submit", convertFunction);
function convertFunction (event){
    event.preventDefault();
    output.textContent = "";
    const input = document.querySelector("#search").value;
    console.log (input);
    
    const lb = input * 2.2046;
    const gramm = input / 0.001;
    const oz = input *35.327;


    console.log (lb);
    console.log(gramm);
    console.log(oz);

const messageLb = document.createElement("p")
messageLb.textContent =`${input} kg = ${lb} svarų`
output.append(messageLb)


const messageGr = document.createElement("p")
messageGr.textContent =`${input} kg = ${gramm} gramų`
output.append(messageGr)

const messageOz = document.createElement("p")
messageOz.textContent =`${input} kg = ${oz} uncijų`
output.append(messageOz)



output.style.backgroundColor = "white" 
output.style.maxWidth = "80%"
output.style.margin = "50px auto";
output.style.fontSize = "30px";
output.style.padding = "10px";

messageGr.style.padding = "10px 0px 10px 0px";


}

convertFunction();


