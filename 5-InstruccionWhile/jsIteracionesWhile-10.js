/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadCeros = 0;
	let cantidadNegativos = 0;
	let cantidadPositivos = 0;
	let promedioNegativos;
	let promedioPositivos;
	let cantidadPares = 0;
	let difPositivoNegativo;

	//respuesta="si";

	do
	{	
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		if(numeroIngresado==0){
			cantidadCeros++
		}
		else if(numeroIngresado<0){
			sumaNegativos+=numeroIngresado;
			cantidadNegativos++
		}
		else if(numeroIngresado>0){
			sumaPositivos+=numeroIngresado;
			cantidadPositivos++
		}

		if(numeroIngresado % 2 == 0){
			cantidadPares++
		}


		
		respuesta=confirm("¿Desea continuar?");
	}while(respuesta==true)



	promedioNegativos = sumaNegativos/cantidadNegativos;

	promedioPositivos = sumaPositivos/cantidadPositivos;

	difPositivoNegativo = sumaPositivos + sumaNegativos;

	if(cantidadPositivos==0){
		promedioPositivos = "no se puede dividir por cero"
	}

	if(cantidadNegativos==0){
		promedioNegativos = "no se puede dividir por cero"
	}


	document.write("la suma de negativos es :"+sumaNegativos+"<br>");
	document.write("la suma de positivos es :"+sumaPositivos+"<br>");
	document.write("la cantidad de negativos es :"+cantidadNegativos+"<br>");
	document.write("la cantidad de positivos es :"+cantidadPositivos+"<br>");
	document.write("la cantidad de ceros es :"+cantidadCeros+"<br>");
	document.write("la cantidad de numeros pares es :"+cantidadPares+"<br>");
	document.write("el promedio de positivos es :"+promedioPositivos+"<br>");
	document.write("el promedio de negativos es :"+promedioNegativos+"<br>");
	document.write("la diferencia entre positivos y negativos es :"+difPositivoNegativo+"<br>");






}//FIN DE LA FUNCIÓN