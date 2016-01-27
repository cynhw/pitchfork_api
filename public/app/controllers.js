angular.module('AlbumCtrls', ['AlbumServices'])
.controller('HomeCtrl', ['$scope', 'Year', function($scope, Year){
		// $scope.albums = [];

		Year.getAlbumsByYear('2014').success(function(results){
			console.log(results);
			$scope.results = results;
		});
	}])
.controller('NewCtrl', ['$scope','$location', 'Album', function($scope, $location, Album) {
	$scope.album = {
		artist: '',
		albumTitle: '',
		year: '',
		rank: '',
		image: ''
	};

	$scope.newAlbum = function() {
		Album.save($scope.album, function success(data) {
			$location.path('/');
		}, function error(data) {
			console.log(data);
		});
	}

}])