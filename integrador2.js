nom=prompt("Esta es la trivia de primavera, escriba por favor su nombre");

preg1=prompt("¿Cómo se llama al primer día de la Primavera?\nA: Primer Día de la Primavera\nB: Equinoccio de Primavera\nC: Equinoccio de invierno");

if (preg1=="B"){
    preg1=25
}
else{
    preg1=0 
}

preg2=prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad inimterrumpida\nC: 6 meses de alternancia de luz y oscuridad");

if (preg2=="B"){
    preg2=25
}
else{
    preg2=0 
}
total=preg1+preg2;
if (total>=25){
    document.write(nom," tu puntaje es ",total," y sabes sobre la primavera")
}
else{
    document.write(nom,"tu puntaje es ",total, " y te falta")
}