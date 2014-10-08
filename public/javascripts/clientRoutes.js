angular.module('clientRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })

        // nerds page that will use the NerdController
        .when('/list', {
            templateUrl: 'views/list.html',
            controller: 'ListController'
        })

    $locationProvider.html5Mode(true);

}]);