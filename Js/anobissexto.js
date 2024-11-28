const prompt = require("prompt-sync")();

let ano = parseInt(prompt("Informe o ano que quer saber se é bissexto: ")) ;
if (isBissexto(ano)) {
    console.log(ano + " é bissexto.");
} else {
    console.log(ano + " não é bissexto.");
}


function isBissexto(ano) {

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0 && ano % 100 !== 0)) {
    return true;
} else {
    return false;
}
}