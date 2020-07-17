/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var vDato = prompt("Ingrese dato","Dato")
	
	document.getElementById("txtIdNombre").value=vDato

	//alert("ok");
}

