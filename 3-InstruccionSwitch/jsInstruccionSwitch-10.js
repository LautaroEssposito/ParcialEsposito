function mostrar()
{
	let estacion;
	let destino;
	let resultado;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if (destino == "Bariloche"){
				resultado = "Se viaja";
			}
			else {
				resultado = "No se viaja";
			}
			break;
			case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas"){
				resultado = "Se viaja";
			}
			else {
				resultado = "No se viaja";
			}
			break;
			case "Otoño":
			
				resultado = "Se viaja";
			
			break;
			case "Primavera":
			if (destino == "Bariloche"){
				resultado = "No se viaja";
			}
			else {
				resultado = "Se viaja";
			}
	}
	alert(resultado);
}