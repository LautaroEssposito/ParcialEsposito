/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let numero;
	let acumPos = 0;
	let acumNeg = 1;
	let flag = 1;

	do
	{
		
		numero = parseInt(prompt("Ingrese un numero"));

		if(numero >= 0 )
		{
			acumPos += numero;
		}
		else 

			acumNeg *= numero;
			flag == 0;
		
		
		respuesta = (prompt("Quiere ingresar otro numero ?"));

	
	}while(respuesta == `s`);
	
	if(flag == 0)
	{
		acumNeg = 0;
	}

	document.getElementById("txtIdSuma").value = acumPos;
	document.getElementById("txtIdProducto").value = acumNeg;


}

//estrategia de resolucion
// 1- declaro variables (respuesta/numero/acumulador de positivos y acumulador de negativos)
//2- generar un bucle del tipo mientras el usuario quiera ( do while)
//cosas 