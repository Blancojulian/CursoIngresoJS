function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
let maximo = 10;
let minimo = 1;
let nota;

nota = Math.round(Math.random() * (maximo-minimo) + minimo);

if(nota >= 9)
{
	alert( nota + " EXCELENTE");
}
else if(nota >= 4)
{
	alert( nota + " APROBÓ");
}
else
{
	alert( nota + " Vamos, la proxima se puede");
}
}//FIN DE LA FUNCIÓN