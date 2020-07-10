var eduardo = {
    nombre : "eduardo",
    apellido : "carrasco",
    edad : 33
  
  }
  
  function imprimirNombreEnMayuscula({nombre}) {
    
      console.log(nombre.toUpperCase());
  }
  
   imprimirNombreEnMayuscula(eduardo)

   function cumpleanos(persona) {
       return{
           ...persona,
           edad : persona.edad +1
       }
   }