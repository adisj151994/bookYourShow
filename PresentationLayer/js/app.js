
angular.module('bys', ['ngRoute', 'ngResource'])
	.config(function ($routeProvider) {
	    'use strict';

	    $routeProvider
			.when('/', {
			    controller: 'movieListCtrl',
			    templateUrl: 'partial/movieList.html'
			    //template: '<div class="text-center" ng-repeat="movie in movies" style="position:relative;margin:30px;background-color:#eee ;width: auto  ; height:100px">{{movie}}</div>',
			})
			.when('/Map', {
			    controller: 'movieTheatreMapCtrl',
			    templateUrl: 'partial/movieTheatreMap.html'
			    //template: '<div class="text-center" ng-repeat="movie in movies" style="position:relative;margin:30px;background-color:#eee ;width: auto  ; height:100px">{{movie}}</div>',
			})
			.otherwise({
			    redirectTo: '/'
			});
        ////////
	});
