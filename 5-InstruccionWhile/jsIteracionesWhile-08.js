/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	//contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	//respuesta='si';

	do{
		numero = parseInt(prompt("ingrese numero"))
		
		if(numero>=0){
			sumaPositivos += numero
		}else{
			multiplicacionNegativos *= numero
		}

		respuesta = confirm("¿Quiere seguir agregando numeros?")
		//contador++
	}while(respuesta==true);


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;


}//FIN DE LA FUNCIÓN