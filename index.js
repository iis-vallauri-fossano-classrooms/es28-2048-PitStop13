"use strict"


const DIM = 4;
let punteggio = 0;
let divPunteggio = document.getElementById("punti");

window.onload=function(){
   const wrapper = document.getElementById("wrapper");
   for(let i = 0; i < DIM; i++)
   {
      for(let j = 0; j < DIM; j++)
      {
         let div = document.createElement("div");
         div.id = `div-${i}-${j}`;
         div.classList.add("cella");
         wrapper.appendChild(div);
      }
   }
   //Metto in 2 celle a caso due numeri 2

   //Numero 1 casuale
   let rigaCas1 = generaNumero(0, DIM);
   let colCas1 = generaNumero(0,DIM);
   let cell1 = document.getElementById(`div-${rigaCas1}-${colCas1}`);
   cell1.textContent = "2";

   // Numero 2 casuale, diverso dal primo
   let rigaCas2, colCas2;
   do {
      rigaCas2 = generaNumero(0, DIM);
      colCas2 = generaNumero(0, DIM);
   } while (rigaCas2 === rigaCas1 && colCas2 === colCas1);
   let cell2 = document.getElementById(`div-${rigaCas2}-${colCas2}`);
   cell2.textContent = "2";




}


function generaNumero(min, max){
   return Math.floor((max - min) * Math.random()) + min;  
}

window.addEventListener('keydown', gestisciPressioneTasto);

function gestisciPressioneTasto(event) {
   //Gestisco la logica del gioco 2048 creando quando clicco sul tasto un 2 in un a posizione a random
   //e lo visualizzo,gestisco il fatto se clicco su faccio un movimento di tutto su sommnado ecc
   //a ogni somma aggiorno i punti con la somma di tutti i numeri presenti a schermo
   //e se il numero è 2048 vinco e se non ci sono più movimenti disponibili perdo
   let tasto = event.keyCode;
   if(tasto == 37) // sinistra
   {
      tastoSx();
   }
   else if(tasto == 38) // su
   {
      tastoUp()
   }
   else if(tasto == 39) // destra
   {
      tastoDx()
   }
   else if(tasto == 40) // giù
   {
      tastoDw()
   }
}

function tastoSx(){

}

function tastoUp(){

}

function tastoDx(){

}

function tastoDw(){

}