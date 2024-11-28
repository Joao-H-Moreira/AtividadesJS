const prompt = require("prompt-sync")();

let numeroSecreto = Math.floor(Math.random() * 10);
let chute = prompt(`Digite um numero de 1 a 10`);
if (chute == numeroSecreto){
alert(`Você acertou`);
} else{
alert(`Puxa voce errou o numero era ${numeroSecreto}`);
};