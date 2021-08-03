function mostrar()
{
	let precio = 15000;
	let precioFinal;
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {
	case "Invierno":
				if (destino == "Bariloche"){
			alert ("Bariloche / Invierno");
			}
				else if  ( destino == "Mar del plata"){
				alert ("Mar del plata / invierno");
			}
				else {
				alert ("Cordoba/Cataratas / Invierno");
			}
				break;
	case "Verano":
				case "Invierno":
				if (destino == "Bariloche"){
			alert ("Bariloche / Verano");
			}
				else if  ( destino == "Mar del plata"){
				alert ("Mar del plata / Verano");
			}
				else {
				alert ("Cordoba/Cataratas / Verano");
			}

				break;

	case "Otoño":
	case "Primavera":
				case "Invierno":
				if (destino == "Cordoba"){
				alert ("Cordoba Otoño");
			}
				else {
				alert ("Cataratas/Bariloche/Mar del plata // Otoño/Primavera")
			}
				break;

			
	}
}