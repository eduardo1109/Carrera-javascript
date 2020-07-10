//este ejemplo muestra como se hacia antiguamente en JSON, la herencia
//de prototipos. arriba de la function0personas que es la padre
//se coloca la funcion hedeable, en donde se ponen parametros de hijo y padre
//luego se llama a una funcion vacia (fn) con el fin de que todo lo
//lo que tenga que ver con el objeto hijo, se cree en un nuevo objeto 
//(new fn).
//se declara el nuevo objeto y el constructor

function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
    
}


function Persona(nombre, apellido, altura) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.altura = altura 
}

Persona.prototype.saludar = function() {
    
    console.log(`hola soy ${this.nombre} ${this.apellido} `) 
}

Persona.prototype.soyAlto = function (){
    return this.altura >= 1.78
      
} 
function Desarrollador(nombre, apellido){
this.nombre = nombre,
this.apellido = apellido
}
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}, ${this.apellido} y soy Desarrollador`)
}
//var eduardo = new Persona ("Eduardo", "Carrasco", 1.78);
//var catalina = new Persona ("Catalina", "Lorca", 1.73);
//var javiera = new Persona ("javiera", "Carrasco", 1.79);
