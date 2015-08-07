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
    .controller('RegisterCtrl', function ($scope, $rootScope, $mdDialog, Register, LoginService, $mdToast) {
      $scope.hide = function () {
        $mdDialog.hide();
      };
      $scope.cancel = function () {
        $mdDialog.cancel();
      };
      $scope.register = function (ev) {
        var user = {};
        $scope.formErrorMsg = "";

        user.name = $scope.name;
        user.phone = $scope.phoneNo;
        user.email = $scope.email;
        user.gender = $scope.gender;
        user.password = $scope.password;

        Register.register(user).then(function (data) {
          var toast = $mdToast.simple()
            .content("You have successfully registered")
            .action('OK')
            .highlightAction(true)
            .hideDelay(6000)
            .position("top right");
          $mdToast.show(toast).then(function () {
            $mdToast.hide();
          });
          $mdDialog.show({
            templateUrl: 'views/activateAccout.html',
            controller: 'ActivateAccountCtrl',
            parent: angular.element(document.body),
            targetEvent: ev,
          });
        }, function (data) {
          data = angular.fromJson(data);
          $scope.formErrorMsg = data.userMsg;

        });

      };
    });
});
