/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	do{
		sexoIngresado = prompt("ingrese f ó m .").toLowerCase();

	}while(sexoIngresado!="m"&&sexoIngresado!="f")
	
	document.getElementById("txtIdSexo").value=sexoIngresado;


}//FIN DE LA FUNCIÓN