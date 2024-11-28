let Nome = prompt(`Informe seu Nome:`);
let Nota1 = parseFloat(prompt(`Informe sua Primeira nota de 0 a 10: `));
let Nota2 = parseFloat(prompt(`Informe sua Segunda nota de 0 a 10:`));
let Nota3 = parseFloat(prompt(`Informe sua Terceira nota de 0 a 10:`));
let Nota4 = parseFloat(prompt(`Informe sua Terceira nota de 0 a 10:`));
let media = (parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3) + parseFloat(Nota4))/4 ;

if (media >10 ){
    alert(`Media invalida`)
}else if( media  <5 ){
   alert(`${Nome}, você esta reprovado. ` )
} else if( media  <7 && media >=5  ){
    alert(`${Nome}, você esta de recuperação. ` )
 }else if( media >=7 ){
    alert(`Parabens ${Nome} você foi aprovado. ` )
 }
