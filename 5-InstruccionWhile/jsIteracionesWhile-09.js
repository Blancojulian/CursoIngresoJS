/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero = 0;
	//respuesta = true;
	do
	{
		numeroIngresado = parseInt(prompt("ingrese numero"))


		if(banderaDelPrimero==0){

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;

			banderaDelPrimero++

		}
		
		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;

		}else if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
		}

		respuesta = confirm("¿Desea continuar?");
	}while(respuesta==true)

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

	
}//FIN DE LA FUNCIÓN