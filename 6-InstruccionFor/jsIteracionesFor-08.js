function mostrar()
{
	let numero= parseInt(prompt("Ingrese un numero"));
	let cantidadDivisores = 0;
	let vuelta = 1;

	while(numero<=0||isNaN(numero)){
		numero= parseInt(prompt("Reingrese el numero mayor a cero"));
	}
	
	for(let i = 1;i<=numero;i++){

		if(numero%i===0){				
			cantidadDivisores++
		}
		if(cantidadDivisores>=3){
			break;
		}
		alert("vuelta"+vuelta++)
		
	}
	//alert(cantidadDivisores)
	if(cantidadDivisores<=2){
		alert("El numero "+numero+" es primo")
	}
	else{
		alert("El numero "+numero+" NO es primo")
	}


}//FIN DE LA FUNCIÓN