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
const comeMucho = () => Math.random () < 0.3
const hacedeporte = () => Math.random () < 0.4
const META = eduardo.peso - 3; 
var dias = 0;

while (eduardo.peso > META) {
    if (comeMucho()) {
        aumnetarDePeso(eduardo)
    }
    if (hacedeporte()){
        adelgazar(eduardo)
    }
    dias += 1;
}
console.log(`pasaron ${dias} dias hasta que ${eduardo.nombre} adelgazó 3 KG`)
