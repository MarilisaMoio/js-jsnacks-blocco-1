//Dato un array contenente 10 numeri, stampare in console il numero più grande.

//lista vuota
const numberList = [];

//lunghezza dell'array (così si può cambiare volendo)
const listLength = 10;

//aggiunta di numeri casuali all'array
for (let i = 0; i < listLength; i++){
    numberList.push(Math.floor(Math.random() * 100 + 1));
}

console.log(numberList, listLength);

//identificazione del numero più alto
let biggerNumber = 0;

for (let i = 0; i < numberList.length; i++){
    if (numberList[i] > biggerNumber){
        biggerNumber = numberList[i];
    }
}

console.log(biggerNumber);