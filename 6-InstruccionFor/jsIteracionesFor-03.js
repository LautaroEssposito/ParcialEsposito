function mostrar()
{
	let repeticiones = parseInt(prompt("Ingrese un numero de repeticiones"));

	while (isNaN(repeticiones) || repeticiones < 0) {
		repeticiones = prompt("Ingrese repeticiones en numero y use numeros positivos");
	}
	for (let contador = 0; contador < repeticiones; contador++){
		alert("Hola UTN FRA");
	}

	

}