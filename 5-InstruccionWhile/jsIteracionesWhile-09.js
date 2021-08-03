/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	//1-declarar variables(numMax,numMin, seguir)
	let numero;
	let numeroMaximo;
	let numeroMinimo;
	let seguir;
	flag = 0;

	//2- generar un bucle del tipo mientras que el usuario quiera (do while)
	do
	{
		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero))
		{
			numero = parseInt(prompt("Eso no es un numero, Por favor ingrese un numero"));
		}

		if(flag == 0)
		{	numeroMaximo = numero;
			numeroMinimo = numero;
			//alert("Es la primera vez");
			flag = 1;
			
		}
		else
		{
			if(numero > numeroMaximo){
			numeroMaximo = numero;

			}else if(numero < numeroMinimo)
				numeroMinimo = numero;
			
		}

		/*if(flag || numero > maximo){
			numeroMaximo = numero;
		}
		if ( flag || numero < numeroMinimo){

			numero = numeroMinimo;
			flag = 0;
		}*/
		seguir = prompt("Quiere ingresar otro numero ? (s/n").toLowerCase();

	}while( seguir == `s` );


	document.getElementById("txtIdMaximo").value = numeroMaximo;

	document.getElementById("txtIdMinimo").value = numeroMinimo;
}


//estrategia de resolucion
//1-declarar variables(numMax,numMin, seguir)
//cosas que hacer en el bucle (varias veces)
//2.1-pido un numero
//2.2 validar el numero (que sea un numero)
//2.3- mne fijo si es la primera vez
//2.3.1_ si es la primera bez reemplazo (asigno) el numero a maximo o a minimo
//2.2.2_ si no es la primera vez los comparo
//2.3.3- me fijo si es un nuevo maximo o minimo
//de ser asi actualizo la variable maximo o minimo segun corresponda
//-------------------------------------
// despues del bucle
// muestro los resultados