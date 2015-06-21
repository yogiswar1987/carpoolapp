define(['angular','jquery'], function (angular,jquery) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the carpoolApp
   */
  angular.module('carpoolApp.controllers.MainCtrl', ['ngMaterial', 'ui.bootstrap'])
    .controller('MainCtrl', function ($scope) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      $scope.input1 = 'yogesh';
      $scope.input2 = 'yo@ge.com';
      $scope.input3 = '';

      $scope.onClick = function () {
        alert($scope.input1 + $scope.input2);
      };
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
