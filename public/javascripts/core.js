var listApp = angular.module('listApp', ['ngRoute', 'whoNextControllers', 'whoNextServices'])//, 'listService'])//, 'userModule', 'userService'])

listApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/list.html',
            controller: 'listController as form'
        });
        $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'userController'
        });
        $routeProvider.otherwise({
            templateUrl: 'views/404.html'
        });
    }]);
