function numeroMayoryMenor (){
    let numero1 = parseInt(prompt ("ingresa un valor ")) ;
    let numero2 = parseInt(prompt("ingresa un segundo valor")) ;    
    let diferencia = numero1 - numero2;
if (numero1 > numero2){
    console.log(`el numero ${numero1} es mayor al ${numero2} y hay una diferencia de ${diferencia}`)
    } else if (numero1==numero2){
        console.log(`el numero ${numero1} y el numero ${numero2} son iguales`);
    } else { 
        console.log(`no cumple el parametro`)
    }

}


numeroMayoryMenor();