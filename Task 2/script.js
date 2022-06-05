/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let sum = 0;

document.querySelector("#btn__element").addEventListener("click", countFunction);
function countFunction (){

sum++;
console.log(sum)
document.querySelector("#btn__state").innerHTML = `${sum}`;

}