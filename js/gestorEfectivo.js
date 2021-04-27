let pagoEfectivo = document.getElementById("montoEfectivo");

let totalPedido = document.getElementById("total");

let vuelto = document.getElementById("titulo-vuelto");

vuelto.innerHTML = "";

function validarEfectivo() {

    let pago = parseFloat(pagoEfectivo.value);

    let total = parseFloat(totalPedido.innerText);
   
    if (isNaN(pago)) {
        alert('Ingrese un monto a pagar');
        pagoEfectivo.value = "";
        vuelto.innerHTML = "";
    }

    else if(pago <= 0) {
        alert('Ingrese un monto mayor a cero');
        vuelto.innerHTML = "";
    }

    else if (pago < total) {
        alert('Pago insuficiente');
        pagoEfectivo.value = "";
        vuelto.innerHTML = "";
    }
    else if (pago > 999999) {
        alert('Su monto supera el máximo permitido');
        pagoEfectivo.value = "";
        vuelto.innerHTML = "";
    }

    else {
        vuelto.innerHTML="Su vuelto es de $: " + (pago-total);

    }
}