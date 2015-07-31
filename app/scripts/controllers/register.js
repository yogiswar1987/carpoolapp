define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:RegisterCtrl
   * @description
   * # RegisterCtrl
   * Controller of the carpoolApp
   */
  angular.module('carpoolApp.controllers.RegisterCtrl', ['carpoolApp.services.Register'])
    .controller('RegisterCtrl', function ($scope,$mdDialog,Register,LoginService) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.register = function() {
       var user = {};
        user.name = $scope.name;
        user.phone = $scope.phoneNo;
        user.email = $scope.email;
        user.gender = $scope.gender;
        user.password = $scope.password;

        Register.register(user).then(function(data){

          LoginService.login(user.name, user.password);
          $rootScope.user = LoginService.getUser();
          $location.path("/home");

        });
      };
    });
});
