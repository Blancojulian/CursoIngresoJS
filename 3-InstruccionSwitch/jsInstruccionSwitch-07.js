function mostrar() {
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert("Se encuentra al Este");
			break;
		case "Cataratas":
			alert("Se encuentra al Norte");
			break;
		case "Ushuaia":
			alert("Se encuentra al Sur");
			break;
		default:
			alert("Se encuentra al Oeste");
			break;

	}


	//sur usu catara norte
	//bariloche este  del plata oeste

}//FIN DE LA FUNCIÓN