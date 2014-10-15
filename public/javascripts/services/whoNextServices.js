var whoNextServices = angular.module('whoNextServices', []);

whoNextServices.factory('Lists', ['$http', function($http) {
    console.log("adding lists factory");
    return {
        // call to get all lists
        get : function() {
            console.log("get being called in list services");
            return $http.get('/api/list');
        },

        // call to POST and create a new list
        create : function(data) {
            return $http.post('/api/list', data);
        },

        // call to DELETE a list
        delete : function(id) {
            return $http.delete('/api/list/' + id);
        }
    }
}]);

whoNextServices.factory('Users', ['$http', function($http) {
        console.log("adding users factory");
        return {
            // call to get all users
            get : function() {
                console.log("get being called in user services");
                return $http.get('/api/user');
            },

            // call to POST and create a new user
            create : function(data) {
                return $http.post('/api/user', data);
            },

            // call to POST and create a new user
            login : function(data) {
                return $http.get('/api/user/login', data);
            },

            // call to DELETE a user
            delete : function(id) {
                return $http.delete('/api/user/' + id);
            }
        }

    }]);