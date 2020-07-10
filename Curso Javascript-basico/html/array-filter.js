var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular",costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifonos", costo: 5000},  
];

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
});

var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular",costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifonos", costo: 5000},  
];

var articulosFiltrados = articulos.map(function(articulo) {
    return articulo.nombre
});


var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular",costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifonos", costo: 5000},  
];
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
} );
