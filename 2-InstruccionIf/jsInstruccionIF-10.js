function mostrar()
{
	let numero;
	let min = 1;
	let max = 10;

	numero = Math.floor(Math.random() * 10 + 1);


	if ( numero >= 9 && numero <= 10){
		alert("EXCELENTE");
	}else if (numero <9 && numero >=4){
		alert ("APROBO");
	}else {
		alert ("Vamos, la proxima se puede");
	}
		



}
