function cachipun(minimo,maximo)
 { var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}
var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionusuario
var opciondemaquina = cachupin (0,2);
var opciones = ["piedra", "papel", "tijera"];

opcionusuario = prompt("Que eliges?\nPiedra: 0\n papel: 1\n tijeras 2\n", 0);
alert("elegiste" + opciones[opcionusuario]);
alert("maquina eligió"+ opciones[opciondemaquina])
if(opcionusuario == piedra)
{
    if(opciondemaquina == piedra)
    {
        alert("empataste");
    }
    else if(opciondemaquina == papel)
    {
        alert("perdiste");
    }
    else if (opciondemaquina == tijera)
    alert("ganaste");    
}
if(opcionusuario == papel)
{
    if(opciondemaquina == piedra)
    {
        alert("ganaste");
    }
    else if(opciondemaquina == papel)
    {
        alert("empataste");
    }
    else if (opciondemaquina == tijera)
    alert("perdiste");    
}

if(opcionusuario == tijera)
{
  
    if(opciondemaquina == piedra)
    {
        alert("perdiste");
    }
    else if(opciondemaquina == papel)
    {
        alert("ganaste");
    }
    else if (opciondemaquina == tijera)
    alert("emopataste");    
}

    else
        alert("error")
    