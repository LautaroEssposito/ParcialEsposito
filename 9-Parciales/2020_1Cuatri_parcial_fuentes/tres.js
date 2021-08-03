function mostrar() {

	let nombreIngresado;
	let sexoIngresado;
	let edadIngresada;
	let estadoCivilIngresado;
	let temperaturaIngresada;


	while (seguir == true) {
		nombreIngresado = prompt("Ingrese su nombre");
		edadIngresada = prompt("Ingrese su edad");
		edadIngresada = parseInt(edadIngresada);

		sexoIngresado = prompt("Ingrese su sexo.()");
		while (sexoIngresado != "" && sexoIngresado != "") {
			sexoIngresado = prompt("Error, ingrese su sexo nuevamente. ()");
		}

		estadoCivilIngresado = prompt("Ingrese su . ()");
		while (isNaN(estadoCivilIngresado) == false || estadoCivilIngresado != "" && estadoCivilIngresado != "" && estadoCivilIngresado != "") {
			estadoCivilIngresado = prompt("Error, ingrese su estado civil nuevamente. ()");
		}
		temperaturaIngresada = prompt("Ingrese su temperatura corporal");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		contadorPersona++;




	}

