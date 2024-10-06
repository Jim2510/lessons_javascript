// ESERCIZIO 1: Dichiarare una variabile chiamata x e assegnarle il valore 5. Stampare il valore della variabile sulla console
// Nota: il nome delle variabili deve essere inizializzato con una lettera minuscola

//Dichiarare una costante chiamata "PI" e assegnarle il valore di 3.14. Stampare il valore della costante sulla console.

//Dichiarare una variabile chiamata "nome" e assegnarle il valore "Marco". Successivamente, modificare il valore della variabile in "Luca". Stampare il nuovo valore sulla console.

//Dichiarare una variabile chiamata "saluto" e assegnarle il valore "Ciao, come stai?". Stampare il valore della variabile sulla console.

//Dichiarare una variabile chiamata "vero" e assegnarle il valore true. Stampare il valore della variabile sulla console.

// ESERCIZIO 2: Crea le variabili necessarie per specificare nome, cognome, colore preferito e anno di nascita.
// Dichiara una variabile che concateni tutte le variabili precedenti e stampala in console

// ESERCIZIO 3: Crea 3 variabili x, y e area e utilizza il valore di x e y per calcolare l'area di un rettangolo.

// In Javascript il metodo if else permette di verificare se una condizione è vera o falsa e inserire all'interno di uno dei blocchi
// una porzione di codice eseguibile se la condizione viene rispettata

// ES:

let myVariable = 12;

if (typeof myVariable === "number") {
  console.log("x is a number");
} else if (typeof myVariable === "string") {
  console.log("x is a string");
} else {
  console.log("x is not a number or a string");
}

// NOTA: il metodo typeof restituisce il tipo di dato di una variabile

const type = typeof myVariable;
console.log(type); // Output: number

// ESERCIZIO 4: Scrivi un programma che controlli se un numero è positivo, negativo o zero e stampi il risultato in console.

// ESERCIZIO 5: Scrivi un programma che controlli se un numero è divisibile per 3 e per 5 e stampi il risultato in console.

// ESERCIZIO 6: Scrivi un programma che controlli se un numero è pari o dispari e stampi il risultato in console.
// HINT: per verificare se un numero è pari o dispari si può utilizzare la condizione % 2 === 0

// ARRAY: l'array è una struttura dati che permette di raggruppare un insieme di valori all'interno di una variabile alla quale si può accedere tramite un indice numerico
// Esempio:
const myArray = [1, 2, 3, 4, 5];
// Gli array in javascript permettono di salvare all'interno qualsiasi tipo di dato
const myArray2 = [1, "stringa", true, null, undefined, { name: "Mario" }];
// Gli array possono contenere all'interno altri array
const myArray3 = [1, 2, 3, [4, 5, 6], 7, 8, 9];
// Come già visto, è possibile accedere ad un elemento specifico all'interno di un array tramite l'indice
myArray[0]; // 1
myArray[1]; // 2
// Esistono dei metodi degli array che permettono di inserire, eliminare o modificare un elemento all'interno di un array
// push(): aggiunge un elemento all'interno dell'array
// pop(): rimuove l'ultimo elemento dell'array
// shift(): rimuove il primo elemento dell'array
// unshift(): aggiunge un elemento all'inizio dell'array
// splice(): rimuove o aggiunge un elemento all'interno dell'array
// slice(): restituisce una copia di una parte dell'array
// concat(): unisce due o più array
// join(): unisce tutti gli elementi di un array in una stringa
// reverse(): inverte l'ordine degli elementi di un array

myArray.push(6); // [1, 2, 3, 4, 5, 6]
myArray.pop(); // [1, 2, 3, 4, 5]
myArray.shift(); // [2, 3, 4, 5]
myArray.unshift(1); // [1, 2, 3, 4, 5]
myArray.splice(2, 1); // [1, 2, 4, 5] Il primo parametro indica l'indice a partire dal quale si vuole aggiungere o rimuovere un elemento, il secondo parametro indica il numero di elementi da rimuovere
myArray.slice(2, 4); // [3, 4] il primo parametro indica l'indice a partire dal quale si vuole prendere un elemento, il secondo parametro indica il numero di elementi da prendere
myArray.concat([6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
myArray.join(", "); // "1, 2, 3, 4, 5"
myArray.reverse(); // [5, 4, 3, 2, 1]

// ESERCIZIO 7: inizializza un array con 5 elementi e utilizza il metodo push() per aggiungere un nuovo elemento all'array

// ESERCIZIO 8: inizializza un array con 5 elementi e utilizza il metodo pop() per rimuovere l'ultimo elemento dell'array

// ESERCIZIO 9: inizializza un array con 5 elementi e utilizza il metodo shift() per rimuovere il primo elemento dell'array

// ESERCIZIO 10: inizializza un array con 5 elementi e utilizza il metodo unshift() per aggiungere un nuovo elemento all'inizio dell'array

// ESERCIZIO 11: inizializza un array con 5 elementi e utilizza il metodo splice() per rimuovere l'elemento in posizione 2 dell'array

// ESERCIZIO 12: inizializza un array con 5 elementi e utilizza il metodo slice() per prendere i primi 3 elementi dell'array

// ESERCIZIO 13: inizializza 2 array con 5 elementi e utilizza il metodo concat() per unire due array

// ESERCIZIO 14: inizializza un array con 5 elementi e utilizza il metodo join() per unire tutti gli elementi dell'array in una stringa

// ESERCIZIO 15: inizializza un array con 5 elementi e utilizza il metodo reverse() per invertire l'ordine degli elementi dell'array
