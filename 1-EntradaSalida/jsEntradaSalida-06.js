/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	
	var vNumero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var vNumero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert(vNumero1+vNumero2);
}

