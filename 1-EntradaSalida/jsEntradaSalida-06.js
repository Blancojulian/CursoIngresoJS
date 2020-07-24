/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	
	var vNumero1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	var vNumero2 = parseFloat(document.getElementById("txtIdNumeroDos").value);

	alert("La suma es "+(vNumero1+vNumero2));
}

