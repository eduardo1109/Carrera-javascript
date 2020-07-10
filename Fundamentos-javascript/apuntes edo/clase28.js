
const API_URL = `https://swapi.dev/api/`
const PEOPLE_URL = `people/:id`
const opts = { crossDomain: true }
 
function obtenerPersonaje(id, callback){
    
    const url =`${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
    
    $
    .
    get(url, opts,callback)
    .fail(() => {
        console.log(`Sucedio un error. No se pudo obtener el personaje${id}`);
    })  
}

obtenerPersonaje(1, function (personaje) {
    console.log(`hola soy ${personaje.name}`)
    
    obtenerPersonaje(2, function (personaje){
        console.log(`hola soy ${personaje.name}`)
    
        obtenerPersonaje(3, function (personaje){
            console.log(`hola soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje) {
                console.log(`hola soy ${personaje.name}`)
 
                obtenerPersonaje(5, function (personaje){
                    console.log(`hola soy ${personaje.name}`)
                })
            })
        })
    })
})





// pudimos solucionar el error cuando se cae internet 
// y escribir que sucedio un error, al igual que se limpiara el codigo
