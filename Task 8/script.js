/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


class Calculator {
    constructor(number1, number2) {
        this.number1=number1;
        this.number2=number2;
    }
getSum = function () {
    return this.number1+this.number2;
};
getSubstraction = function () {
    return this.number1-this.number2;
};

getMultiplication = function () {
    return this.number1*this.number2;
};

getDivision = function () {
    return this.number1/this.number2;
}
}

const calculations = new Calculator (100,4);
console.log(calculations.getSum());
console.log(calculations.getSubstraction());
console.log(calculations.getMultiplication());
console.log(calculations.getDivision());
