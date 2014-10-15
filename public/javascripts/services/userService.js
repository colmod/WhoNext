angular.module('userService', []).factory('Users', ['$http', function($http) {
    console.log("adding factory");
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