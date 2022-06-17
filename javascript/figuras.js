//area del circulo (A = π . r²)
//area del triangulo A = b . h /2
//area del rectangulo b * a

//area del cuadrado A= l . l
//area del rombo A= D . d
//area del romboide A= b . h
//trapecio A= h(B . b) / 2
//poligono 5 A= p . a / 2 --> hallar p (perimetro) lado x # de lados   


let figuras = prompt("¿Que figura deseas resolver?")

let base;
let altura;
let radio;
let lado;

let diametro_may;
let diametro_men;

let base_may;
let base_men; 

let perimetro;

let num_lados;

let apotema;

var imagen;

switch(figuras){
    case "rectangulo":
    case "RECTANGULO":
    case "Rectángulo":
        base = prompt("¿Cuanto tiene de base?")
        altura = prompt("¿Cuanto tiene de altura?")
        //console.log(`El area del rectangulo es ${base*altura}`)
        document.write(`El area del rectangulo es ${base*altura}`)
        break;


    case "TRIANGULO":
    case "triangulo":
    case "Triángulo":
        base = prompt ("¿Cuanto tiene de base?")
        altura = prompt("¿Cuanto tiene de altura?")
        //console.log(`El area del triangulo es ${base*altura/2}`)
        document.write(`El area del triangulo es ${base*altura/2}`)
        break;

    case "CIRCULO":
    case "circulo":
    case "Círculo":
        radio = prompt("¿Cuanto de area tienes?")
        //console.log(`El area del circulo es ${Math.PI*Math.pow(radio,2)}`)
        document.write(`El area del circulo es ${Math.PI*Math.pow(radio,2)}`)
        break;

    case "cuadrado":
    case 'CUADRADO':
    case 'Cuadrado':
        lado = prompt("¿Cuanto tiene de lado?")
        document.write(`El area del cuadrado es ${lado*lado}`)
        break;

    case 'rombo':
    case 'Rombo':
    case 'ROMBO':
        diametro_may = prompt('¿De cuanto es su diametro mayor?')
        diametro_men = prompt('¿De cuanto es su diamentro menor?')
        document.write(`El area del rombo es ${diametro_may*diametro_men}`)
        break;

    case 'Romboide':
    case 'ROMBOIDE':
    case 'romboide':
        base = prompt('¿Cual es la medida de su base?')
        altura = prompt('¿Cual es la medida de su altura?')
        document.write(`El area del romboide es ${base*altura}`)
        break;

    case 'Trapecio':
    case 'TRAPECIO':
    case 'trapecio':
        altura = prompt('¿Cual es la medida de su altura?')
        base_may = prompt('¿Cual es la medida de su base mayor?')
        base_men = prompt('¿Cual es la medida de su base menor?')
        document.write(`El area del romboide es ${altura*base_may*base_men/2}`)
        break;

    case 'poligono':
    case 'POLIGONO':
    case 'Poligono':
        perimetro = prompt('Perimetro del poligono. En caso lo desconozca presionar aceptar para continuar.')
        lado = prompt('¿Cual es la medida de los lados de su figura?')
        num_lados = prompt('¿Cuantos lados tiene su figura?')
        apotema = prompt('¿Cual es la medida del apotema?')
        document.write(`El perimetro de su poligono es ${lado*num_lados*apotema/2}`)
        break;

    //default: console.log("Tu figura no existe")
    default: document.write("Tu figura no existe o está mal escrita")
}