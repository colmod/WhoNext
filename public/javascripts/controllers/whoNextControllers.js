var whoNextControllers = angular.module('whoNextControllers', []);

whoNextControllers.controller('listController', ['$scope', '$http' , 'Lists', function ($scope, $http , Lists) {
    $scope.formData = {};
    $scope.loading = true;

    Lists.get().success(function(data) {
        console.log("get is called in the listController");
        $scope.wnLists = data;
        $scope.loading = false;
    });

    $scope.createList = function() {
        console.log("createList is called in the listController");
        $scope.loading = true;

        if($scope.formData.name != undefined) {
            Lists.create($scope.formData).success(function(data) {
                $scope.loading = false;
                $scope.formData = {};
                $scope.wnLists = data;
            });
        }
    };

    $scope.deleteList = function(id) {
        console.log("deleteList is called in the listController");
        $scope.loading = true;

        Lists.delete(id)
            .success(function(data) {
                $scope.lists = data; // assign our new list of list
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}]);

whoNextControllers.controller('userController', ['$scope', '$http' , 'Users', function ($scope, $http , Users) {
    $scope.formData = {};
    $scope.loading = true;

    Users.get().success(function(data) {
        console.log("get is called in the userController");

        $scope.users = data;
        $scope.loading = false;
    });

    $scope.createUser = function() {
        console.log("createUser is called in the listController");
        $scope.loading = true;

        if($scope.formData.username != undefined) {
            Users.create($scope.formData).success(function(data) {
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
                $scope.users = data; // assign our new user of user
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}]);
