let conta = parseFloat(prompt(`Informe o valor da conta:`));
let avaliacao = Number(prompt(`Avalie o atendimenro Bom"1", Otimo"2"ou excelente"3"  `));

switch (avaliacao) {
case 1 :
let gorjetab = (conta * 10)/100 ;
let totalb = conta + gorjetab;
document.getElementById("h1").innerText += `Você avaliou o atendimento como Bom o valor da gorjeta foi de R$${gorjetab} e o valor total foi de R$${totalb}`;
break;
case 2:
let gorjetao = (conta * 15)/100 ;
let totalo = conta + gorjetao;
document.getElementById("h1").innerText += `Você avaliou o atendimento como Otimo o valor da gorjeta foi de R$${gorjetao} e o valor total foi de R$${totalo}`;
break;
case 3:
let gorjetae = (conta * 120)/100 ;
let totale = conta + gorjetae;
document.getElementById("h1").innerText += `Você avaliou o atendimento como Excelente o valor da gorjeta foi de R$${gorjetae} e o valor total foi de R$${totale}`;
break;
default:
document.getElementById("h1").innerText += "Opção inválida"
}