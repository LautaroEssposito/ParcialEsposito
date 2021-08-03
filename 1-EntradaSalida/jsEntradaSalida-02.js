//VALIDACIONES CON PRODUCTO PRECIO CANTIDAD MARCA Y CAPACIDAD :
while () {
	tipoProductos = prompt("Ingrese el el tipo de producto");
	while (tipoProductos != "" && tipoProductos != "" && tipoProductos != "") {
		tipoProductos = prompt("Error, vuelva a ingresar el tipo de producto. ()");
	}

	precioIngresado = prompt("Ingrese el precio");
	precioIngresado = parseInt(precioIngresado);
	while (precioIngresado <  || precioIngresado > ) {
		precioIngresado = prompt("Error, ingrese un precio valido. ()");
		precioIngresado = parseInt(precioIngresado);
	}

	cantidadIngresada = prompt("Ingrese la cantidad");
	cantidadIngresada = parseInt(cantidadIngresada);
	while (cantidadIngresada <  || cantidadIngresada > ) {
		cantidadIngresada = prompt("Error, ingrese una cantidad valida. ( entre )");
		cantidadIngresada = parseInt(cantidadIngresada);
	}

	marca = prompt("Ingrese la marca");
	while (marca != "" && marca != "" && marca != "") {
		marca = prompt("Error, vuelva a ingresar la marca. ");
	}

	capacidad = prompt("Ingrese la capacidad");
	while (capacidad != "" && capacidad != "" && capacidad != "" && capacidad != "") {
		capacidad = prompt("Error vuelva  a ingresar capacidad. ()");
	}

	contador++;

	//CALCULO DE MINIMOS Y MAXIMOS:
	if (tipoProductos == "" && precioIngresado > precioMaximo || ingresoPrimerPrecio == false) {
		precioMaximo = precioIngresado;
	}
	if (tipoProductos == "" && precioIngresado < precioMinimo || ingresoPrimerPrecio == false) {
		precioMinimo = precioIngresado;
		ingresoPrimerPrecio = true;
	}
	//DOCUMENTO GENERICO
	document.write("" + "<br>");


	//VALIDACIONES CON CONFIRM PRODUCTO CANTIDAD Y PRECIO + CONTADORES Y ACUMULADORES DE CADA COSA (acumuladores y conadores siempre igualarlos a 0)
	while (seguir == true) {
		tipoProductos = prompt("Ingrese el producto");
		while (tipoProductos != "" && tipoProductos != "" && tipoProductos != "") {
			tipoProductos = prompt("ERROR, ingrese un producto valido.(");
		}
		cantidadIngresada = prompt("Ingrese la cantidad");
		cantidadIngresada = parseInt(cantidadIngresada);
		while (cantidadIngresada < ) {
			cantidadIngresada = prompt("Error, ingrese una cantidad valida. ()");
			cantidadIngresada = parseInt(cantidadIngresada);
		}
		precioIngresado = prompt("Ingrese el precio");
		precioIngresado = parseInt(precioIngresado);
		while (precioIngresado < ) {
			precioIngresado = prompt("Error, ingrese un precio valido. ()");
			precioIngresado = parseInt(precioIngresado);
		}
		if (tipoProductos == "") {
			contadorTipo++;
			acumuladorCantidad = acumuladorCantidad + cantidadIngresada;
			acumuladorPrecio = acumuladorPrecio + precioIngresado;
		}

		if (tipoProductos == "") {
			contadorTipo++;
			acumuladorCantidad = acumuladorCantidad + cantidadIngresada;
			acumuladorPrecio = acumuladorPrecio + precioIngresado;
		}

		if (tipoProductos == "") {
			contadorTipo++;
			acumuladorCantidad = acumuladorCantidad + cantidadIngresada;
			acumuladorPrecio = acumuladorPrecio + precioIngresado;
		}
		acumuladorPrecioTotal = acumuladorPrecioTotal + precioIngresado;
		acumuladorCantidadTotal = acumuladorCantidadTotal + cantidadIngresada;
	}
	seguir = confirm("Desea añadir mas productos?");



	//Punto A. Asigno el valor a temperatura maximo y a su vez cuando esto sucede le asigno el nombre ingresado a la variable
	if (temperaturaIngresada > temperaturaMaximo || ingresoLaPrimerTemperatura == false) {
		temperaturaMaximo = temperaturaIngresada;
		personaConTemperatura = nombreIngresado;
	}
	if (temperaturaIngresada < temperaturaMinimo || ingresoLaPrimerTemperatura == false) {
		temperaturaMinimo = temperaturaIngresada;
		ingresoLaPrimerTemperatura = true;
	}
	//puntoB
	if (edadIngresada >  && estadoCivilIngresado == "") {
		contadorViudos++;
	}
	//puntoC
	if (sexoIngresado == "" && estadoCivilIngresado == "" || estadoCivilIngresado == "") {
		contadorSolterosViudos++;
	}
	//puntoD
	if (edadIngresada >  && temperaturaIngresada > ) {
		contadorTerceraEdad++;
	}
	if (sexoIngresado == "" && estadoCivilIngresado == "") {
		acumuladorEdadSoltero = acumuladorEdadSoltero + edadIngresada;
		contadorHombreSoltero++;
	}

	seguir = confirm("¿Desea Añadir otra persona?");
}
