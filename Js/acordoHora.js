let horas = new Date().getHours();

 
if ( horas  >=0 && horas <=5){
    document.getElementById("h1").innerText +="Boa Noite";
}else if ( horas  >=6 && horas <=12) {
    document.getElementById("h1").innerText +="Bom Dia";

} else if(horas  >=13 && horas <=18 ){
     document.getElementById("h1").innerText +="Boa Tarde";
}else if(horas  >=19 && horas <=24 ){
    document.getElementById("h1").innerText +="Boa Noite";
}else{
    document.getElementById("h1").innerText +="Erro";
}