var listModule = angular.module('listModule', []);

listModule.controller('listController', function ($scope, $http , Lists) {
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
});