define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the carpoolApp
   */
  angular.module('carpoolApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
