angular.module('AlbumServices', ['ngResource'])
.factory('Album', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/albums/:id');
}])
.factory('Year', ['$http', function($http) {
	var dataFactory = {}

	dataFactory.getAlbumsByYear = function(year){
		return $http.get('http://localhost:3000/api/albums/year/' + year);
	}

	return dataFactory;
}])