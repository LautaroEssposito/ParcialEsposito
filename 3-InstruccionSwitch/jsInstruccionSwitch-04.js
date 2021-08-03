function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero":
		case "Marzo":
		case "Abril":
		
			alert ("Este mes tiene 28");
			break;

		case "Julio":
		case "Junio":
		case "Agosto":
			alert ("Este mes tiene 30 ");
			break;

					
		case "Septiembre":
		case "octubre":
		case "Noviembre":
		case "Diciembre":
		alert ("Este mes tiene 31 o mas dias");
			break;			
	}


}// let mes;

// mes = document.getElementById("txtIdMes").value;
	
// switch(mes){
//  case "Febrero": 
//   alert("Este mes tiene 28 días.");
//   break;
//  case "Abril":
//  case "Junio":
//  case"Septiembre":
//  case "Noviembre":
// 	  alert("Este mes tiene 30 dias");
// 	  break;
// default: 
//   alert("Este mes tiene 31 días");
	
// }