function mostrar() {
	let mes = document.getElementById("txtIdMes").value

	switch (mes) {
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Febrero":
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
		default:
			alert("nada")


	}



}//FIN DE LA FUNCIÓN