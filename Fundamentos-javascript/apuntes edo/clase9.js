var eduardo = {
    nombre : "eduardo",
    apellido : "carrasco",
    edad : 33, 
    ingeniero : false,
    programador : true,
    futbolista : false,
    dj : false,
}
    function imprimirProfesiones (persona)
     {
     console.log(`$ {persona.nombre.apellido} es: `)
     if (persona.ingeniero)
     {
         console.log("ingeniero");
     }
     else{
         console.log("no es ingeniero ")
     }   
     if (persona.dj)
     {
         console.log("dj");
     }   
     if (persona.programador)
     {
         console.log("programador");
     }
     if (persona.futbolista)
     {
         console.log("futbolista");
     }
    }

    imprimirProfesiones(eduardo)
