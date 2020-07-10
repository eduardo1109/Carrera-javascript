var eduardo = {
    nombre:"eduardo",
    edad: 18,
    altura:1.78,
    cantidadDeLibros:250
}
    var javiera = {
        nombre:"javiera",
        edad: 15,
        altura: 1.70,
        cantidadDeLibros: 150
    }

var catalina = {
    nombre: "catalina",
    edad: 19,
    altura: 1.71,
    cantidadDeLibros: 310
}
//const esAlta = (persona) => {
  //  return persona.altura > 1.71}

 //const esAlta = persona => persona.altura > 1.70 
const esAlta = ({altura}) => altura > 1.70 
 var personas = [eduardo, javiera, catalina]

var personasAltas = personas.filter(esAlta); 
//var personasAltas = personas.filter(function (persona)
//{    return persona.altura > 1.70 })

console.log(personasAltas)

const esBaja = ({altura}) => altura < 1.71
var personaBajas = personas.filter(esBaja);

console.log(esBaja);

const pasarAlturaACms = persona => ({
    //personas.altura = persona.altura * 100;
    //personas.altura *= 100
//    return personas   
        ... persona,
        altura: persona.altura * 100
})

     // return {
       //   ... persona,
         // altura: persona.altura * 100
      //}}
      
// esta funcion de arriba es un nuevo objeto que no tiene que ver con el array
// anterior con los ... deconstruimos la funcion personas y nos traemos solo el 
//parametro altura, pero tambine la dejaremos en verde porque un bloque mas arriba
//dejaremos la sintaxis mas pura, debe siempre cerrar con llaves y despues parentesis
var personasCms = personas.map (pasarAlturaACms);
console.log(personasCms);

const reducer = (acum, personas) => acum + personas.cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)
    
//var acum = 0;
//for (var i = 0; i < personas.length; i++){
  //  acum = acum + personas[i].cantidadDeLibros}
console.log(`En total tienen ${totalDeLibros} libros`);