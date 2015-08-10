define(['angular','jquery'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the carpoolApp
   */
  angular.module('main', ['ngMaterial', 'ui.bootstrap'])
    .controller('MainCtrl', function ($scope,$rootScope,$location) {

      $rootScope.showMenu = false;

      $scope.myInterval = 5000;
      var slides = $scope.slides = [];
      $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
          image: 'images/QR'+(slides.length+1)+'.jpg',
          text: ['Go green', 'Make friends', 'Reduce traffic'][slides.length % 4]
        });
      };
      for (var i = 0; i < 3; i++) {
        $scope.addSlide();
      }
    });
});
