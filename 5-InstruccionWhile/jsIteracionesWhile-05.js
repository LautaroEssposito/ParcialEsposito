/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese sexo masculino o femenino").toLowerCase();// el to lower afecta a la izquiera

	while(sexo != "masculino" && sexo != "femenino")
	//lleva and porque sino funcionaria mal 
	//ya que con el or aunque una sea falsa y otra verdadera se ejecutaria igual
	{
		sexo = prompt("Sexo desconocido, Ingrese nuevamente").toLowerCase();
	}	// al parsear y usar to lower volver a escribirlo en el otro prompt
	document.getElementById("txtIdSexo").value = sexo;
	alert ("El sexo ingresado es valido");
}

//OTRA FORMA DE HACERLO

// let sexo;

//sexo = prompt("Ingrese sexo masculino o femenino");

//while(!(sexo == masculino || sexo == femenino))
//{
	//sexo = prompt("Sexo desconocido, Ingrese nuevamente")

//}
 //document.getElementById("txtIdSexo");