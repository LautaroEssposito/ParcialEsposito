function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Julio":
		case "Junio":
		case "Agosto":
		case "Septiembre":
		case "octubre":
		case "Noviembre":
		case "Diciembre":
			alert ("Este mes tiene 30 o mas dias");
			break;

		default:
			alert("Este mes tiene mas de 29 dias");





	}


}