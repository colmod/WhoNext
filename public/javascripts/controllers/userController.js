angular.module('userModule', []).controller('userController', ['$scope', '$http', 'Users', function($scope, $http , Users) {
    $scope.formData = {};
    $scope.loading = true;

    Users.get().success(function(data) {
        console.log("get is called in the userController");
        $scope.users = data;
        $scope.loading = false;
    });

    $scope.register = function() {
        console.log("register is called in the userController");
        $scope.loading = true;

        if($scope.formData.username != undefined) {
            Users.create($scope.formData).success(function(data) {
                $scope.loading = false;
                $scope.formData = {};
                $scope.users = data;
            });
        }
    };

    $scope.login = function() {
        console.log("login is called in the userController [" + $scope.formData.username + "]");
        $scope.loading = true;

        if($scope.formData.username != undefined) {
            Users.get("username", $scope.formData.name).success(function(data) {
                $scope.loading = false;
                $scope.formData = {};
                $scope.users = data;
            });
        }
    };
    $scope.deleteUser = function(id) {
        console.log("deleteUser is called in the userController");
        $scope.loading = true;

        Users.delete(id)
            .success(function(data) {
                $scope.users = data; // assign our new list of user
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}]);
