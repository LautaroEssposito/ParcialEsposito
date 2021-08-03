/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseFloat(prompt("Ingrese un numero entre 0 y 9"));

	while(numero < 0 || numero > 9)
	{	
		alert("Numero incorrecto");
		numero = parseFloat(prompt("Numero valido"));
	}
	document.getElementById("txtIdNumero").value = numero;
	alert("El numero ingresado es correcto");
}