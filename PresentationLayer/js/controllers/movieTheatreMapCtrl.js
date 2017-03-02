angular.module('bys')
	.controller('movieTheatreMapCtrl', function TodoCtrl($scope, $routeParams) {
		'use strict';
        var mtm=[
  {
    "movieTheatreMappingID": 1,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "13-2-2017:M",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 2,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "13-2-2017:A",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 3,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "13-2-2017:N",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 4,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "14-2-2017:M",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 5,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "14-2-2017:A",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 6,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "14-2-2017:N",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 7,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "15-2-2017:M",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 8,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "15-2-2017:A",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 9,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "15-2-2017:N",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 10,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "16-2-2017:M",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 11,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "16-2-2017:A",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 12,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "16-2-2017:N",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 13,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "17-2-2017:M",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 14,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "17-2-2017:A",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 15,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "17-2-2017:N",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 16,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "18-2-2017:M",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 17,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "18-2-2017:A",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 18,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "18-2-2017:N",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 19,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "19-2-2017:M",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 20,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "19-2-2017:A",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 21,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 1,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "0Z0000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S1",
      "screenMatrix": "0Z0000000"
    },
    "showDate": "19-2-2017:N",
    "dynSeatMatrix": "0Z0000000"
  },
  {
    "movieTheatreMappingID": 22,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "13-2-2017:M",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 23,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "13-2-2017:A",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 24,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "13-2-2017:N",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 25,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "14-2-2017:M",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 26,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "14-2-2017:A",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 27,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "14-2-2017:N",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 28,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "15-2-2017:M",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 29,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "15-2-2017:A",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 30,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "15-2-2017:N",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 31,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "16-2-2017:M",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 32,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "16-2-2017:A",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 33,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "16-2-2017:N",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 34,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "17-2-2017:M",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 35,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "17-2-2017:A",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 36,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "17-2-2017:N",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 37,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "18-2-2017:M",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 38,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "18-2-2017:A",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 39,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "18-2-2017:N",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 40,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "19-2-2017:M",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 41,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "19-2-2017:A",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 42,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 2,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "Z00000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S2",
      "screenMatrix": "Z00000000"
    },
    "showDate": "19-2-2017:N",
    "dynSeatMatrix": "Z00000000"
  },
  {
    "movieTheatreMappingID": 43,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "13-2-2017:M",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 44,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "13-2-2017:A",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 45,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "13-2-2017:N",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 46,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "14-2-2017:M",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 47,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "14-2-2017:A",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 48,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "14-2-2017:N",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 49,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "15-2-2017:M",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 50,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "15-2-2017:A",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 51,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "15-2-2017:N",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 52,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "16-2-2017:M",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 53,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "16-2-2017:A",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 54,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "16-2-2017:N",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 55,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "17-2-2017:M",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 56,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "17-2-2017:A",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 57,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "17-2-2017:N",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 58,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "18-2-2017:M",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 59,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "18-2-2017:A",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 60,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "18-2-2017:N",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 61,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "19-2-2017:M",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 62,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "19-2-2017:A",
    "dynSeatMatrix": "00Z000000"
  },
  {
    "movieTheatreMappingID": 63,
    "objMovies": {
      "movieID": 1,
      "movieName": "0",
      "movieDuration": 0,
      "movieGenre": "0",
      "movieRated": "0",
      "movieRatings": 0,
      "movieDescription": "0"
    },
    "objTheatreScreenMappind": {
      "theatreScreenMappingID": 3,
      "objTheatre": {
        "theatreID": 1,
        "theatreName": "00Z000000",
        "theatreRatings": 1,
        "theatreAddress": "PVR Whitefield"
      },
      "screenID": "S3",
      "screenMatrix": "00Z000000"
    },
    "showDate": "19-2-2017:N",
    "dynSeatMatrix": "00Z000000"
  }
    ];
    var a=[];
    console.log(mtm);
    for(var i=0;i<63;i++){if(i%3==0){a.push(mtm.slice(i,i+3));}}
    console.log(a);
    a.sort(function(b,c){ if(b[0].showDate.split(':')[0]<c[0].showDate.split(':')[0]){return -1;} else
    if(b[0].showDate.split(':')[0]>c[0].showDate.split(':')[0]) { return 1;  } else {return 0;} });
    console.log(a);
    var b=[];
    for(var i=0;i<a.length;i++){for(var j=0;j<3;j++){b.push(a[i][j]);}}
    console.log(b);
    mtm=[];
    for(var i=0;i<63;i++){if(i%9==0){mtm.push(b.slice(i,i+9));}}
    console.log(mtm);

    $scope.MTMap=mtm;

    var classes = [];
    classes=[[],[],[],[],[],[],[]];

    var count =0;
		for(var i=0;i<7;i++)
        {
            for(var j=0;j<9;j++)
            {
                if(mtm[i][j].objMovies.movieID==1)
                {
                    classes[i][j]="grey";
                }
                else
                {
                    classes[i][j]="green";
                }

            }
        }
        $scope.x=7;
        $scope.y=9;
        $scope.class=classes;

        $scope.change = function (x, y) {
            if (classes[x][y] == "grey") {
                classes[x][y] = "green";
                $scope.class[x][y] = classes[x][y];

            }
            else {
                classes[x][y] = "grey";
                $scope.class[x][y] = classes[x][y];
            }
        };
        var clss = [];
        var d;
        $scope.display = function (p, q) {
            d = mtm[p][q].dynSeatMatrix;
            d.split("");
            clss = [];
            for(var v=0;v<9;v++)
            {
                if (d[v] == "0")
                {
                    clss.push("grey");
                }
                else if(d[v]=="Z")
                {
                    clss.push("not");
                }
                else
                {
                    clss.push("green");
                }

            }
            $scope.d = d;
            $scope.classo = clss;
        };
});