define(['angular','jquery','jquery-ui'], function (angular,$) {
  'use strict';

  /**
   * @ngdoc function
   * @name carpoolApp.controller:ProfileCtrl
   * @description
   * # ProfileCtrl
   * Controller of the carpoolApp
   */
  angular.module('carpoolApp.controllers.MenuCtrl', [])
    .controller('MenuCtrl',['$scope','$rootScope','$location', function ($scope, $rootScope,$location) {

      $scope.rotateMenu = function($event) {

        console.log("rotate");

        var element = $event.currentTarget;
        var posTop = element.offsetTop;
        var posLeft = element.offsetLeft;

        var color = $(element).css("background-color");

        var id= element.id;
        if(id === 'myRidesMenu'){

          $location.path("/myRides");

          $('#myRidesDiv').animate({
            'background-color': color
          },3000);

        }else if(id === 'profileMenu'){
          $location.path("/profile");

          $('#profileDiv').animate({
            'background-color': color
          },3000);

        }else if(id === 'homeMenu'){
          $location.path("/home");
          $rootScope.showMenu = false;

          $('#homeMainDiv').animate({
            'background-color': color
          },3000);

        }




        var arr = element.parentElement.children;
        if (posTop == 0 && posLeft > 20) {

          $.each(arr, function (index, value) {

            var valTop = value.offsetTop;
            var valLeft = value.offsetLeft;

            if (valTop == 0 && valLeft > 20) {
              $(value).animate({
                  left: 0
                }, 'slow'
              );
            } else if (valTop == 0 && valLeft == 0) {
              $(value).animate({
                  top: 50
                }, 'slow'
              );
            } else if (valTop > 20 && valLeft == 0) {
              $(value).animate({
                  left: 50
                }, 'slow'
              );
            } else if (valTop > 20 && valLeft > 20) {
              $(value).animate({
                  top: 0
                }, 'slow'
              );
            }


          });

        }else if (posTop > 20 && posLeft == 0) {

          $.each(arr, function (index, value) {

            var valTop = value.offsetTop;
            var valLeft = value.offsetLeft;

            if (valTop == 0 && valLeft > 20) {
              $(value).animate({
                  left: 0
                }, 'slow'
              );

              $(value).animate({
                  top: 50,
                }, 'slow'
              );

              $(value).animate({
                  left: 50
                }, 'slow'
              );

            } else if (valTop == 0 && valLeft == 0) {
              $(value).animate({
                  top: 50
                }, 'slow'
              );

              $(value).animate({
                  left: 50
                }, 'slow'
              );

              $(value).animate({
                  top: 0
                }, 'slow'
              );
            } else if (valTop > 20 && valLeft == 0) {
              $(value).animate({
                  left: 50
                }, 'slow'
              );

              $(value).animate({
                  top: 0
                }, 'slow'
              );

              $(value).animate({
                  left: 0
                }, 'slow'
              );
            } else if (valTop > 20 && valLeft > 20) {
              $(value).animate({
                  top: 0
                }, 'slow'
              );

              $(value).animate({
                  left: 0
                }, 'slow'
              );

              $(value).animate({
                  top: 50
                }, 'slow'
              );
            }


          });
        }if (posTop > 20 && posLeft > 20) {

          $.each(arr, function (index, value) {

            var valTop = value.offsetTop;
            var valLeft = value.offsetLeft;

            if (valTop == 0 && valLeft > 20) {
              $(value).animate({
                  left: 0
                }, 'slow'
              );

              $(value).animate({
                  top: 50,
                }, 'slow'
              );

            } else if (valTop == 0 && valLeft == 0) {
              $(value).animate({
                  top: 50
                }, 'slow'
              );

              $(value).animate({
                  left: 50
                }, 'slow'
              );

            } else if (valTop > 20 && valLeft == 0) {
              $(value).animate({
                  left: 50
                }, 'slow'
              );

              $(value).animate({
                  top: 0
                }, 'slow'
              );
            } else if (valTop > 20 && valLeft > 20) {
              $(value).animate({
                  top: 0
                }, 'slow'
              );

              $(value).animate({
                  left: 0
                }, 'slow'
              );
            }


          });

        }

      }

    }]);
});
