/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  number();
  simbol();
};

function number() {
  let excesarandom = numeros[Math.floor(Math.random() * 9)];
  document.getElementById("number").innerHTML = excesarandom;
}
function simbol() {
  let simbolrandom = simbolos[Math.floor(Math.random() * 3)];
  document.getElementById("simbol").classList.add(simbolrandom);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let simbolos = ["heart", "spade", "club", "diamond"];
