function mostrar()
{
	let hora;

	hora = parseInt(document.getElementById("txtIdHora").value);

	switch( hora ){
		
		case 7: // sin "" porque son numeros
		case 8:
		case 9:
		case 10:
		case 11:
			alert ("Es de mañana");
			break;

	}
}