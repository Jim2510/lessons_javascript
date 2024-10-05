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
