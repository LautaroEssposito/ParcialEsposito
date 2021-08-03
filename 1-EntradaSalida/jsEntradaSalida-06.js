/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{  	
	let numero1; 
	let numero2;
	let sumar;
	
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	//numero1 = document.getElementById("txtIdNumeroUno").value;
	//numero1 = parseInt("numero1");
	
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//numero2 = document.getElementById("txtIdNumeroDos").value;
	//numero2 = parseInt("numero2");


	sumar = numero1 + numero2
	
	
	alert("La suma es " + sumar );


	
	



	
}

