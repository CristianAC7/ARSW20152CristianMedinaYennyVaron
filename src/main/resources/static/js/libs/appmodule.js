(function () {
    var app = angular.module('modone', []);

    app.controller("plan_control", function ($scope, $log, $http) {
        $scope.entry = {Figura: "Nombre"};
        $log.debug('se creo el $scope');
        $scope.entries = [];

        $scope.loadData = function () {
            var configList = {
                method: "GET",
                url: "blueprints"
            };
            var response = $http(configList);
            response.success(function (data, status, headers, config) {
                $scope.entries = data;
            });
            response.error(function (data, status, headers, config) {
                alert("The petition has failed. HTTP Status:" + status);
            });
        };
        $scope.loadData();

        $scope.getCanvas = function () {
            var cnv = document.getElementById("myCanvas");
            var ctx = cnv.getContext("2d");

            var configList = {
                method: "GET",
                url: "blueprints/" + $scope.entry.Figura
            };
            var response = $http(configList);
            response.success(function (data, status, headers, config) {
                var puntos = data.points;
                for (i = 0; i < puntos.length; i++) {
                    ctx.moveTo(puntos[i].x, puntos[i].y);
                    ctx.lineTo(puntos[(i+1)%puntos.length].x, puntos[(i+1)%puntos.length].y);
                    ctx.stroke();          
                }

            });
            response.error(function (data, status, headers, config) {
                alert("The petition has failed. HTTP Status:" + status);
            });
        };

    });
})();






