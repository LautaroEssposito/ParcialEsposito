/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{ 
	//declarar las variables
	//let nuevoSueldo;

	//let aumento;


	//tomar el valor del sueldo por Id y asignarlo a su variable 
	// luego poner parseint a las demas variables ya que son numeros 
	//ingreseSueldo = parseInt(document.getElementById("txtIdSueldo").value);

	//nuevoSueldo = parseInt(nuevoSueldo);

	//aumento = parseInt(aumento);
	
	//calcular el % del sueldo ingresado
	//aumento = ingreseSueldo * .1; 

	//sumar las variables (el sueldo mas el aumento)
	//7/nuevoSueldo = ingreseSueldo + aumento;
	
	
	//establecer el valor del sueldo con el aumento mediante ID
	//document.getElementById("txtIdResultado").value = nuevoSueldo;

    let sueldo;

	let nuevoSueldo;
	
	let aumento;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	aumento = sueldo * .1;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;





	







	




}
