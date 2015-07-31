define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name carpoolApp.Register
   * @description
   * # Register
   * Service in the carpoolApp.
   */
  angular.module('carpoolApp.services.Register', [])
    .service('Register', function ($http,$q) {
      var deferred = $q.defer();
      this.register = function (user) {
        $http.put('dishaapiserver/rest/user?phone=' + user.phone + '&name=' + user.name + '&pwd=' + user.password + '&gender=' + user.gender + '&email=' + user.email)
          .success(function(data, status, headers, config) {
            deferred.resolve(data);
          }).
          error(function(data, status, headers, config) {
            deferred.reject(data);
          });
        return deferred.promise;
      };

    });
});
