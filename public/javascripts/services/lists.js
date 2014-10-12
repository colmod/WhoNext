angular.module('listService', []).factory('Lists', ['$http', function($http) {
    console.log("adding factory");
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