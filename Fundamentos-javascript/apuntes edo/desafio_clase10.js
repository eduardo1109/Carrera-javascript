var eduardo = {
    nombre:"eduardo",
    edad: 18,
    ingeniero: true,
    programador:true,
    trader_profesional : true,
}
    var javiera = {
        nombre:"javiera",
        edad: 15,
}
const MAYORIA_DE_EDAD = 18

function esMayordeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD  
}

function imprimirSiEsMayorDeEdad(persona) {
   
    if (esMayordeEdad(persona))
     {
        console.log(`hola soy ${persona.nombre},tengo ${persona.edad} y tengo mayoria de edad \n y soy: `);
    }
    if (persona.ingeniero)
    {
        console.log("ingeniero");
    }
    if (persona.programador)
    {
        console.log("programador");
    }
    
    if (persona.trader_profesional)
    {
        console.log("trader_profesional");
    }
else {
    console.log(`${persona.nombre}, es menor de edad`);
} 
}
imprimirSiEsMayorDeEdad(eduardo)