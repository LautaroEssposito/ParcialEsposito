/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	
let numero;
let acumuladorNegativo = 0;
let acumuladorPositivos = 0;
let contadorPos = 0;
let contadorNeg = 0; 
let contadorCeros = 0; 
let contadorPar = 0; 
let promPos = 0;
let promNeg = 0;
let diferencia;
let respuesta;


	do
	{	
		numero = parseInt(prompt("Ingrese un numero"));

		if (isNaN(numero))
		{
			numero = prompt("Eso no es un numero. Ingrese un numero");
		}

	}
}
/*estrategia de resolucion
declarar variables
let numero;
let acumuladorNegativo;
let acumuladorPositivos;
let contador positivos;
let contador negativos; 
let contador de ceros; 
let contador de pares; 
let promedio positivos;
let promedio negativos;
let diferencia;
let respuesta;



generar el bucle del tipo mientras el usuario quiera (do while)
---cosas que se repiten (en el bucle)
pedir el numero
validar que sea un numero
identificar el signodel numero ( positivo negativo o cero) if else if else
si es positivo acumularlo y contarlo 
si es negativo acumularlo y contarlo
si es un cero solo contarlo

si el numero es par --> los cuento 

fuera del bucle:
sacar el promedio de los positivos
sacar el promedio de los negativos
calcular la diferencia de negativos y los positivos


muestro los resultados;
