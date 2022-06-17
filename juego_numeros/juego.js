//Juego donde la persona debe acertar el numero que la computadora proponga
//Números aleatorios --> 1 al 10
let aleatorio = Math.ceil(Math.random()*10)

//se programa el manejador de evento
document.getElementById('boton').addEventListener('click',function(){
    //obtener los datos del usuario
    let num = document.getElementById('numero').value

    //comprobamos si hemos acertado
    if(aleatorio == num){
        //console.log(...) --> Funcionara en la consola
        alert('Felicitaciones lograste acertar puedes acercarte a recoger tu premio a la direcccion "Miroquesada 875, Callao" referencia las caras de Atahualpa')
        location.reload() //-->Recargar el espacio
        //document.getElementById('salida').innerHTML='puedes acercarte a la Av. Arequipa 1010'
    }
    else{
        alert('¡Estuviste cerca! el numero ganador era ' + aleatorio + '... pero no te desanimes puedes seguir intentadolo por el valor de 5 soles ¡¿Que esperas? ese premio te espera!')
        location.reload()
    }
})