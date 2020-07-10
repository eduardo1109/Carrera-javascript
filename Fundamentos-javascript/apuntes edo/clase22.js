

class Persona{
    constructor (nombre, apellido, altura) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.altura = altura     
}
saludar(fn){
    var {nombre, apellido} = this 
    console.log(`hola soy ${nombre} ${apellido} `) 
    if (fn){
        fn(nombre, apellido)
    }
}
soyAlto(){
    return this.altura >= 1.78
}
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)    
    }
        saludar(fn){
            // var nombre = this.nombre
            // var apellido = this.apellido
            //la variable la estamos accediendo desde el mismo atributo de un objeto
            // entonces podemos juntar nombre y apellido porque estan haciendo lo mismo
            var {nombre, apellido} = this
            console.log(`Hola me llamo ${nombre}, ${apellido} y soy Desarrollador`)
            if (fn){
                fn(nombre, apellido, true)
         }
     }                
} 
function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
if (esDev){
    console.log (`a mirá, no sabie aque eras Desarrollador`)
}
} 

var eduardo = new Desarrollador ("Eduardo", "Carrasco", 1.78);
var catalina = new Persona ("Catalina", "Lorca", 1.73);
var javiera = new Persona ("javiera", "Carrasco", 1.79);
eduardo.saludar()
catalina.saludar(responderSaludo)
javiera.saludar(responderSaludo)