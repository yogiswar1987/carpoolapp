/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/home','controllers/login','controllers/menu','controllers/myRides', 'controllers/profile', 'services/profile', 'controllers/register', 'services/register', 'controllers/account', 'services/account']/*deps*/, function (angular, MainCtrl, AboutCtrl, HomeCtrl,LoginCtrl, MenuCtrl,ProfileCtrl, ProfileService, RegisterCtrl, RegisterService, AccountCtrl, AccountService)/*invoke*/ {
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
      'carpoolApp.controllers.MenuCtrl',
      'carpoolApp.controllers.MyRidesCtrl',
'carpoolApp.controllers.ProfileCtrl',
'carpoolApp.services.Profile',
'carpoolApp.controllers.RegisterCtrl',
'carpoolApp.services.Register',
'carpoolApp.controllers.AccountCtrl',
'carpoolApp.services.Account',
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
    ]).directive('disableAnimation', function($animate){
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs){
        $attrs.$observe('disableAnimation', function(value){
          $animate.enabled(!value, $element);
        });
      }
    }
  })
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
          .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl',
            controllerAs: 'profile'
          })
          .when('/myRides', {
          templateUrl: 'views/myRides.html',
          controller: 'MyRidesCtrl',
          controllerAs: 'myRides'
        })
        .when('/register', {
          templateUrl: 'views/register.html',
          controller: 'RegisterCtrl',
          controllerAs: 'register'
        })
        .when('/account', {
          templateUrl: 'views/account.html',
          controller: 'AccountCtrl',
          controllerAs: 'account'
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
