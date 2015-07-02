/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/home','controllers/login']/*deps*/, function (angular, MainCtrl, AboutCtrl, HomeCtrl,LoginCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name carpoolApp
   * @description
   * # carpoolApp
   *
   * Main module of the application.
   */
  return angular
    .module('carpoolApp', ['main',
      'about',
      'home',
      'login',
/*angJSDeps*/
      'ngCookies',
      'ngAria',
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'ngAnimate',
      'ngTouch',
      'ngMessages',
      'ngMaterial'
    ])
    .config(function ($routeProvider, $mdThemingProvider) {
      $routeProvider
        .when('/main', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .when('/home', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        })
        .otherwise({
          redirectTo: '/'
        });

      $mdThemingProvider.theme('Inputsp')
        .primaryPalette('light-blue');
    }).run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event) {

      if (!$rootScope.user) {
        console.log('DENY');
        //event.preventDefault();
        $location.path('/main');
      }
      else {
        console.log('ALLOW');
       // $location.path('/home');
      }
    });
  }]);;
});
