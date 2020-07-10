
const API_URL = `https://swapi.dev/api/`
const PEOPLE_URL = `people/:id`
const opts = { crossDomain: true }

const onPeopleResponse = function(persona){
  console.log(`hola soy ${persona.name} y mido ${persona.mass}`)
}
function obtenerPersonaje(id){
    const url =`${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
    $.get(url, opts,onPeopleResponse)
}
for(var i=1; i<= 20; i++){
    obtenerPersonaje(i)
}

// en ese ejemplo vemos que podemos enviar el request, pero en consol
//no aparecen con el mismo orden