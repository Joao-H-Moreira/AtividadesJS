document.querySelector('.btn').addEventListener("click", () => {
let ano = document.querySelector('#ano').value;
if (isBissexto(ano)) {
    document.getElementById("h1").innerText += `${ano} é bissexto.`;
} else {
    document.getElementById("h1").innerText += `${ano} não é bissexto.`;
}});


function isBissexto(ano) {

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0 && ano % 100 !== 0)) {
    return true;
} else {
    return false;
}
}