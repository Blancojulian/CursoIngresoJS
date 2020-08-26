/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numero=0;
	contador=0;
	acumulador=0;
	//respuesta='si';

	do{
		numero = parseInt(prompt("ingrese numero"))
		acumulador+=numero
		respuesta = confirm("¿Quiere seguir agregando numeros?")
		contador++
	}while(respuesta==true);


if(isNaN(acumulador)){
	document.getElementById("txtIdSuma").value = "no es un numero";
	document.getElementById("txtIdPromedio").value = "no es un numero";

}
else{
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;
}

}//FIN DE LA FUNCIÓN