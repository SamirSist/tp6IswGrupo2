nroTarjeta = 0
angular.module('myApp', []).controller("myCtrl", 
    function ($scope) {
        $scope.articulos = [[0,"Porción tarta de verdura", 1, 100],
                            [1,"Coca-cola 150ml", 1, 100]];
        $scope.total = 100 //Por el envío
        $scope.articulos.forEach(articulo => $scope.total += articulo[3])
        $scope.eliminarItem = function(item){
            let pos = $scope.articulos.indexOf(item)
            $scope.elementoEliminado = $scope.articulos.splice(pos, 1);
            $scope.total = 100 //Por el envío
            $scope.articulos.forEach(articulo => $scope.total += articulo[3])
            //se reseta para que el usario vuelva a poner el efectivo
            document.getElementById("montoEfectivo").value="";

            //se resetea el titulo de vuelto
            vuelto.innerHTML = "";
        };
    }
);



