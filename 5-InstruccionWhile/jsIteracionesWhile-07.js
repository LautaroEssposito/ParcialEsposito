/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let acumulador = 0;
	let numero;
	let suma = 0;
	let promedio;
	let respuesta;

do {
	num = parseInt(prompt("Ingrese un numero."));
	suma += numero;
	acumulador++;
	respuesta = prompt("Quiere ingresar otro numero?");

} while (respuesta == "si");

promedio = suma / acumulador;

document.getElementById("txtIdSuma").value = suma;
document.getElementById("txtIdPromedio").value = promedio;

}
/*let seguir;
	let numero;
	let acumulador = 0;
	let contador = 0;

	do {

		numero = parseInt(prompt("Ingrese un numero"));
        acumulador = acumulador + numero; 
		contador = contador + 1;

		seguir = prompt("Quiere ingresar otro numero?");

	} while ( seguir == 's' );

    promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;*/


	/*
	let num;
	let respuesta = "s";
	let acumulador = 0;
	let contador = 0;
	let prom;

	do{
		num = parseInt(prompt("Ingrese un número"));
		acumulador = acumulador + num;
		contador++;

		respuesta = prompt("Quiere seguir ingresando números? (s/n)");

	}while(respuesta == "s");

	prom = acumulador/contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = prom;
	*/