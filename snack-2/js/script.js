//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let numberSum = 0;

for (let i = 1; i <= 5; i++){
    //input utente
    const userNumber = parseInt(prompt("Inserisci qui un numero:"));

    //somma
    numberSum += userNumber;
}

//output finale
console.log(numberSum);