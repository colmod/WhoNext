angular.module('userService', []).factory('Users', ['$http', function($http) {
    console.log("adding factory for user");
    return {
        // call to get all lists
        get : function() {
            console.log("get being called in user services");
            return $http.get('/api/user');
        },

        // call to POST and create a new list
        create : function(data) {
            return $http.post('/api/user', data);
        },

        // call to DELETE a list
        delete : function(id) {
            return $http.delete('/api/user/' + id);
        }
    }

}]);