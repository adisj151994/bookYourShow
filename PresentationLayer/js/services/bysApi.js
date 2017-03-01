angular.module('bys')
	.factory('bysSer', function ($http, $injector) {
		'use strict';
		debugger;
		return $injector.get('bysApi');
	})
	.factory('bysApi', function ($resource) {
		'use strict';
		debugger;
		var api = {

			get: function () {

				var getMovies= ['Deadpool','Suicide Squad','Inception','Fight Club'];

				return getMovies;

			}
		};

		return api;
	});