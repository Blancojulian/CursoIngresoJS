/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	vNombre = document.getElementById("txtIdNombre").value;
	vEdad = document.getElementById("txtIdEdad").value;
	//alert("Usted se llama "+vNombre+" y tiene "+vEdad+" años");

	alert(`usted se llama ${vNombre} y tiene ${vEdad} años`); //para que lo tome esta manera se cambia comilla por tilde invertido "`"

}

