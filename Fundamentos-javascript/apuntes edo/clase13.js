var eduardo = {
    nombre: "Eduardo",
    edad: 33,
    peso: 74,
}
console.log(`al inicio del ano ${eduardo.nombre} pesa ${eduardo.peso} KG`)

//function aumentarDePeso (persona){
 //   return persona.peso +=200}
const incrementoPeso = 0.2;
const disminuirElPeso = 0.2;
const DIAS_DEL_ANO = 365;

const aumnetarDePeso =(persona) => persona.peso += incrementoPeso
const adelgazar =(persona) => persona.peso -= disminuirElPeso    
// for es para repetir un ciclo, en las llaves tiene que ir el codigo que vamos a repetir y en el parentesis
// va la formula que se divide en tres partes. parte inicial, parte condicion y parte qdel incremento
for(var i = 1; i <= DIAS_DEL_ANO; i++)
{
    var random = Math.random(0.25);
 
    if (random < 0.25)
    {
        aumnetarDePeso(eduardo);   
}
else if (random < 0.5){
    adelgazar(eduardo);
}    
}

console.log(`al final del ano ${eduardo.nombre} pesa ${eduardo.peso.toFixed(2)} KG`);
