// globale variabelen
let dot;
let amountClicks = 0;
let scoreBoard = document.querySelector('#score-span');
let moveInterval;
let startBtn = document.querySelector('#start');

// maak een DOM element met de klasse hideandseek en voeg die toe aan body
const makeDot = () => {
    // element maken
    dot = document.createElement('div');

    // class toewijzen (hideandseek)
    dot.className = 'hideandseek'

    // toevoegen aan een parent element
    document.body.appendChild(dot);
}
// verplaats het DOM element naar een willekeurige positie tussen 0 en breedte scherm
const moveDot = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight

    // willekeurig positioneren
    const randomXPosition = Math.abs(Math.floor(Math.random() * windowWidth) - dot.offsetWidth); 
    // positieve waarde tussen 0 en breedte van het scherm min breedte van het element
    const randomYPosition = Math.abs(Math.floor(Math.random() * windowHeight) - dot.offsetHeight);

    dot.style.transform = `translate(${randomXPosition}px, ${randomYPosition}px)`;
}
// verander de breedte en hoogte van het balletje naar een willekeurige grootte
const resizeDot = () => {
    // generate size of the dot
    let size = Math.floor(Math.random() * 100);
    if(size < 20) size = 20;
    
    // set the width & height of the dot
    dot.style.width = `${ size }px`;
    dot.style.height = `${ size }px`;
}
// bereken de score bij een klik
const clickDot = (event) =>{
    amountClicks++; // eentje bijtellen
    resizeDot();
    updateScore();
}
// update score board
const updateScore = () => {
    scoreBoard.innerHTML = amountClicks;
}
// stop het spel door het interval te resetten
const stopGame = () => {
    clearInterval(moveInterval); 
    document.body.innerHTML = '<p style="font-size: 100px">GAME OVER</p>';
    document.body.style.backgroundColor = 'red';
}
// start het spel en de klok
const startGame = () => {
    // creeer een rond div element
    makeDot();

    // verplaats het naar een willekeurige positie
    moveDot(); // onmiddelijk
    moveInterval = setInterval(moveDot, 3000); // na 1 seconde en elke seconde

    // bij een klik op de knop dan...
    dot.addEventListener('click', clickDot);

    setTimeout(stopGame, 20000); // stoppen na 20 seconden
}

startBtn.addEventListener('click', startGame);