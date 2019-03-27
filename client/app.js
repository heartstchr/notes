
(function() {
	'use strict';

	angular
		.module('app', [
			'ngRoute',
			'ngCookies',
			'ngSanitize',
			'ui.bootstrap',
			'angularMoment'
		])
		.config(config)
		.run(run);

	config.$inject = ['$routeProvider'];
	function config($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'AdminController',
				templateUrl: 'views/index.html',
				controllerAs: 'vm'
			})
			.when('/notes', {
				controller: 'AdminController',
				templateUrl: 'views/notes/index.html',
				controllerAs: 'vm'
			})
			.otherwise({ redirectTo: '/login' });
	}

	//Run Function.
	run.$inject = [
		'$rootScope',
		'$location',
		'AuthenticationService',
		'$route',
		'$cookies',
		'$http'
	];
	function run(
		$rootScope,
		$location,
		AuthenticationService,
		$cookies,
		$http
	) {
		$rootScope.location = $location;
		$rootScope.globals = $cookies.getObject('globals') || {};
		if ($rootScope.globals.currentUser) {
			$http.defaults.headers.common['Authorization'] =
				'Basic ' + $rootScope.globals.currentUser.authdata;
		}
		$rootScope.$on('$routeChangeStart', function(event, next) {
			if ($cookies.getObject('globals')) {
				if (next.$$route.data) {
					var authorizedRoles = next.$$route.data.authorizedRoles;
					if (
						!AuthenticationService.isAuthorized(authorizedRoles) &&
						!AuthenticationService.isAuthenticated()
					) {
						event.preventDefault();
						$location.path('/login');
					} else if (
						!AuthenticationService.isAuthorized(authorizedRoles) &&
						AuthenticationService.isAuthenticated()
					) {
						event.preventDefault();
						$location.path('/admin');
					}
				}
			} else if (next.$$route.originalPath == '/signup') {
				$location.path('/signup');
			} else {
				$location.path('/login');
			}
		});
	}

	MainController.$inject = ['$rootScope'];
	function MainController($rootScope) {
		var vm = this;
	}
})();
