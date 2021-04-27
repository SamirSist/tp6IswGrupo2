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
            if(dato.id === "efectivo" && dato.checked) {
                alert('Usted no ingreso ' + dato.id); 
                return;
            }
            alert('Usted no ingreso ' + campo(dato.id));
            return;
        }
        
    }

    /**
     * si esta todo ok debemos enviar un mensaje al usuario con su detalle y costo de pedido
     */
    mostrarPedido()

    
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
    else {
        return "referencia";
    }
}

/**funcion que muestra el pedido cuando se ingresan todos los datos */
function mostrarPedido() {

    $("#fondo").hide();
    $("body").html('<div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div>')




}