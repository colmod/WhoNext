var userModule = angular.module('userModule', ['ngRoute']);

userModule.controller('userController', function ($scope, $http , Users) {
    $scope.formData = {};
    $scope.loading = true;

    Users.get().success(function(data) {
        console.log("get is called in the userController");

        $scope.users = data;
        $scope.loading = false;
    });

//    $scope.login = function() {
//        console.log("login is called in the userController");
//        $scope.loading = true;
//
//        var retrievedPassword = "";
//        Users.get().success(function(data) {
//            console.log("get is called in the userController.login");
//            retrievedPassword = data.password;
//        });
//
//        console.log("data.password: " + data.password + "... retrievedPassword: " + retrievedPassword);
//
//        $scope.loading = false;
//
//        return data.password === retrievedPassword;
//    };

    $scope.login = function() {
        console.log("login is called in the userController");
    };

    $scope.deleteUser = function(id) {
        console.log("deleteUser is called in the userController");
        $scope.loading = true;

        Users.delete(id)
            .success(function(data) {
                $scope.users = data; // assign our new user of user
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
});
