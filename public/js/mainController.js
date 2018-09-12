angular.module('mainController',[])
.controller('mainCtrl',function($http, $scope){
  $scope.viewForm = false;
  $scope.showNext = false;
  $scope.user = {};

  $scope.toggleForm = function() {
    $scope.viewForm = !$scope.viewForm;
  };

  $scope.continueForm = function() {
    $scope.showNext = true;
  };
  $scope.submitForm = function() {
    console.log($scope.user);
  };
});
