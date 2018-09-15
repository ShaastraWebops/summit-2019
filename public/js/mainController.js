

angular.module('mainController',[])
.controller('mainCtrl',function($http, $scope){
  $scope.viewForm = false;
  $scope.showNext = false;
  $scope.user = {};
  $scope.errors = {};
  $scope.toggleForm = function() {
    $scope.viewForm = !$scope.viewForm;
  };

  $scope.continueForm = function() {
    $scope.showNext = true;
  };
  $scope.submitForm = function(form) {
            $scope.submitted = true;
            $scope.submitError = true;
    if( form.$valid ){

        if( form.apptype.$viewValue == "student"){
            
          $http({
            method: 'POST',
            url: './add',
            headers: {
              'Content-Type': 'application/json'
            },
            data: { 
              name: form.Name.$viewValue,
              email: form.Email.$viewValue,
              phone: form.Phone.$viewValue,
              apptype: form.apptype.$viewValue,
              academicYear: form.Year.$viewValue,
              branch: form.Branch.$viewValue,
              institute: form.Institution.$viewValue,
              question1: form.stud_q1.$viewValue,
              question2: form.stud_q2.$viewValue,
              question3: form.stud_q3.$viewValue,
              question4: form.stud_q4.$viewValue,
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
            }
        
        else if( form.apptype.$viewValue == "startup"){
            
          $http({
            method: 'POST',
            url: './add',
            headers: {
              'Content-Type': 'application/json'
            },
            data: { 
              name: form.Name.$viewValue,
              email: form.Email.$viewValue,
              phone: form.Phone.$viewValue,
              apptype: form.apptype.$viewValue,
              startupName: form.startup_name.$viewValue,
              estYear: form.est_year.$viewValue,
              relLinks: form.startup_links.$viewValue,
              question1: form.startup_q1.$viewValue,
              question2: form.startup_q2.$viewValue
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
            }

        else if( form.apptype.$viewValue == "professional" && form.apptype1.$viewValue == "sports_pro"){
            
          $http({
            method: 'POST',
            url: './add',
            headers: {
              'Content-Type': 'application/json'
            },
            data: { 
              name: form.Name.$viewValue,
              email: form.Email.$viewValue,
              phone: form.Phone.$viewValue,
              apptype: form.apptype.$viewValue,
              apptype1: form.apptype1.$viewValue,
              position: form.position.$viewValue,
              company: form.company.$viewValue,
              field: form.field.$viewValue,
              expYear: form.years.$viewValue,
              relLinks: form.relLinks.$viewValue
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
            }
        
        else if( form.apptype.$viewValue == "professional" && form.apptype1.$viewValue == "other_pro"){
            
          $http({
            method: 'POST',
            url: './add',
            headers: {
              'Content-Type': 'application/json'
            },
            data: { 
              name: form.Name.$viewValue,
              email: form.Email.$viewValue,
              phone: form.Phone.$viewValue,
              apptype: form.apptype.$viewValue,
              apptype1: form.apptype1.$viewValue,
              position: form.position.$viewValue,
              company: form.company.$viewValue,
              industry: form.industry.$viewValue,
              expYear: form.years.$viewValue,
              question1: form.pro_q1.$viewValue,
              question2: form.pro_q2.$viewValue,
              question3: form.pro_q3.$viewValue
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
            }
          }
        else
          $scope.submissionStatus = "Kindly fill the form with proper details. Scroll up for more detail";
    }
});
