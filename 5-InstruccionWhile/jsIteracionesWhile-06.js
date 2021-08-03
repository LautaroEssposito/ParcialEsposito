function mostrar()
{
	let num1;
	let num2;
	let num3;
	let num4;
	let num5;

	let suma;
	let promedio;


	num1 = parseFloat(prompt("Ingrese un numero"));
	num2 = parseFloat(prompt("Ingrese un numero"));
	num3 = parseFloat(prompt("Ingrese un numero"));
	num4 = parseFloat(prompt("Ingrese un numero"));
	num5 = parseFloat(prompt("Ingrese un numero"));

	suma = num1 + num2 + num3 + num4 + num5;

	promedio = suma / 5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

 



	
}