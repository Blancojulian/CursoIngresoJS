function mostrar() {
	
	let mes = document.getElementById("txtIdMes").value

	switch (mes) {
		case "Julio"://invierno
		case "Agosto"://invierno
		alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		default:
			alert("Falta para el invierno.");
			break;

	}

}//FIN DE LA FUNCIÓN