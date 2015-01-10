app.factory('authentication', [function() {
	var key = 'user';

	function saveUserData(data) {
		localStorage.setItem(key, data);
	}

	function getUserData() {
		localStorage.getItem(key);
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData
	};
}]);