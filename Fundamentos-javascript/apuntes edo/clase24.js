
//callbacks
//primero debemos hacer de una constante las url de donde haremos 
//Request
const API_URL = `https://swapi.dev/api/`
const PEOPLE_URL = `people/:id` //colocamos estos nombres porque el :id se reemplaza por el
//numero que identifica al personaje de la API. Para que el reemplazo se ejecute se debe ocupar 
//".replace" que es norma general de los string. Se ejecuta commo NOMBRE DE LA FUNCION.REPLACE('string que se va a reemplazar, el string o numero que nos traeremos de la API ')

//para poder hacer un request con jquery, tenemos que llamar al metodo
//$.get() esto nos permite hacer un request y acepta varios parametros

//$.get(`${API_URL} ${PEOPLE_URL.replace(`:id`, 1)}`, {crossDomain: true})
// todo lo de arriba es el primer parametro de $.get(), el segundo es crossDomain: true
// este parametro es para indicar que el request no va para la pagina si no que a una externa 
// los parametros se pueden separar mejor
// replace es el metodo  que usan todos los strig, en este caso del ejemplo el uno representa a
//luke

const characterUrl = `${API_URL}${PEOPLE_URL.replace(`:id`, 4)}`
const opts = { crossDomain: true } //crosDomain es quien le ice a la api que va a una pag externa
//tambien puede ser mas general, es que como se menciona en verde abajo

const onPeopleResponse = function(persona){
    console.log(`hola soy ${persona.name}`)
}
$.get(characterUrl, opts, onPeopleResponse)
console.log("hola soy edo")
//$.get(lukeUrl, opts, function(luke){
  //  console.log(`hola soy ${luke.name}`)
//})