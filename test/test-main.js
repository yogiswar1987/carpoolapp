var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {
    angular: '../../bower_components/angular/angular',
    'angular-route': '../../bower_components/angular-route/angular-route',
    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'angular-animate': '../../bower_components/angular-animate/angular-animate',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-aria': '../../bower_components/angular-aria/angular-aria',
    'angular-material': '../../bower_components/angular-material/angular-material',
    'ui.bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    'angular-bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap'
  },

    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-route': ['angular'],
        'angular-cookies': ['angular'],
        'angular-sanitize': ['angular'],
        'angular-resource': ['angular'],
        'angular-animate': ['angular'],
        'angular-touch': ['angular'],
        'angular-mocks': {
          deps:['angular'],
          'exports':'angular.mock'
        },
      'angularMaterial': {
        deps: ['angular', 'angular-animate', 'angular-aria']
      }
    },priority: [
    'angular'
  ],

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-touch',
  'angular-aria',
  'angular-material',
  'ui.bootstrap'
], function (angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch, ngAria, ngMaterial, uiBootstrap) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function () {
    angular.resumeBootstrap([app.name]);
  });
});
