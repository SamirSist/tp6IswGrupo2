/**
 * Obtenemos los elementos del HTML
 */

let btnPedido = document.getElementById("colorBoton");

let datosEntrega = document.getElementsByClassName("campo");

let opEfectivo = document.getElementById("efectivo");

btnPedido.addEventListener("click", (e)=>{
    
    /**
     * aca hay que validar si todos los campos  fueron correctos
     * primero validamo si el total no es cero , ya que si es cero , el carrito esta vacio
     */

    let valorTotalCarro = parseFloat(document.getElementById("total").innerText);
    
    console.log(valorTotalCarro);
    //es 100 por el costo de envio
    if(valorTotalCarro === 100) {
        alert('Su carrito se encuentra vacio!!');
        return;
    }
    
    for (let i = 0; i < datosEntrega.length; i++) {
        let dato = datosEntrega[i];
        //preguntamos si hay algo en el campo
        if(!hayAlgo(dato.value)) {
            //si no hay algo  ,prguntamos si esta marcado el efectio ya que debe analizarlo en caso de estarlo
            if(dato.id === "montoEfectivo" && opEfectivo.checked) {
                alert('Usted no ingresó ' + campo(dato.id)); 
                return;
            }
            else{
                continue;
            }
            alert('Usted no ingresó ' + campo(dato.id));
            return;
        }
        
        
    }

    /**
     * si esta todo ok debemos enviar un mensaje al usuario con su detalle y costo de pedido
     */
     mostrarResumen()
     var textoDetalle = ""
     let ciudad = document.getElementById("selectCiudad").value;
     let nombreCalle = document.getElementById("nombreCalle").value;
     let deptoNum = document.getElementById("deptoNum").value;
     let loAntesPosible = document.getElementById("loAntesPosible");
     let programarOpt = document.getElementById("programarOpt");
     let datetime = document.getElementById("fecha-envio").value;
     let efectivo = document.getElementById("efectivo");
     let tarjetaCredito = document.getElementById("tarjetaCredito");
     let montoEfectivo= document.getElementById("montoEfectivo").value;
     let detallePedido = document.getElementById("detalleResPedido");
     textoDetalle += "Dirección: "
     textoDetalle += ciudad;
     textoDetalle += ' -' + nombreCalle;
     textoDetalle += ' -' + deptoNum;
     if(loAntesPosible.checked) {
        textoDetalle += '<br> -Lo antes posible';
     }
     if(programarOpt.checked) {
        textoDetalle += '<br> -Programado para: ';
        textoDetalle += datetime;
     }

    textoDetalle += '<br> -Total: ';
    textoDetalle += valorTotalCarro;
    
    if(efectivo.checked) {
        textoDetalle += '<br> -Pago en efectivo: ';
        textoDetalle += montoEfectivo;
     }

     if(tarjetaCredito.checked) {
        textoDetalle += '<br> -Pago con tarjeta Visa';
     }

     detallePedido.innerHTML = textoDetalle;   
    
})

/**funcion que valida si hay algo en los campos */
function hayAlgo(valor) {
    return valor !== '';
}


function campo(id) {
    if(id === "selectCiudad"){
        return "cuidad";
    }

    else if(id === "nombreCalle") {
        return "nombre de calle";
    }

    else if(id === "deptoNum") {
        return "nombre de departamento";
    }
    else if(id === "referenciaDir") {
        return "refencia";
    }
    else if(id === "montoEfectivo") {
        return "monto a pagar";
    }
    
    else {
        return "un dato obligatorio";
    }
}



function confirmarPedido(){
    let confirmacionPedido = document.getElementById("overContent2");
    var textoHTML = "";
    textoHTML = "<div class='row'><div class='col-7 h3'> Pedido Registrado Con Éxito </div> "
    textoHTML += "<div class='col-3 h1'> <i id='logoChecked' class='fa fa-check-circle '></i> </div> </div>"
    confirmacionPedido.innerHTML = textoHTML;

}