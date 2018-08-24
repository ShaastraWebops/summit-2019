(function () {
	angular.module('summit-2019', [])
		.directive('navBar', NavBarDirective)
		.directive('home', HomeDirective)
		.directive('about', AboutDirective)
		.directive('editions', EditionsDirective)
		.directive('summit', SummitDirective)
		.directive('registrations', RegistrationsDirective)
		.directive('contact', ContactDirective)
		.directive('footer', FooterDirective);

	function NavBarDirective() {
		return {
			templateUrl: 'views/navbar.html'
		};
	}

	function HomeDirective() {
		return {
			templateUrl: 'views/home.html'
		};
	}

	function AboutDirective() {
		return {
			templateUrl: 'views/about.html'
		};
	}

	function EditionsDirective() {
		return {
			templateUrl: 'views/editions.html'
		};
	}

	function SummitDirective() {
		return {
			templateUrl: 'views/summit.html'
		};
	}

	function RegistrationsDirective() {
		return {
			templateUrl: 'views/registrations.html'
		};
	}

	function ContactDirective() {
		return {
			templateUrl: 'views/contact.html'
		};
	}

	function FooterDirective(){
		return {
			templateUrl: '/views/footer.html'
		};
	}
})();
