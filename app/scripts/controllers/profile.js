define(['angular', 'services/profile'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:ProfileCtrl
   * @description
   * # ProfileCtrl
   * Controller of the carpoolApp
   */
  angular.module('carpoolApp.controllers.ProfileCtrl', ['carpoolApp.services.Profile'])
    .controller('ProfileCtrl', function ($scope, $rootScope, Profile) {

      $scope.getProfile = function () {
        Profile.getProfileinfo($rootScope.user.userName).then(function(data){

          $scope.userDetail = data;
        })
      };
      $scope.getProfile();
    });
});
