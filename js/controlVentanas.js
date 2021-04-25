
function mostrarDetalle(){
    $(".detallePedido").toggleClass("d-none");
};

function mostrarReloj(){
    $(".timePicker").removeClass("d-none");
}
function ocultarReloj(){
    $(".timePicker").addClass("d-none");
}

function mostrarEfectivo() {
    $(".efectivoForm").removeClass("d-none");
    $(".datosTarjeta").addClass("d-none");
}
function mostrarTarjeta() {
    $(".efectivoForm").addClass("d-none");
    $(".datosTarjeta").removeClass("d-none");
    $(".datosTarjeta").addClass("d-block");
    $(".listadoTarjetas").removeClass("d-none");
    
}

function ocultarTarjeta() {
    $(".datosTarjeta").addClass("d-none");
    $(".listadoTarjetas").addClass("d-none");
    $(".datosTarjeta").removeClass("d-block");
    $(".efectivoForm").removeClass("d-none");
    $('#efectivo').prop('checked', true);
}
$("#detalleBtn").click(function(){
    $(".detallePedido").show();
  });

