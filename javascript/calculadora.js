//Cargamos la información dada
//Usamos el evento cargar  => entonces dentro del elemento
window.addEventListener("load",() =>{
    const botones = document.getElementsByClassName("boton")
    // usar querySelector para que nos de el elemento solo
    const total = document.querySelector(".resultado")

    //COnvertir la colección (botones) a una lista
    const listabotones = Array.from(botones)

    /* Agrego un evento de click a cada boton */
    listabotones.forEach( (boton) =>{
        boton.addEventListener("click", () => {
            /* Llamo a una funcion cada vez que ocurra un click */
            calculadora(boton, total)
        })
    })
})

function calculadora(boton, total){
    /* funcion que decide que hacer */
    // 1) Borre todo al oprimir el boton C
    switch (boton.innerHTML) {
        case "C":
            borrar(total)
            break;
        case "=":
            calcular(total)
            break;
        default:
            actualizar(total, boton)
            break;
    }
}
// innerhtml --> devuelve o establece la sintaxis HTML 
function borrar(total){
    if(total.innerHTML !=0){
        total.innerHTML = 0
    }
}

function calcular(total){
    total.innerHTML = eval(total.innerHTML)
}

function actualizar(total, boton){
    if(total.innerHTML == 0){
        total.innerHTML = " "
    }
    total.innerHTML += boton.innerHTML
}