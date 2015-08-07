angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos1');
			},
			create : function(todoData) {
				return $http.post('/api/todos1', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos1/' + id);
			}
		}
	}]);