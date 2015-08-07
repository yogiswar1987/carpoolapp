define(['angular', 'services/login'], function (angular) {
  'use strict';
  angular
    .module('login').controller('LoginController', function ($scope, $location, $rootScope, LoginService, $mdDialog, $mdToast) {
      $scope.login = function (ev,form) {
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
            } else {
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
            }
            $scope.password = "";
            form.$setPristine();
            form.$setUntouched();
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
      $scope.forgotPassword = function (ev) {
        $mdDialog.show({
          templateUrl: 'views/forgotPassword.html',
          controller: 'forgotPasswordCtrl',
          parent: angular.element(document.body),
          targetEvent: ev,
        });
      }
    }
  ).controller('ActivateAccountCtrl', function ($scope, $location, $rootScope, LoginService, $mdDialog, $mdToast) {
      var user = LoginService.getUser();
      $scope.cancel = function () {
        $mdDialog.cancel();
      };
      $scope.activate = function () {
        LoginService.activateAccount(user.phone, $scope.code).then(function (data) {
          $scope.data = data;
          var toast = $mdToast.simple()
            .content("Account activation successful please login now")
            .action('OK')
            .position("top right")
            .highlightAction(false);
          $mdToast.show(toast).then(function () {
            $mdToast.hide();
          });
          $mdDialog.hide();
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
      $scope.reSendActivationCode = function () {
        LoginService.reSendActivationCode(user.phone).then(function (data) {
          $scope.data = data;
          var toast = $mdToast.simple()
            .content('Activation code sent successfully')
            .action('OK')
            .highlightAction(false)
            .hideDelay(3000)
            .position("top right");
          $mdToast.show(toast).then(function () {
            $mdToast.hide();
          });

        },function(data){
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
    }).controller('forgotPasswordCtrl', function ($scope, $location, $rootScope, LoginService, $mdDialog) {
      $scope.cancel = function () {
        $mdDialog.cancel();
      };
      $scope.resend = function () {
        LoginService.resendPassword($scope.phone).then(function (data) {
          $scope.data = data;
          var toast = $mdToast.simple()
            .content("Password rest Successful")
            .action('OK')
            .highlightAction(false)
            .hideDelay(3000)
            .position("top right");
          $mdToast.show(toast).then(function () {
            $mdToast.hide();
          });
          $mdDialog.hide();
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
      }
    });
});
