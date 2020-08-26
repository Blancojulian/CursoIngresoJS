function mostrar() {

	let hora = parseInt(document.getElementById("txtIdHora").value)

	if (hora >= 0 && hora <= 24)
		switch (hora) {
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				alert("Es de mañana.");
				break;
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
				alert("Es de tarde.");
				break;
			default:
				alert("Es de noche.");

		}
	else {
		alert("la hora no existe.");
	}


}//FIN DE LA FUNCIÓN