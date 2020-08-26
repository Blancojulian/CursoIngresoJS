function mostrar() {

	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	const tarifa = 15000;
	let aumento = 0;
	let descuento = 0;
	let precio;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					aumento = tarifa * 0.20;
					break;
				case "Mar del plata":
					descuento = tarifa * 0.20;
					break;
				default:
					descuento = tarifa * 0.20;
					break;

			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					descuento = tarifa * 0.20;
					break;
				case "Mar del plata":
					aumento = tarifa * 0.20;
					break;
				default:
					aumento = tarifa * 0.10;
					break;
				}
			break;
		//case "Primavera" y "Otoño":
		default:
			switch (destinoIngresado) {
				case "Cordoba":
					break;
				default:
					aumento = tarifa * 0.10;
					break;

			}

		
	}

	precio = tarifa + aumento - descuento;
	
	alert("El precio de viaje es $"+ precio)

}//FIN DE LA FUNCIÓN