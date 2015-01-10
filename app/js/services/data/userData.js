app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {
	function registerUser(user) {
		return $resource(baseServiceUrl + 'user/register')
					.save(user)
					.$promise
					.then(function(data) {
						authentication.saveUser(angular.toJson(data));
					});
	}

	function loginUser(user) {
		
	}

	function logoutUser() {
		
	}

	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser
	};
}]);