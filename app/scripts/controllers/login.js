define(['angular', 'services/login'], function (angular) {
  'use strict';
  angular
    .module('login').controller('LoginController', function ($scope, $location, $rootScope, LoginService, $mdDialog) {
      $scope.login = function (ev) {
        console.log('Logging in');
        if ($scope.userName && $scope.password && $scope.userName.length > 0 && $scope.password.length > 0) {
          LoginService.login($scope.userName, $scope.password).then(function (data) {
            $scope.userDetail = data;
            $rootScope.user = LoginService.getUser();
            $location.path("/home");
          }, function (data, status) {
            data = angular.fromJson(data);
            if (data.errorCode === 1007) {
              $mdDialog.show({
                templateUrl: 'views/activateAccout.html',
                controller: 'ActivateAccountCtrl',
                parent: angular.element(document.body),
                targetEvent: ev,
              });
            }
          });

        }
      };
      $scope.registeruser = function (ev) {
        $mdDialog.show({
          templateUrl: 'views/register.html',
          controller: 'RegisterCtrl',
          parent: angular.element(document.body),
          targetEvent: ev,
        });
      };
      $scope.forgotPassword = function(ev)
      {
        $mdDialog.show({
          templateUrl: 'views/forgotPassword.html',
          controller: 'forgotPasswordCtrl',
          parent: angular.element(document.body),
          targetEvent: ev,
        });
      }
    }
  ).controller('ActivateAccountCtrl', function ($scope, $location, $rootScope, LoginService, $mdDialog) {
      var user = LoginService.getUser();
      $scope.cancel = function () {
        $mdDialog.cancel();
      };
      $scope.activate = function () {
        LoginService.activateAccount(user.phone, $scope.code).then(function (data) {
          $scope.data = data;
          $rootScope.user = LoginService.getUser();
          $location.path("/home");
        }, function (data) {
        });
      }
    }).controller('forgotPasswordCtrl', function ($scope, $location, $rootScope, LoginService, $mdDialog) {
      $scope.cancel = function () {
        $mdDialog.cancel();
      };
      $scope.resend = function () {
        LoginService.resendPassword($scope.phone).then(function (data) {
          $scope.data = data;
          $mdDialog.hide();
        }, function (data) {
        });
      }
    });
});
