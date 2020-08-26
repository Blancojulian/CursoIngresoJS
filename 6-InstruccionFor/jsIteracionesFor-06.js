function mostrar()
{
	let repeticiones= parseInt(prompt("ingrese la cantidad de repeticiones"));
	let cantidadPares = 0;
	
	for(let i = 1;i<repeticiones;i++){

		if(i%2==0){
			console.log("El numero "+i+" es par");
			cantidadPares++
		}
		
	}

	console.log("La cantidad de pares es "+cantidadPares)


}//FIN DE LA FUNCIÓN