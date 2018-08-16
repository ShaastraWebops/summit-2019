(function () {
	angular.module('summit-2019')
		.controller('mainCtrl', MainControllerFunc);

	MainControllerFunc.$inject = ['$state'];

	function MainControllerFunc($state) {
		var mCtrl = this;
		mCtrl.go = function (stateName) {
			$state.go(stateName);
		};
	}
})();