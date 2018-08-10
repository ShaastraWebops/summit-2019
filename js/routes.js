(function () {
	angular.module('summit-router', ['ui.router'])
		.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html',
			})
			.state('about', {
				templateUrl: 'views/about.html',
			})
			.state('contact', {
				templateUrl: 'views/contact.html'
			})
			.state('registrations', {
				templateUrl: 'views/registrations.html'
			})
			.state('summit2019', {
				templateUrl: 'views/summit.html'
			})
			.state('editions', {
				templateUrl: 'views/editions.html'
			});
	}
})();