/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let control = 1;
    let mensaje = "";

    while (control <= 10)
    {
        //console.log(control);
        mensaje = mensaje + control + " ";
         //muestro todos los numeros en un solo alert

        control ++; // control + 1 es lo mismo
    }
alert(mensaje);
}