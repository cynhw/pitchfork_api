var app = angular.module('AlbumApp', ['ngRoute', 'AlbumCtrls']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/views/albums.html',
		controller: 'HomeCtrl'
	})
	.when('/year/:year', {
		templateUrl: 'app/views/show-year.html'
	})
	.when('/album/:id', {
		templateUrl: 'app/views/show-album.html'
	})
	.otherwise({
		templateUrl: 'app/views/404.html'
	});

	$locationProvider.html5Mode(true);
}])