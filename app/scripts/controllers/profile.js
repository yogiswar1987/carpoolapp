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
    .controller('ProfileCtrl', function ($scope, $rootScope, Profile, $timeout, $mdDialog,$mdToast,$location) {

      $scope.isEdit = false;
      $scope.userDetail = {};
      $scope.getProfile = function () {
        Profile.getProfileinfo($rootScope.user.phone).then(function (data) {
          $scope.userDetail = data;
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
      $scope.getProfile();

      $scope.saveProfile = function () {
        Profile.saveProfile($scope.userDetail.userProfile).then(function (data) {
          //success message to user
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
      $scope.chnagePassword = function (ev) {
        $mdDialog.show({
          templateUrl: 'views/changePassword.html',
          controller: 'ChangePasswordCtrl',
          parent: angular.element(document.body),
          targetEvent: ev,
        });
      };
      $scope.saveVehicle = function () {
        Profile.saveProfile(model, capacity, fare).then(function (data) {
          //success message to user
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
      $timeout(function () {
        $('#profileMenu').click();
      }, 10);
      $scope.UploadImage = function (files) {
        var file = files[0];
        var fr = new FileReader();
        console.log('hello world');
        fr.readAsDataURL(file);

        fr.onload = (function(theFile) {
        return function(e) {
          console.log(e.target.result);
          Profile.uploadProfileImage(e.target.result.split('base64,')[1]).then(function (data) {
            $scope.userDetail.userProfile.imageUri = data;
            Profile.saveProfile($scope.userDetail.userProfile).then(function(data){
              $location.path('/profile');
              var toast = $mdToast.simple()
                .content("Image uploaded successfully")
                .action('OK')
                .position("top right")
                .highlightAction(false);
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
      })(file);
      };
    }).controller('ChangePasswordCtrl', function ($scope, $rootScope, Profile, $mdDialog) {
      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.changePassword = function () {
        Profile.changePassword($rootScope.user.phone, $scope.oldPassword, $scope.newPassword).then(function (data) {
          $mdDialog.hide();
          var toast = $mdToast.simple()
            .content('Pasword changed successfully')
            .action('OK')
            .highlightAction(false)
            .hideDelay(3000)
            .position("top right");
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

        });
      };
      });
});
