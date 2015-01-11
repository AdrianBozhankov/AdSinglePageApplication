app.controller('HomeCtrl', ['$scope', '$route', 'authentication', function($scope, $route, authentication) {
	$scope.pageTitle = 'Home';
	$scope.isLoggedIn = authentication.isLoggedIn();
	if (authentication.getUser()) {
		$scope.username = authentication.getUser().username;
	}

	$scope.removeUser = function removeUser() {
		authentication.removeUser();
		$route.reload();
	};
}]);