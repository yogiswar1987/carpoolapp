define(['angular', 'services/profile', 'controllers/menu'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:ProfileCtrl
   * @description
   * # ProfileCtrl
   * Controller of the carpoolApp
   */
  angular.module('carpoolApp.controllers.ProfileCtrl', ['carpoolApp.services.Profile', 'carpoolApp.controllers.MenuCtrl'])
    .controller('ProfileCtrl', function ($scope, $rootScope, Profile, $timeout) {

      $scope.isEdit = false;
      $scope.getProfile = function () {
        Profile.getProfileinfo($rootScope.user.userName).then(function (data) {
          $scope.userDetail = data;
        })
      };
      $scope.editprofileDetails = function () {
        $scope.isEdit = true;
      };
      $scope.getProfile();

      $timeout(function () {
        $('#profileMenu').click();
      }, 10);
    });
});
