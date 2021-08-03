/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese el numero clave");

	while(clave != "utn750"  ) //cuando el dato sea invalido hace verdadera la condicion
	{
		clave = prompt("Clave invalida. Reingrese clave");
	}
    
	alert("Clave correcta!");
}