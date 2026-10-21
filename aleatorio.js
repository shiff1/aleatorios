function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function generarAleatorios() {
    let aleatorios = [];

    let cantidad = recuperarInt("txtCantidad");

    if (cantidad < 5 || cantidad > 20) {
        alert("El numero debe estar entre 5 y 20");
        return;
    }

    for (let indice = 0; indice < cantidad; indice++) {
        console.log(indice); 

        let numero = numeroAleatorio();
        aleatorios.push(numero);
    }

    mostrarResultados(aleatorios);
}

function mostrarResultados(arregloNumeros) {
    let tabla = "<table border='1'>";
    tabla += "<tr><th>#</th><th>Numero</th></tr>";

    for (let i = 0; i < arregloNumeros.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + (i + 1) + "</td>";
        tabla += "<td>" + arregloNumeros[i] + "</td>";
        tabla += "</tr>";
    }

    tabla += "</table>";

    document.getElementById("divResultado").innerHTML = tabla;
}
