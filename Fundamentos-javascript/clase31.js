
const API_URL = `https://swapi.dev/api/`
const PEOPLE_URL = `people/:id`
const opts = { crossDomain: true }
 
function obtenerPersonaje(id){
    return new Promise(( resolve, reject) => {
        const url =`${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
        $
        .
        get(url, opts,function(data) {
            resolve(data)

        })
        .fail(() => reject (id))
       
    })
    
}

function onError(id) {
    console.log( `Sucedio un error al obtener el personaje ${id}`)
}
var ids = [1, 2, 3, 4, 5, 6, 7]

//var promesas = ids.map(function (id){
  //  return obtenerPersonaje(id)
//})
// con esto nos ahorramos los callback y el codigo queda muchio mas ordenado

var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)