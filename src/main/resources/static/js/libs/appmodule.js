(function () {
    var app = angular.module('modone', []);
    var cnv = document.getElementById("myCanvas");
//    var ctx = cnv.getContext("2d");
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

        $scope.getCanvas = function (item) {
            var configList = {
                method: "GET",
                url: "blueprints/"+$scope.Figura
            };
            var response = $http(configList);
            response.success(function (data, status, headers, config) {
                $scope.entries = data;
            });
            response.error(function (data, status, headers, config) {
                alert("The petition has failed. HTTP Status:" + status);
            });
        };

    });
})();






