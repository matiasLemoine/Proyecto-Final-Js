function PromptDemo() {

    var entrada = prompt("¿Cuál es tu servicio?", "");
    var valorServicio = parseInt(prompt("¿Cuál es su valor sin impuestos?","")); 

    

    const iva  = x => x * 0.21;
    let precioIva = iva(valorServicio);

    const pais = x => x * 0.08;
    let precioPais = pais(valorServicio);

    const ganancias = x => x * 0.35;
    let precioGanancias = ganancias(valorServicio);

    let resultado = suma (precioIva, precioPais, precioGanancias, valorServicio);

    if (entrada == spotify1) {
        alert ("El valor del impuesto IVA de" + entrada + "es" + " " + "$" + precioIva);
        alert ("El valor del impuesto Pais de" + entrada + "es" + " " + "$" + precioPais);
        alert ("El valor del impuesto Ganancias de" + entrada + "es" + " " + "$" + precioGanancias);
        alert ("El valor final de" + entrada + "es de" + " " + "$" + resultado);
    }

    else  {
        alert("El nombre del servicio ingresado es incorrecto");
        prompt ("Por favor ingrese bien el nombre del servicio", "");
        parseInt(prompt ("¿Cuál es su valor sin impuestos?",""));
    }

} 

var spotify1 = ("Spotify Individual");

