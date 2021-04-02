// var numero = parseInt (prompt("Ingresar numero"));

// for (var contador = 1; contador <= 10; contador++) {
//     var resultado = numero * contador;
//     alert(numero + " * " + contador + " = "+ resultado);
// }

// var resultado = "";

// for (var i = 0; i <= 10; i = i ++) {
//     var entrada = prompt("ingrese una palabra");
//     resultado =resultado + " " + entrada;
// }

// alert(resultado)

// for (var cont = 1; cont < 11; cont++) {
//     if(cont == 4 || cont == 6) {
//         alert ("aca no voy a mostrar el contador!");
//         continue;
//     }
//     else if (cont == 7 ) {
//         alert("voy a cortar el ciclo!");
//         break;
//     }
//     alert(cont);
// }


// //Serie Fibonacci
// var numero1, numero2, siguiente;
// numero1 = 0;
// numero2 = 1;

// var hasta = parseInt((prompt("Ingrese hasta donde quiere ver la sucesión")));

// for(var i = 1; i <= hasta; i ++) {
//     alert(numero1);
//     siguiente = numero1 + numero2;
//     numero1 = numero2;
//     numero2 = siguiente;
// }

// var dato = prompt("ingrese un dato");

// while(dato != "esc") {
//     alert("se ingreso: " +  dato);
//     dato = prompt("ingrese otro dato!")
// }
//WHILE

//DO WHILE

// var dato;

// do {
//     dato = prompt ("ingrese un dato");
//     alert ("se ingreso: " + dato);
// } while (dato != "esc");


// var bool = true

// while (bool) {
//     entrada = parseInt (prompt("ingrese un nombre"));
//     switch(entrada) {
//         case 1:
//             alert(40);
//             break;
//         case 2:
//             alert("hola");
//             break;
//         case 3:
//             alert(10);
//             break;
//         default:
//             bool = false
//             break;    
//     }
//     entrada = prompt("ingrese un nombre")
// }

// // le pidan un numero del 1 al 5.
// 1: numero
// 2: hola
// 3: 10
// 4:"coder"
// 5: 100
// default: corten el while



// function dividir (divisor, dividendo) {
//     var resultado = divisor / dividendo;
//     alert (resultado);
// }


// function alCuadrado (primero) {
//     var resultado = primero * primero;
//     alert(resultado);
// }

// dividir (8, 2);
// alCuadrado (5);




// alert(calculadora(10, 5, "/"));

// entrada1 = parseInt (prompt("ingrese un numero"))
// entrada2 = parseInt (prompt("ingrese un numero"))
// entrada3 = parseInt (prompt("ingrese operacion"))

// function calculadora (entrada1, entrada2, operation) {
//     switch (operation) {
//         case '+':
//             return entrada1 + entrada2;
//             break;
//         case '-':
//             return entrada1 - entrada2;
//             break;
//         case '*':
//             return entrada1 * entrada2; 
//             break;
//         case '/':
//             return entrada1 / entrada2;
//             break;
//         default:
//             return 0;
//             break; 
//     }
// }

// alert(calculadora(entrada1, entrada2, entrada3));

// function calculadora (numero1, numero2, operacion) {
//     switch (operacion) {
//         case '+':
//             return numero1 + numero2;
//             break;
//         case '-':
//             return numero1 - numero2;
//             break;
//         case '*':
//             return numero1 * numero2; 
//             break;
//        case '/':
//            return numero1 / numero2;
//             break;
//         default:
//             return 0;
//            break;   
//     }
// }

// function pedirNumero () {
//     return parseInt (prompt("ingrese un numero"));
// }

// function pedirOperacion () {
//     return prompt ("ingrese operacion");
// }


// var num1 = pedirNumero ();
// var num2 = pedirNumero ();
// var operacion = pedirOperacion ();
// var resultado = calculadora (num1, num2, operacion);
// alert(resultado);


// const multiplicar = (num1, num2, num3) =>  num1 * num2 * num3; // {return num1 * num2 * num3;}

// alert(multiplicar(10, 2, 2));





// function pedirPrecio () {
//     return parseFloat (prompt("Ingrese precio"));
// }



// const productoConIva = (a, b) => a * 1.21;
// const resta = (a, b) => a - b;
// var precioProducto = pedirPrecio ();
// var precioDescuento = 0.2;

// var nuevoPrecio = productoConIva(precioProducto);

// nuevoPrecio = resta(nuevoPrecio, precioDescuento);

// alert (nuevoPrecio);


// function calculadora(numero1, numero2, operacion) {
//     switch (operacion) {
//         case "+":
//             return numero1 + numero2;
//             break;
//         case "-":
//             return numero1 - numero2;
//             break;
//         case "/":
//             return numero1 / numero2;
//             break;
//         case "*":
//             return numero1 * numero2;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }


// do {
//     var num = prompt("ingrese un numero");
// } while (isNaN (num));