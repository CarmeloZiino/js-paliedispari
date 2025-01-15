// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


// 1. Creo un Prompt che chiede all'utente di inserire 

let word = prompt ("Scrivi qui una parola" , "anna");
console.log("La parola scelta è:" , word);



// 2. Creo una funzione che analizza la parola

function analyzeWord (word) {

    let wordReverse =  word.toUpperCase().split("").reverse().join(""); // 3. Con questa Variabile analizzo la parola e la riscrivo al contrario


    if (wordReverse == word.toUpperCase()){ // 4. se la parola scritta al contario è uguale alla parola data in precedenza è palindroma
        console.log (`Wow! La parola ${word} è palindroma!` ); //5. con .toUpperCase risolvo il bug che non permette di riconoscere le maiuscole, considerando non palindroma una parola con una lettera maiuscola
    } else {console.log (`Oh no! La parola ${word} non è palindroma`)}

    return wordReverse
}

console.log ( `Se scritta al contrario la parola ${word} diventa:` , analyzeWord(word) );
