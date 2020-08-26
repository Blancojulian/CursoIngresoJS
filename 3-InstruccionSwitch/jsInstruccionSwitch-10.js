function mostrar() {
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	//let viaje;


	switch (estacionIngresada) {
		case "Invierno":
			if (destinoIngresado == "Bariloche") {
				alert("Se viaja")
			}
			else {
				alert("No se viaja")
			}
			break;
		case "Verano":
			if (destinoIngresado == "Cataratas" || destinoIngresado == "Mar del plata") {
				alert("Se viaja")
			}
			else {
				alert("No se viaja")
			}
			break;
		case "Otoño":
			alert("Se viaja")
			break;
		case "Primavera":
			alert("No se viaja")
			break;
			default:
				alert("Opción no contemplada")
	}

}//FIN DE LA FUNCIÓN