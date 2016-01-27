angular.module('AlbumCtrls', ['AlbumServices'])
.controller('HomeCtrl', ['$scope', 'Year', function($scope, Year){
		// $scope.albums = [];

		Year.getAlbumsByYear('2014').success(function(results){
			console.log(results);
			$scope.results = results;
		});
	}])