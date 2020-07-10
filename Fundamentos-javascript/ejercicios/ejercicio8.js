var totalPagar = parseInt(prompt("indique el monto a pagar por favor"))
var personas =  parseInt(prompt("en cuantas personas quiere dividir la cuenta?"))

var propina = (totalPagar) * 0.010
var impuestos = (totalPagar) * 0.010
 var totalPagoUnitario = (totalPagar + impuestos + propina) / personas 
 alert ('usted debe pagar por persona' + totalPagoUnitario  )
