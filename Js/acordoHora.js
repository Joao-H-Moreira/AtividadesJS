let nome = prompt("Informe seu nome: ")
let horas = new Date().getHours();

 
if ( horas  >=0 && horas <=5){
    alert(`Olá ${nome}, Boa noite `)
}else if ( horas  >=6 && horas <=12) {
    alert(`Olá ${nome}, Bom dia `)
} else if(horas  >=13 && horas <=18 ){
    alert(`Olá ${nome}, Boa tarde `)
}else if(horas  >=19 && horas <=24 ){
    alert(`Olá ${nome}, Boa noite `)
}else{
    alert("Erro")
}