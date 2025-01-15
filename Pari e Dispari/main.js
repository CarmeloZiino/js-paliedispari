// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Domande da farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?


// 1. Creo una funzione che chiede all'utente di scegliere Pari o Dispari

function pariEDispari () {

let sceltaUtente = prompt ("Scegli Pari o Dispari:" , "Pari").toLowerCase(); //2. Prompt per chiedere all'utente di scegliere fra Pari e Dispari
if (sceltaUtente != "pari" && sceltaUtente != "dispari"){ //3. Istruzioni nel caso non venisse inserito la parola "pari" o "dispari"
    console.log(`Non fare il furbetto! Ricarica la pagina e scegli "Pari" o "Dispari"!`)
    return;
}

let numeroUtente = prompt ("Scegli un numero da 1 a 5:"); //4. Prompt per chiedere all'utente di scegliere un numero fra 1 e 5
if (numeroUtente > 5 || numeroUtente < 1){ //5. Istruzioni nel caso non seguissero le indicazioni del Prompt
    console.log(`Ancora! Se non ti attieni alle istruzioni, inutile giocare. Ricarica la pagina!`);
    return;
}



}

pariEDispari();
