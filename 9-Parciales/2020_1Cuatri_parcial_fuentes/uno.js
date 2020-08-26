
function mostrar() {
	let tipoProducto;
	let precio;
	let marca;
	let fabricante;
	let cantidadProducto;
	let respuesta;
	let rTipoProd;
	let cantidadJabon;
	let flagAlcohol = 0;
	let flagCantidad = 0;
	let fabricanteAlcohol;
	let cantidadAlcohol;
	let precioMinimoAlcohol;
	let cantidadProductoMax;
	let precioMax;
	let vuelta;


	alert("Ingrese 5 productos")

	for (let i = 1; i <= 5; i++) {


		do {
			tipoProducto = prompt("Ingrese producto: barbijo, jabón o alcohol");

			switch (tipoProducto) {
				case "barbijo":
				case "jabón":
				case "alcohol":
					rTipoProd = true;
					break;
				default:
					rTipoProd = false;
					alert("Producto incorrecto")
					break;
			}

		} while (rTipoProd == false);

		do {
			precio = parseInt(prompt("Ingrese precio entre 100 y 300"))
		} while (!(precio >= 100 && precio <= 300));

		marca = prompt("Ingrese marca");

		fabricante = prompt("Ingrese fabricante");

		do {
			cantidadProducto = parseInt(prompt("Ingrese cantidad de unidades"))
		} while (!(cantidadProducto >= 1 && cantidadProducto <= 1000));

		if (tipoProducto == "jabón") {
			cantidadJabon += cantidadProducto
		}

		if (tipoProducto == "alcohol" && (precioMinimoAlcohol < precio || flagAlcohol == 0)) {
			cantidadAlcohol = cantidadProducto;
			fabricanteAlcohol = fabricante;
			precioMinimoAlcohol = precio;
			flagAlcohol++


		}
		if (cantidadProductoMax > cantidadProducto || flagCantidad == 0) {
			cantidadProductoMax = cantidadProducto;
			precioMax = precio;
			flagCantidad++

			
		}
		vuelta++
	}

	document.write("la cantidad de unidades del más barato de los alcohol es " + cantidadAlcohol + " y el fabricante es " + precioMinimoAlcohol + "<br>")
	document.write("el promedio por compra del producto con mas unidades es " + (precioMax / cantidadProductoMax) + "<br>")
	document.write("la cantidad de jabones es " + cantidadJabon + "<br>");
	document.write("cantidad vuelta " + vuelta + "<br>")


}
