define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:RegisterCtrl
   * @description
   * # RegisterCtrl
   * Controller of the carpoolApp
   */
  angular.module('carpoolApp.controllers.RegisterCtrl', [])
    .controller('RegisterCtrl', function ($scope,$mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.register = function() {
        $mdDialog.hide("hdjhfkjh");
      };
    });
});
