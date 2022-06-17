const carruseljs = document.querySelector('.items')
//cada que se utilize query selector se le tiene que poner . al selector (query selector es para un solo selector)

//Crearé variables que realizaran una acción
//scrollLeft --> establece el numero de pixeles que desplaza el contenido de un elemento hacia la izquierda
//ClientWidth --> retorna bien la anchura en pixels del contenido de un elemento
let izquierda = carruseljs.scrollLeft - carruseljs.clientWidth
let intervalo = null //Tiempo de inicio
let pasos = 3 //Velocidad de desplazamiento

//Constante que dara inicio automatico
const start = () =>{
    //setInterval --> Ejecuta una funcion o un framento de codigo de forma repetitiva
    intervalo = setInterval(function(){
        //Metodo es repetitivo y luego se añade un parametro extra
        carruseljs.scrollLeft = carruseljs.scrollLeft + pasos
        //Condiciones Si la estructura es "===" identico totalmente avanzara hacia la izquierda 
        //maxScrollLeft 
        if(carruseljs.scrollLeft === maxScrollLeft){
            pasos = pasos * -1
        }
        else if(carruseljs.scrollLeft === 0){
            pasos = pasos *-1
        }
    },30)
}

const stop = () =>{
    clearInterval(intervalo)
}
//Evento que al pasar el mouse se detenga el scroll
//mouseover --> pase el mouse sobre la imagen
//mouseover --> fuera de la imagen
carruseljs.addEventListener('mouseover', () =>{
    stop()
})

carruseljs.addEventListener('mouseout', () =>{
    start()
})

//Llamar a la funcion creada
start();
