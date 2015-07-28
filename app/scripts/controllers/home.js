define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:HomeCtrl
   * @description
   * # HomeCtrl
   * Controller of the carpoolApp
   */
  angular.module('home', [])
    .controller('HomeCtrl', function ($scope,$rootScope,$location,$timeout) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      $scope.showMenuBar = function () {
        $rootScope.showMenu = true;
        $location.path("/profile");

      }

      $timeout(function() {
        $('#homeMenu').click();

      },10);
    });
});
