
/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{ 

  let tipoProductos;
  let cantidadIngresada;
  let precioIngresado;
  let contadorTipo;
  let seguir = true;
  let acumuladorCantidadArena = 0;
  let acumuladorCantidadCal = 0;
  let acumuladorCantidadCemento = 0;
  let acumuladorPrecioCemento = 0;
  let acumuladorPrecioArena = 0;
  let acumuladorPrecioCal = 0;
  let acumuladorCantidadTotal = 0;
  let acumuladorPrecioTotal = 0;
  let contadorArena = 0;
  let contadorCal = 0;
  let contadorCemento = 0;
  let PrecioDescuento;
  

  while(seguir==true)
  {
 
    tipoProductos = prompt("Ingrese el producto");
    while(tipoProductos != "arena" && tipoProductos != "cal" && tipoProductos != "cemento")
    {
      tipoProductos = prompt("ERROR, ingrese un producto valido.");
    }
      cantidadIngresada = prompt("Ingrese la cantidad");
      cantidadIngresada = parseInt(cantidadIngresada);
    while(cantidadIngresada <= 0 )
    {
      cantidadIngresada = prompt("Error, ingrese una cantidad valida.");
      cantidadIngresada = parseInt(cantidadIngresada);
    }
      precioIngresado = prompt("Ingrese el precio");
      precioIngresado = parseInt(precioIngresado);
      while(precioIngresado <= 0 )
      {
      precioIngresado = prompt("Error, ingrese un precio valido.");
      precioIngresado = parseInt(precioIngresado);
      }

      switch(tipoProductos)
      {
        case "arena" :
          contadorArena++;
      acumuladorCantidadArena = acumuladorCantidadArena + cantidadIngresada;
      acumuladorPrecioArena= acumuladorPrecioArena + precioIngresado;
        break;
        case "cal":
          contadorTipo++;
      acumuladorCantidadCal = acumuladorCantidadCal + cantidadIngresada;
      acumuladorPrecioCal = acumuladorPrecioCal + precioIngresado;
        break;
        case "cemento":
        contadorCemento++;
      acumuladorCantidadCemento = acumuladorCantidadCemento + cantidadIngresada;
      acumuladorPrecioCemento = acumuladorPrecioCemento + precioIngresado;
      break;
        
      }
      acumuladorPrecioTotal = acumuladorPrecioTotal + precioIngresado;
      acumuladorCantidadTotal = acumuladorCantidadTotal + cantidadIngresada;
    seguir = confirm("Desea seguir ?");
    
  }
    precioIngresado = (acumuladorCantidadCal * acumuladorPrecioCal) + (acumuladorCantidadCemento * acumuladorPrecioCemento) + (acumuladorPrecioArena * acumuladorCantidadArena);


    if (cantidadIngresada > 10)
    {
      PrecioDescuento = (precioIngresado - (precioIngresado * 0.15));
      document.write("El precio bruto a pagar con descuento es un total de $"  + PrecioDescuento + "<br>");
    }
      else
      {
        if (cantidadIngresada > 30)
      {
        PrecioDescuento = (precioIngresado - (precioIngresado * 0.25));
        document.write("El precio bruto a pagar con descuento es un total de $"  + PrecioDescuento + "<br>");
      }
    }
    if(acumuladorCantidadArena > acumuladorCantidadCal || acumuladorCantidadArena > acumuladorCantidadCemento)
    {
    document.write("El producto con mas bolsas es Arena" + "<br>");
    }
    else
    {
        if(acumuladorCantidadCemento > acumuladorCantidadArena || acumuladorCantidadCemento > acumuladorCantidadCal)
        {
        document.write("El producto con mas bolsas es Cemento" + "<br>");
        } 
        else
        {
          if(acumuladorCantidadCal > acumuladorCantidadCemento || acumuladorCantidadCal > acumuladorCantidadArena)
            {
            document.write("El producto con mas bolsas es Cal" + "<br>");
            }
        } 
    }    
            if(acumuladorPrecioArena > acumuladorPrecioCal || acumuladorPrecioArena > acumuladorPrecioCemento)
    {
    document.write("El producto mas caro es Arena" + "<br>");
    }
    else
    {
        if(acumuladorPrecioCemento > acumuladorPrecioArena || acumuladorPrecioCemento> acumuladorPrecioCal)
        {
        document.write("El producto mas caro es Cemento" + "<br>");
        } 
        else
        {
          if(acumuladorPrecioCal > acumuladorPrecioCemento || acumuladorPrecioCal > acumuladorPrecioCemento)
            {
            document.write("El producto mas caro es Cal" + "<br>");
            }
        } 
    } 

    document.write("El precio bruto a pagar sin descuento es un total de $"  + precioIngresado + "<br>");
}
