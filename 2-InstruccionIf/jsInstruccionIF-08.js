function mostrar()
{
	
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;


	//if (!(edad < 18 || estadoCivil != "Soltero")) // En este caso se usa el OR || y se ponen criterios que van a dar falso y se niegan, pasando a ser verdaderos
	if(edad > 17 && estadoCivil === "Soltero")
	{
		alert("Es soltero y no es menor.");
	}
	


}//FIN DE LA FUNCIÓN