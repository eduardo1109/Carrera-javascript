var marca = ["mercedes_benz","audi", "BWM","volvo", "tesla", "ferrari"];
var modelo = ["clase_G","c_63", "r8", "spider", "maranello", "model_3"]
var year = [2020,1999,2019,2018,2017,2021]  

function auto(marca, modelo, year) {
  this.marca = marca;
  this.modelo = modelo;
  this.year = year;
}

for (let index = 0; index < marca.length; index++) {
 var  nuevoAuto = new auto("tesla","moledox", 2020); 
} 