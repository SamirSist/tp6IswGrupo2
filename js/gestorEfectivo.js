let pagoEfectivo = document.getElementById("montoEfectivo");

let totalPedido = document.getElementById("total");

function validarEfectivo() {

    let pago = parseFloat(pagoEfectivo.value);

    let total = parseFloat(totalPedido.innerText);
   
    if (isNaN(pago)) {
        alert('ingrese un monto a pagar');
        pagoEfectivo.value = "";
    }

    else if(pago <= 0) {
        alert('ingrese un monto mayor a cero')
    }

    else if (pago < total) {
        alert('pago insuficiente');
        pagoEfectivo.value = "";
    }

    else {
        console.log("su vuelto: $" +  (pago-total));
    }
}