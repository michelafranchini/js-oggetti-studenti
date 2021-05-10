// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.


// creazione oggetto studente
var studente = {
    nome: "Michela", 
    cognome: "Franchini", 
    eta: 29
}

console.log(studente);

// stampare con ciclo for-in tutte le proprietà dell'oggetto
for (var key in studente) {
    console.log(studente["nome"], studente["cognome"], studente["eta"]);
};

// creare array oggetti studenti e stampare per ognuno nome e cognome
var studenti = [
    {
        nome: "Dario", 
        cognome: "Lampa", 
        eta: 28
    }, 

    {
        nome: "Lino",
        cognome: "Sasso", 
        eta: 18
    },

    {
        nome: "Guido", 
        cognome: "Lamattina", 
        eta: 30
    }
]; 

for (var i = 0; i < studenti.length; i++) {

    console.log(studenti[i].cognome, studenti[i].nome);
}; 

// far inserire all'utente con 3 prompt un nuovo oggetto studente (in ordine nome, cognome e età)

var nuovoStudente = {
    nome: prompt("Inserisci il tuo nome"), 
    cognome: prompt("Inserisci il tuo cognome"), 
    eta: parseInt(prompt("Inserisci l'età")) 
}

console.log(nuovoStudente);

// aggiungere il nuovo studente all'array
studenti.push(nuovoStudente); 
console.log(studenti);