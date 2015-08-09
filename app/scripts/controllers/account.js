define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:AccountCtrl
   * @description
   * # AccountCtrl
   * Controller of the carpoolApp
   */
  angular.module('carpoolApp.controllers.AccountCtrl', ['carpoolApp.services.Account'])
    .controller('AccountCtrl', function ($scope, $rootScope, Account, $timeout, $mdDialog, $mdToast) {

      $scope.accountBalance = 0;
      $scope.getAccountBalance = function () {
        Account.getAccountBalance($rootScope.user.phone).then(function (data) {
          $scope.accountBalance = data.balance;
        }, function (data) {
          data = angular.fromJson(data);
          var toast = $mdToast.simple()
            .content(data.userMsg)
            .action('OK')
            .highlightAction(false)
            .hideDelay(3000)
            .theme("success-toast")
            .position("top right");
          $mdToast.show(toast).then(function () {
            $mdToast.hide();
          });
        });
      };

      $scope.getAccountBalance();
      $scope.redeemPoints = function () {
        Account.redeemPoints($rootScope.user.phone, $scope.points).then(function (data) {
          var toast = $mdToast.simple()
            .content("Image uploaded successfully")
            .action('OK')
            .position("top right")
            .highlightAction(false);
          $mdToast.show(toast).then(function () {
            $mdToast.hide();
          });
        }, function (data) {
          data = angular.fromJson(data);
          var toast = $mdToast.simple()
            .content(data.userMsg)
            .action('OK')
            .highlightAction(false)
            .hideDelay(3000)
            .theme("success-toast")
            .position("top right");
          $mdToast.show(toast).then(function () {
            $mdToast.hide();
          });
        })
      };
    });
});
