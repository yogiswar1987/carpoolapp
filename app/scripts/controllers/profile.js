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
    .controller('ProfileCtrl', function ($scope, $rootScope, Profile, $timeout,$mdDialog) {

      $scope.isEdit = false;
      $scope.userDetail = {};
      $scope.accountBalance = 0;
      $scope.getProfile = function () {
        Profile.getProfileinfo($rootScope.user.phone).then(function (data) {
          $scope.userDetail = data;
        });
      };
      $scope.getAccountBalance = function(){
      Profile.getAccountBalance($rootScope.user.phone).then(function (data) {
        $scope.accountBalance = data.balance;
      });
    };
      $scope.editprofileDetails = function () {
        $scope.isEdit = true;
      };
      $scope.getProfile();
      $scope.getAccountBalance();

      $scope.saveProfile = function () {
        Profile.saveProfile(name, gender).then(function (data) {
        //success message to user
        }, function (data) {

        });
      };
      $scope.chnagePassword = function(ev)
      {
        $mdDialog.show({
          templateUrl: 'views/changePassword.html',
          controller: 'ChangePasswordCtrl',
          parent: angular.element(document.body),
          targetEvent: ev,
        });
      };
      $scope.saveVehicle = function () {
        Profile.saveProfile(model,capacity,fare).then(function (data) {
          //success message to user
        }, function (data) {

        })
      };
      $timeout(function () {
        $('#profileMenu').click();
      }, 10);
      $scope.redeemPoints = function(){
        Profile.redeemPoints($rootScope.user.phone,$scope.points).then(function (data) {
          //success message to user
        }, function (data) {

        })
      };
    }).controller('ChangePasswordCtrl', function ($scope, $rootScope, Profile, $mdDialog) {
      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.changePassword = function()
      {
        Profile.changePassword($rootScope.user.phone,$scope.oldPassword,$scope.newPassword).then(function(data){

        },function(data){

        });
      };
    });
});
