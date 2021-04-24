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
    //$(".datosTarjeta").addClass("d-block");
}