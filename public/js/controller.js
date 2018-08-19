(function () {
	angular
		.module('summit-2019')
		.run(AnchorScrollFunc)
		.controller('mainCtrl', MainControllerFunc);

	AnchorScrollFunc.$inject = ['$anchorScroll'];

	function AnchorScrollFunc($anchorScroll) {
		$anchorScroll.yOffset = 50;
	}

	MainControllerFunc.$inject = ['$location', '$anchorScroll'];

	function MainControllerFunc($anchorScroll, $location) {
		var mCtrl = this;
		mCtrl.go = function (stateName) {
			$location
			console.log('====================================');
			console.log($location.hash);
			console.log('====================================');
			$location.hash('#' + stateName);
			$anchorScroll(stateName);
		};
	}
})();