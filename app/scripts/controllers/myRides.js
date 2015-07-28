define(['angular','controllers/menu'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:ProfileCtrl
   * @description
   * # ProfileCtrl
   * Controller of the carpoolApp
   */
  angular.module('carpoolApp.controllers.MyRidesCtrl', ['carpoolApp.controllers.MenuCtrl'])
    .controller('MyRidesCtrl', function ($scope, $rootScope,$timeout) {


      $timeout(function() {
        $('#myRidesMenu').click();
      },10);

    });
});
