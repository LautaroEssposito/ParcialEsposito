/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio () 
{
    let precio = 35;
    let cantidad;
    let marca;
    let descuento;
    let valorId;
    let precioTotal;
    let IIBB;
    let precioSindescuento;


    
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = parseInt(document.getElementById("Marca").value);
    
    precio = parseInt(precio);
    cantidad = parseInt(cantidad);
    descuento = parseInt(descuento);
    valorId = parseInt(valorId);
    precioTotal = parseInt(precioTotal);
    precioSindescuento = parseInt(precioSindescuento);
    IIBB = parseInt(IIBB);


    
    precioSindescuento = precio * cantidad;




    switch(marca)
    {
        case "ArgentinaLuz":
            if( cantidad >= 6)
            {
                valorId  = (precioSindescuento -(precioSindescuento * 0.5));
                
            }
            else
            {
                if(cantidad == 5)
                {
                    valorId  = (precioSindescuento -(precioSindescuento * 0.4));
                }
                else 
                {
                    if(cantidad == 4)
                    {
                        valorId  = (precioSindescuento -(precioSindescuento * 0.25));
                    }
                    else
                    {
                        if(cantidad == 3)
                        {
                            valorId  = (precioSindescuento -(precioSindescuento * 0.15));
                        }
                    }
                }
            }
        break;
        case "FelipeLamparas":
                if(cantidad == 5)
                {
                    valorId  = (precioSindescuento -(precioSindescuento * 0.3));
                }
                else 
                {
                    if(cantidad == 4)
                    {
                        valorId  = (precioSindescuento -(precioSindescuento * 0.25));
                    }
                    else
                    {
                        if(cantidad == 3)
                        {
                            valorId  = (precioSindescuento -(precioSindescuento * 0.1));
                        }
                        else
                        {
                            if (cantidad >= 6)
                            {
                                valorId  = (precioSindescuento -(precioSindescuento * 0.5));
                            }
                        }
                    }
                }
        break;
        default:
            if(cantidad >= 6)
            {
                valorId  = (precioSindescuento -(precioSindescuento * 0.5));
            }
            else
            {
                if(cantidad == 5)
                {
                    valorId  = (precioSindescuento -(precioSindescuento * 0.3));
                }
                else
                {
                    if( cantidad == 4)
                    {
                        valorId  = (precioSindescuento -(precioSindescuento * 0.2));
                    }
                    else 
                    {
                        if(cantidad == 3)
                        {
                            valorId  = (precioSindescuento -(precioSindescuento * 0.05));
                        }
                    }
                }
            }
            

    }

    document.getElementById("txtIdprecioDescuento").value = valorId;
    
}   
