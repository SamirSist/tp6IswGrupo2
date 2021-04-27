
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

function mostrarResumen() {
    $(".resumenPedido").removeClass("d-none");
    $(".resumenPedido").addClass("d-block");
}

function ocultarResumen() {
    $(".resumenPedido").addClass("d-none");
    $(".resumenPedido").removeClass("d-block");
}
function ocultarTarjeta() {
    $(".datosTarjeta").addClass("d-none");
    $(".listadoTarjetas").addClass("d-none");
    $(".datosTarjeta").removeClass("d-block");
    $(".efectivoForm").removeClass("d-none");
    $('#efectivo').prop('checked', true);
}

function agregarTarjeta(){
    $(".datosTarjeta").addClass("d-none");
    $(".datosTarjeta").removeClass("d-block");
}

$("#detalleBtn").click(function(){
    $(".detallePedido").show();
  });

