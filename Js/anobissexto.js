document.querySelector('.btn').addEventListener("click", () => {
let ano = document.querySelector('#ano').value;
if (isBissexto(ano)) {
    alert(ano + " é bissexto.");
} else {
    alert(ano + " não é bissexto.");
}});


function isBissexto(ano) {

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0 && ano % 100 !== 0)) {
    return true;
} else {
    return false;
}
}