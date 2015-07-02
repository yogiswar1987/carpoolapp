define(['angular', 'services/login'], function (angular) {
  'use strict';
  angular
    .module('login').controller('LoginController', function ($scope, $location, $rootScope, LoginService) {
      $scope.login = function () {
        console.log('Logging in');
        if ($scope.userName && $scope.password && $scope.userName.length > 0 && $scope.password.length > 0) {
          LoginService.login($scope.userName, $scope.password);
          $rootScope.user = LoginService.getUser();
          $location.path("/home");
        }
      };
    }
  );
});
