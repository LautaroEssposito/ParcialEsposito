 function mostrar()
// {
// 	let destino;

// 	destino = document.getElementById("txtIdDestino").value;


// 	switch (destino){
		
// 		case "Bariloche":
// 		case "Ushuaia":
// 			alert ("Hace frio");
// 			break;

// 		case "Cataratas":
// 		case "Mar del plata":
// 			alert ("Hace calor");
// 			break;
// 		}





{
	let destino;
	let precio = 15000;
	let estacion;
	let preciofinal;

	destino = document.getElementById("txtIdDestino").value;

	if (destino == "Bariloche" || "Ushuaia"){
		alert("Hace frio");
	}
	else if (destino == "Cataratas"){
		alert ("Hace calor");
	}
	else if (destino == "Mar del plata"){
		alert ("Hace calor");
	}
}