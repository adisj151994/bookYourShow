angular.module('bys')
	.controller('movieListCtrl', function TodoCtrl($scope, $routeParams, $location, $rootScope) {
		'use strict';
		console.log("in");
		var movs= [
		{
    "movieID": 1,
    "movieName": "0",
    "movieDuration": 0,
    "movieGenre": "0",
    "movieRated": "0",
    "movieRatings": 0,
    "movieDescription": "0"
  },
  {
    "movieID": 2,
    "movieName": "Deadpool",
    "movieDuration": 123,
    "movieGenre": "Comedy, action, adventure",
    "movieRated": "R",
    "movieRatings": 4.5,
    "movieDescription": "A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge."
  },
    {
    "movieID": 3,
    "movieName": "Inception",
    "movieDuration": 123,
    "movieGenre": "Sci-fi,thriller, action, adventure",
    "movieRated": "A",
    "movieRatings": 4.5,
    "movieDescription": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO."
  },
    {
    "movieID": 4,
    "movieName": "Suicide Squad",
    "movieDuration": 123,
    "movieGenre": "Action, Adventure, Fantasy ",
    "movieRated": "R",
    "movieRatings": 4.5,
    "movieDescription": "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse."
  },
    {
    "movieID": 5,
    "movieName": "Fight Club",
    "movieDuration": 123,
    "movieGenre": "Drama",
    "movieRated": "R",
    "movieRatings": 4.5,
    "movieDescription": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more."
  }];

		movs.shift();
		$scope.movies=movs;

		$scope.onClickMovie = function (movie) {
		    $rootScope.movieSelected = movie;
		    console.log($rootScope.movieSelected);
		    $location.path('/Map');
		};
});