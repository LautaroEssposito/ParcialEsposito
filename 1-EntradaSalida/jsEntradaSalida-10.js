/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//tomar el importe mediante id value 
	//transformarlo a entero mediante parseint
	//aplicarle un descuento del 25%
	//mostrar el resultado por id value

	let importe;

	let resultado;

	let descuento;
	
	
	importe = parseInt(document.getElementById("txtIdImporte").value);



	descuento = parseInt(descuento);

	descuento = importe * .25;


	resultado = importe - descuento;
	


	document.getElementById("txtIdResultado").value = resultado;















}

