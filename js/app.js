(function () {
	angular.module('summit-2019', ['summit-router'])
		.directive('navBar', NavBarDirective);

	function NavBarDirective() {
		return {
			templateUrl: 'views/navbar.html'
		}
	}
})();