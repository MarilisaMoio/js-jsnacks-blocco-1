//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

const oddNumbers = []

for (let i = 1; i <= 6; i++){
    //input utente
    const userNumber = parseInt(prompt("Inserisci qui un numero:"));

    //controllo delle condizioni ed eventuale push
    if (userNumber % 2 !== 0){
        oddNumbers.push(userNumber);
    }
}

//output finale
console.log(oddNumbers)



