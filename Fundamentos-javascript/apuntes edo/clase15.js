var contador = 0;

const llueve = () => Math.random() < 0.25

do{
    // contador++ es lo mismo que decir contador += 1
contador++
}while (!llueve())
if (contador ==1){
    console.log(`fui a ver si llovía ${contador} vez`)
}else{
    console.log(`fui a ver si llovía ${contador} veces
    `)
}
