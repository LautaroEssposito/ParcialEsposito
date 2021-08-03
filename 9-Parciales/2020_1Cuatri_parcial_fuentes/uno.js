/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
-------------------
estrategia de resolucion
1- declarar variables ( tipo, cantidad, precio, marca, fabricante, )(lo pedimos al usuario)
A) precioMin contadorAlBarato---fabAlBarato flagA
B)cantAlcohol cantJabon cantBarbijo maxUnidades promedioCompra
  acumA acumB acumJ promedio
c)acumJ (ya esta agregado)
2- generar u bucle que se repita 5 veces ( como se las veces uso for)
datos del producto
2.1 cosas que hacer en el bucle ( 5 veces)
2.1.1 pido tipo y valido 
2.1.2 pido precio y valido
2.1.3 pido cantidad y valido
2.1.4 pido marca y valido
2.1.5 pido fabricante y valido
---------------------------------------
a) me fijo si el producto es de tipo alcohol y de ser asi ña primer vez que se ingresa, lo guardo en la variable (preciobarato)
y lo voy comparando con el siguiente alcohol a ver si es mas barato. de ser asi lo actualizo( guardo tambien cantidad y precio)
b)me fijo que tipo es el producto y actualizo el acumulador y contador de se tipo
c) si es de tipo jabon acumulo la cantidad (hecho en el punto b)
----------------------------------------------
3.1 cosas que hago una sola vez despues del for
3.1.1 para el punto b me tengo que fijar cual es el mayor acumulador y sacar promedio para ese tipo
3.2 muestro los resultados 
*/
function mostrar() {
  let tipoProductos;
  let contadorProductos = 0;
  let precioIngresado;
  let cantidadIngresada;
  let marca;
  let fabricante;
  let promedio;
  let acumuladorCantidadBarbijo = 0;
  let acumuladorCantidadAlcohol = 0;
  let acumuladorCantidadJabon = 0;
  let precioAcumuladoAlcohol = 0;
  let precioAcumuladoBarbijo = 0;
  let precioAcumuladoJabon = 0;
  let seguir = true;
  let contadorTipoAlcohol = 0;
  let contadorTipoBarbijo = 0;
  let contadorTipoJabon = 0;
  let acumuladorPrecioTotal = 0;
  let acumuladorCantidadTotal = 0;
  let ingresoPrimerPrecio = false;
  let precioMinimo;
  let alcoholBarato;
  let fabricanteAlcoholBarato;
  let ingresoPrimercantidad = false;
  let cantidadMax;
  let tipoMasUnidades;


  while (seguir == true) {
    tipoProductos = prompt("Ingrese el producto");
    while (tipoProductos != "jabon" && tipoProductos != "alcohol" && tipoProductos != "barbijo") {
      tipoProductos = prompt("ERROR, ingrese un producto valido.(");
    }
    cantidadIngresada = prompt("Ingrese la cantidad");
    cantidadIngresada = parseInt(cantidadIngresada);
    while (cantidadIngresada <= 0 || cantidadIngresada > 1000) {
      cantidadIngresada = prompt("Error, ingrese una cantidad valida. ()");
      cantidadIngresada = parseInt(cantidadIngresada);
    }
    precioIngresado = prompt("Ingrese el precio");
    precioIngresado = parseInt(precioIngresado);
    while (precioIngresado < 100 || precioIngresado > 300) {
      precioIngresado = prompt("Error, ingrese un precio valido. ()");
      precioIngresado = parseInt(precioIngresado);
    }
    marca = prompt("Ingrese Marca");
    fabricante = prompt("Ingrese fabricante");

    if (tipoProductos == "jabon") {
      contadorTipoJabon++;
      acumuladorCantidadJabon = acumuladorCantidadJabon + cantidadIngresada;
      precioAcumuladoJabon = precioAcumuladoJabon + precioIngresado;
    }

    if (tipoProductos == "barbijo") {
      contadorTipoBarbijo++;
      acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidadIngresada;
      precioAcumuladoBarbijo = precioAcumuladoBarbijo + precioIngresado;
    }

    if (tipoProductos == "alcohol") {
      contadorTipoAlcohol++;
      acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidadIngresada;
      precioAcumuladoAlcohol = precioAcumuladoAlcohol + precioIngresado;
    }
    if (tipoProductos == "alcohol" && precioIngresado < precioMinimo || ingresoPrimerPrecio == false) {
      precioMinimo = precioIngresado;
      alcoholBarato = cantidadIngresada;
      fabricanteAlcoholBarato = fabricante;
      ingresoPrimerPrecio = true;
    }
    if (cantidadIngresada > cantidadMax || ingresoPrimercantidad == false) {
      cantidadMax = cantidadIngresada;
      tipoMasUnidades = tipoProductos;
      ingresoPrimercantidad == true;

    }
    acumuladorPrecioTotal = acumuladorPrecioTotal + precioIngresado;
    acumuladorCantidadTotal = acumuladorCantidadTotal + cantidadIngresada;
    seguir = confirm("Desea añadir mas productos?");
  }

  if (tipoMasUnidades == "alcohol") {
    promedio = precioAcumuladoAlcohol / contadorTipoAlcohol;
  }
  else {
    if (tipoMasUnidades == "jabon") {
      promedio = precioAcumuladoJabon / contadorTipoJabon;
    }
    else {
      if (tipoMasUnidades == "barbijo") {
        promedio = precioAcumuladoBarbijo / contadorTipoBarbijo;
      }
    }
  }

  document.write("El alcohol mas barato es " + fabricanteAlcoholBarato + " con " + alcoholBarato + " unidades" + "<br>");
  document.write("El promedio de el tipo con mas unidads es " + promedio + "<br>");
  document.write("La cantidad de jabones es " + acumuladorCantidadJabon + "<br>");
}

