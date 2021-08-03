/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	let numero1
	let numero2
	let sumar;
	
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	

	sumar = numero1 + numero2;
	
	
	alert("La suma es " + sumar );

}

function restar()
{
	
	let numero1
	let numero2
	let restar;
	
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	

	restar = numero1 - numero2;
	
	
	alert("La resta es " + restar );

	
}

function multiplicar()
{ 
	let numero1
	let numero2
	let multiplicar;
	
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	

	multiplicar = numero1 * numero2;
	
	
	alert("La multiplicacion es " + multiplicar );

	
}

function dividir()
{
	let numero1
	let numero2
	let division;
	
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	

	division = numero1 / numero2;
	
	
	alert("La division es " + division );

}

