// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle 
//bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - 
//abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile
// di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha
// cliccato su una cella che non era una bomba.

//const containerGrid = document.getElementById(`container_square`); //recupero il parent dei quadratini
const buttonPlay = document.getElementById(`btn_play`); //recupero il bottone play
const boxPlayed = document.getElementById(`box_play`);
let lock = false; //per bloccare il click dopo la bomba iniziallizo lock a false



buttonPlay.addEventListener(`click`, function () { //al click del bottone play visualizzo la griglia di gioco
    let lock = false;
    const listaNumeri = []; // al click genero numeri da 1 a 16 per le bombe
    for (let i = 0; i < 16; i++) {
        const numeroRandomico = generoNumeroRandomico(listaNumeri, 1, 101);
        listaNumeri.push(numeroRandomico);
        console.log(numeroRandomico)
    }
    console.log(listaNumeri)
    const containerGrid = document.createElement(`div`);   //creo la griglia dove vado ad inserire tutti i quadrati
    containerGrid.classList.add(`container_square`);   //aggiungo alla griglia la classe 
    boxPlayed.innerHTML = "";
    for (let i = 1; i < 101; i++) {
        const square = createSquare();
        //square.innerText = i;   // aggiungo il numero al quadratino
        containerGrid.append(square);   // aggiungo al parent il quadratino per 100 volte con il ciclo

        square.addEventListener(`click`, function () { // al click del quadratino 

            if (lock === true) { 

            } else {
                square.classList.add(`active`);    // aggiungo la classe active
                console.log(`Hai cliccato la casella: ${i}`);


                if (listaNumeri.includes(i)) {    //se la lista contiene un numero randomico uguale al numero randomico del quadratino(figlio del contenitore)
                    square.classList.add(`bomb`);
                    console.log(`Hai preso la bomba`)   //ha preso la bomba
                    alert(`Hai perso!`);
                    lock = true;
                }
            }

        });
    }
    boxPlayed.append(containerGrid); //aggiungo al parent TUTTA la griglia
    return boxPlayed.append(containerGrid);
});


// ........................FUNZIONI.......................
function createSquare() { //creo il quadratino e gli assegno le classi che voglio
    const newSquare = document.createElement(`div`);
    newSquare.classList.add(`square`);
    return newSquare;  //restituisco newSquare così lo posso assegnare a square
}

function generoNumeroRandomico(lista, min, max) {
    let nuovoNumero;
    let numeroPresente = false;
    while (numeroPresente == false) {
        nuovoNumero = Math.floor(Math.random() * (max - min) + min);
        if (!lista.includes(nuovoNumero)) {
            numeroPresente = true;
        }
    };
    return nuovoNumero;
};


