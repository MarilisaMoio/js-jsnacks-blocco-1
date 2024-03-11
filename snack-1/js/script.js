//Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

//array container
const numbersArray = [];


for (let i = 1; i <= 5; i++){
    //input utente
    const userNumber = parseInt(prompt("Inserisci qui un numero:"));

    //controllo dell'array ed eventuale push
    if (numbersArray.includes(userNumber) === false){
        numbersArray.push(userNumber);
    }
}

//output finale
console.log(numbersArray);