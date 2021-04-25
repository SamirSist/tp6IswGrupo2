let btnPedido = document.getElementById("pedido");

let datosEntrega = document.getElementsByClassName("entrega");

btnPedido.addEventListener("click", (e)=>{
    
    /**
     * aca hay que validar si todos los campos  fueron correctos
     */
    

    for (let i = 0; i < datosEntrega.length; i++) {
        let dato = datosEntrega[i];
        console.log(dato.value);
        if(!hayAlgo(dato.value)) {
            alert('no ingreso ' + dato.id); 
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

/**funcion que muestra el pedido cuando se ingresan todos los datos */
function mostrarPedido() {
    location.href='./pedido.html';

}