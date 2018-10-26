

angular.module('mainController',[])
.controller('mainCtrl',function($http, $scope){
  $scope.registrationsOpen = true;
  $scope.viewForm = !$scope.registrationsOpen;
  $scope.showNext = false;
  $scope.user = {};
  $scope.errors = {};
  $scope.toggleForm = function() {
    $scope.viewForm = !$scope.viewForm;
  };

  $scope.continueForm = function() {
    $scope.showNext = true;
  };
  $scope.submitInterested = function(form) {
    if ($scope.registrationsOpen) {
      return;
    }
    $scope.submitted = true;
    $scope.submitError = true;
    $http({
      method: 'POST',
      url: './addInterested',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name: $scope.user.name,
        email: $scope.user.email,
        phone: $scope.user.phone,
        apptype: $scope.user.occ
         }
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.submitError = false;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.submitError = true;
        if( response.data.code == 11000 )
          $scope.submissionStatus = "Email Address or Phone Number Already in Use";
        else
          $scope.submissionStatus = "Something went wrong. Kindly contact the administrator.";
      });
  };
  $scope.submitForm = function(form) {
            $scope.submitted = true;
            $scope.submitError = true;
    if( form.$valid ){
          $http({
            method: 'POST',
            url: './add',
            headers: {
              'Content-Type': 'application/json'
            },
            data: $scope.user
            }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available
              $scope.submitError = false;
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              $scope.submitError = true;
              if( response.data.code == 11000 )
                $scope.submissionStatus = "Email Address or Phone Number Already in Use";
              else
                $scope.submissionStatus = "Something went wrong. Kindly contact the administrator.";
            });
          }
        else
          $scope.submissionStatus = "Kindly fill the form with proper details. Scroll up for more detail";
    }
});
