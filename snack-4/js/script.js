//Calcola la somma e la media dei primi 10 numeri.

//quanti numeri vogliamo
const numbersLength = 10;

//somma
let numberSum = 0;

for (let i = 1; i <= numbersLength; i++){
    numberSum += i;
}

//media
let numberAverage = numberSum / numbersLength;

//risultato
console.log(numberAverage, numbersLength);