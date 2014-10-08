angular.module('ListService', []).factory('List', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/list');
        },

        // call to POST and create a new geek
        create : function(geekData) {
            return $http.post('/api/list', listData);
        },

        // call to DELETE a geek
        delete : function(id) {
            return $http.delete('/api/geeks/' + id);
        }
    }

}]);