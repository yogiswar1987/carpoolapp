define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:HomeCtrl
   * @description
   * # HomeCtrl
   * Controller of the carpoolApp
   */
  angular.module('carpoolApp.controllers.HomeCtrl', [])
    .controller('HomeCtrl', function ($scope) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
