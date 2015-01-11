app.controller('RegisterCtrl', ['$scope', '$location', '$route', 'townsData', 'userData', function($scope, $location, $route, townsData, userData) {
	townsData.getTowns()
		.$promise
		.then(function(data) {
			$scope.towns = data;
		});

	$scope.register = function(user) {
		userData.register(user);
		$location.path('/');
	};

	$scope.cancelRegistration = function() {
		$location.path('/');
	};
}]);