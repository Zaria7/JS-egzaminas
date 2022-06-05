/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau). //YRA

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke //YRA
2. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje) // EILUTEJE, O NE KORTELEJE, BET TAIP DAUG GRAŽIAU, BE TO NEMOKU KORTELEJE :)
3. Žinutė "Press "Show Users" button to see users" turi išnykti; //PADARYTA
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių; //MINIMALUS PADARYTAS lineHeight ir spalva

-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


const button = document.querySelector("#btn");
const showUsersBlock = document.querySelector("#output");
const message = document.querySelector("#message");



button.addEventListener("click", showFunction);

function showFunction(event) {
    event.preventDefault();
    

    fetch('https://api.github.com/users')
    .then((response) =>response.json())
    .then((data) =>{
        data.forEach(element => {
            console.log(element.login, element.avatar_url );
                    
        const paragraph = document.createElement ("p");
        paragraph.textContent = `Useris: ${element.login}, ${element.avatar_url}  `
            showUsersBlock.append(paragraph);
        paragraph.style.color = "green";
        paragraph.style.lineHeight = "2.5";
        paragraph.style.padding = "20px";
        paragraph.style.boxShadow = "0 2px 2px lightgray";
       
        });
})
 
    message.style.display = "none";
}

