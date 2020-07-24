/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
var numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
alert(numero1+numero2);
function sumar()
{	
	/*
	let num1 = 40
	let num2 = 20
	let num3 = 10
	let res1 = num1+num2*num3
	alert(res1)
	Jerarquia de Operadores
	()
	* / %
	+ -
	
	*/
	var numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("la Suma es "+(numero1+numero2));	
}

function restar()
{
	var numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("la Resta es "+(numero1-numero2));
}

function multiplicar()
{ 
	var numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("la Multiplicación es "+(numero1*numero2));
}

function dividir()
{
	var numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	var res = numero1/numero2
	alert("la Division es "+res.toFixed(2));//con toFixed pongo la cantidad de decimales
	//alert("la Division es "+(numero1/numero2).toFixed(2));
}

