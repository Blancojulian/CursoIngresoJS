/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	
	document.getElementById("txtIdResultado").value=parseInt(sueldo*1.1)//.toFixed(2)
	//parseInt para que no muestre decimales
}
