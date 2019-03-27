//controller code for login
(function() {
	'use strict';

	angular.module('app').controller('LoginController', LoginController);

	LoginController.$inject = [
		'$location',
		'AuthenticationService',
		'FlashService',
		'$cookieStore',
		'$rootScope'
	];
	function LoginController(
		$location,
		AuthenticationService,
		FlashService,
		$rootScope
	) {
		var vm = this;

		vm.login = login;

		(function initController() {
			// reset login status
			AuthenticationService.ClearCredentials();
			$rootScope.currentUserSignedIn = false;
		})();

		function login() {
			AuthenticationService.Login(vm.email, vm.password, function(res) {
				if (res.success) {
					AuthenticationService.SetCredentials(
						res.data.password,
						res.data.username
					);
					$location.path('/notes');
				} 
			});
		}
	}
})();