var nombre = 'Sacha'
var apellido = 'Lifszyc'

function pasarAMayusculas(nombre) {
  return nombre.toUpperCase()
}

pasarAMayusculas(nombre + ' ' + apellido)
console.log(nombre + '' + apellido)
pasarAMayusculas('Lucía')
pasarAMayusculas('')