function mostrar() {
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert("Frio");
			break;
		default:
			alert("Calor");
			break;

	}

}//FIN DE LA FUNCIÓN