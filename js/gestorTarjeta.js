/**
 * primero se toman los elementos del HTML
 */

let num = document.getElementById("nroTarjeta"); 

let fecha = document.getElementById("vencimientoTarj");

let cvc = document.getElementById("cvc");

let btnAgregar = document.getElementById("boton-agregar");

let aviso  = document.getElementById("cartel");
/**
 * Luego se utiliza el "addEventListener()" para ralizar la validacion, si algun datos de la
 * tarjeta es erroneo , saltara una alerta.
 */

btnAgregar.addEventListener("click", () => {
    
    if((payform.parseCardType(num.value) === 'visa') && payform.validateCardNumber(num.value) 
    && payform.validateCardExpiry(fecha.value.substr(0,2), fecha.value.substr(3,6)) && payform.validateCardCVC(cvc.value)) {
        aceptar();   
    }

    else if (!payform.validateCardNumber(num.value)) {
        alert('El numero de tarjeta ' +  num.value + ' no es un número valido');
        limpiarAviso()
    }

    else if (!(payform.parseCardType(num.value) === 'visa')) {
        let nomTC = payform.parseCardType(num.value);
        alert("su tarjeta no es visa, es " + nomTC);
        limpiarAviso()
    }

    else if(!payform.validateCardExpiry(fecha.value.substr(0,2), fecha.value.substr(3,6))) {
        alert('Su tarjeta esta vencida o no tiene el formato MM/YYYY');
        limpiarAviso()
    }

    else if(!payform.validateCardCVC(cvc.value)){
        alert('El cvc de la tarjeta no es valido');
        limpiarAviso()
    }

});

function limpiarAviso() {
    aviso.innerHTML="";
}

function aceptar(){
    agregarTarjeta();
    aviso.innerHTML="Su tarjeta fue agregada con exito";
}

angular.module('myApp').controller("tarjetaControl",
        function($scope){
            $scope.nroTarjeta = 0
            $scope.agregarTarj = function(){
                if ($scope.nroTarj.length == 16){
                    $scope.nroTarjeta = $scope.nroTarj.substring(12, 16);
                }
                else{
                    $scope.nroTarjeta = $scope.nroTarj.substring(15, 19);
                };
            };
        }
);