/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app', 'angular-material',
  'ui.bootstrap'], function(angular, mocks, app, ngMaterial) {
  'use strict';

  describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('main'));
    beforeEach(module('ngMaterial'));
    beforeEach(module('ui.bootstrap'));


    var MainCtrl,scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      //expect(MainCtrl.awesomeThings.length).toBe(3);
    });
  });
});
