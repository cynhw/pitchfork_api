var app = angular.module('AlbumApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/views/albums.html'
	})
	.when('/:year', {
		templateUrl: 'app/views/show-year.html'
	})
	.when('/:id', {
		templateUrl: 'app/views/show-album.html'
	})
	otherwise({
		templateUrl: 'app/views/404.html'
	});

	$locationProvider.html5Mode(true);
}])