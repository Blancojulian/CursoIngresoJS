function mostrar()
{
	let numero= parseInt(prompt("ingrese la cantidad de repeticiones"));
	let cantidadDivisores = 0;
	
	for(let i = 1;i!=numero;i++){

		if(numero%i==0){
			alert("El numero "+i+" es divisor de "+numero);
			cantidadDivisores++
		}
		
	}

	alert("La cantidad de divisores es "+cantidadDivisores)

}//FIN DE LA FUNCIÓN