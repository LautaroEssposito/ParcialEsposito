 function mostrar()
// {
// 	let destino;

// 	destino = document.getElementById("txtIdDestino").value;


// 	switch (destino){
		
// 		case "Bariloche":
// 			alert("Oeste");
// 			break;
		
// 		case "Ushuaia":
// 			alert ("Sur");
// 			break;

// 		case "Cataratas":
// 			alert ("Norte");
// 			break;
		
// 		// default: 
// 		case "Mar del plata":
// 			alert ("Este");
// 			break; // no es necesario el break
// 	}
// }


{
	let destino;

    destino = document.getElementById("txtIdDestino").value;

	if (destino == "Bariloche"){
		alert ("Oeste");
	}
	else if (destino == "Cataratas"){
	alert ("Sur");
	}
	else if (destino == "Mar del plata"){
		alert ("Este");
	}
	else if (destino == "Ushuaia"){
		alert ("Norte")
	}

}