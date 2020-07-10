

class Persona{
    constructor (nombre, apellido, altura) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.altura = altura     
}
saludar(){
    console.log(`hola soy ${this.nombre} ${this.apellido} `) 

}
soyAlto(){
    return this.altura >= 1.78
}
}

class Desarrollador extends Persona {
    constructor(nombre, apellido){
    super(nombre, apellido, altura)    
    }
        saludar(){
            console.log(`Hola me llamo ${this.nombre}, ${this.apellido} y soy Desarrollador`)
        }                
} 
 
//var eduardo = new Persona ("Eduardo", "Carrasco", 1.78);
//var catalina = new Persona ("Catalina", "Lorca", 1.73);
//var javiera = new Persona ("javiera", "Carrasco", 1.79);
