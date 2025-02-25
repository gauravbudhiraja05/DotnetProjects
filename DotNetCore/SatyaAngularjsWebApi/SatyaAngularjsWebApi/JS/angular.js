﻿var app = angular.module('myApp', []);
app.controller('employeeController', ['$scope', '$http', employeeController]);

function employeeController($scope, $http) {
    $scope.loading = true;
    $scope.updateShow = false;
    $scope.addShow = true;
    $http.get('/api/EmployeeAPI/').success(function (data) {
        $scope.employees = data;
    }).error(function () {
        $scope.error = "An Error has occured while loading posts!";
    });
    $scope.add = function () {
        $scope.loading = true;
        $http.post('/api/EmployeeAPI/', this.newemployee).success(function (data) {
            $scope.employees = data;
            $scope.updateShow = false;
            $scope.addShow = true;
            $scope.newemployee = '';
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving employee! " + data;
        });
    }
    $scope.edit = function () {
        var Id = this.employee.Id;
        $http.get('/api/EmployeeAPI/' + Id).success(function (data) {
            $scope.newemployee = data;
            $scope.updateShow = true;
            $scope.addShow = false;
        }).error(function () {
            $scope.error = "An Error has occured while loading posts!";
        });
    }
    $scope.update = function () {
        $scope.loading = true;
        console.log(this.newemployee);
        $http.put('/api/EmployeeAPI/', this.newemployee).success(function (data) {
            $scope.employees = data;
            $scope.updateShow = false;
            $scope.addShow = true;
            $scope.newemployee = '';
        }).error(function (data) {
            $scope.error = "An Error has occured while Updating employee! " + data;
        });
    }
    $scope.delete = function () {
        var Id = this.employee.Id;
        $scope.loading = true;
        $http.delete('/api/EmployeeAPI/' + Id).success(function (data) {
            $scope.employees = data;
        }).error(function (data) {
            $scope.error = "An Error has occured while Delete employee! " + data;
        });
    }
    $scope.cancel = function () {
        $scope.updateShow = false;
        $scope.addShow = true;
        $scope.newemployee = '';
    }
} 