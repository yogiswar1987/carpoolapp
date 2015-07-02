define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the carpoolApp
   */
  angular.module('main', ['ngMaterial', 'ui.bootstrap'])
    .controller('MainCtrl', function ($scope,$location) {
      $scope.myInterval = 5000;
      var slides = $scope.slides = [];
      $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
          image: 'http://placekitten.com/' + newWidth + '/300',
          text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
      };
      for (var i = 0; i < 4; i++) {
        $scope.addSlide();
      }
    });
});
