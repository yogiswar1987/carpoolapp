/*
/!*jshint unused: vars *!/
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ProfileCtrl', function () {

    // load the controller's module
    beforeEach(module('carpoolApp.controllers.ProfileCtrl'));

    var ProfileCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      ProfileCtrl = $controller('ProfileCtrl', {
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(ProfileCtrl.awesomeThings.length).toBe(3);
    });
  });
});
*/
