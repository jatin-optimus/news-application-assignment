/* global angular */

// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller
app.controller("InstantSearchController",InstantSearchControllerobject);
function InstantSearchControllerobject($scope,$http){

  $http.get('https://webhose.io/search?token=644d9a6d-6af4-43b8-ae1e-aa6feaebe1ed&format=json&q=modi')
          .success(function (arr) {
                JSON.stringify(arr);
                 $scope.items = angular.fromJson(arr);
    });



}
