function mostrar()
{
//tomo la edad  
let edad = parseInt(document.getElementById("txtIdEdad").value)

if(edad<13){
	alert("Es un niño")
} else if(edad>18){
	alert("Es mayor de edad")
} else{
	alert("Es Adolecente")
}

}//FIN DE LA FUNCIÓN