function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value)

	//if(!(edad>=13&&edad<=17))
	if(edad<13||edad>17)
	{
		alert("No es adolesente")
	} else{
		alert("Es adolesente")
	}

}//FIN DE LA FUNCIÓN