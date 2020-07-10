//quiero crear un nuevo objeto, con atributos y que salude
// para crear un nueva persona lo hacemos con New que se ocupa s
//para crear nuevos objetos, dado un protoipo.en este caso del ejempo
//es personas

function Persona(nombre, apellido,altura) {
    this.nombre = nombre, // this.nombre hace referencia al atrbuto de la nueva persona. en cambio nombre es el parametro que pasamos en la clase o persona 
    this.apellido = apellido,
    this.altura = altura 
}
const es_Alto = 1.78
const soyAlto = Persona  (
    Persona.altura >= es_Alto)

Persona.prototype.saludar = function() {
    
        console.log(`hola soy ${this.nombre} ${this.apellido} `)
    }
Persona.prototype.soyAlto = function (){
    if (this.altura >= 1.78) {
        console.log(`soy alto`)
    
    }
    else if (this.altura <=1.75){
        console.log(`soy bajo`)
    }
    
}   
var eduardo = new Persona ("Eduardo", "Carrasco", 1.78);
var catalina = new Persona ("Catalina", "Lorca", 1.73);
var javiera = new Persona ("javiera", "Carrasco", 1.79);

eduardo.saludar();
eduardo.soyAlto();
javiera.saludar();
javiera.soyAlto();
catalina.saludar();
catalina.soyAlto();
