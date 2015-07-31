define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name carpoolApp.Profile
   * @description
   * # Profile
   * Service in the carpoolApp.
   */
  angular.module('carpoolApp.services.Profile', [])
    .service('Profile', function ($http, $q, $timeout) {
      var deferred = $q.defer();
      this.getProfileinfo = function () {
         $http.get('dishaapiserver/rest/user/completeProfile?userId=9980965409').
         success(function(data, status, headers, config) {
         deferred.resolve(data);
         }).
         error(function(data, status, headers, config) {
         deferred.reject(data);
         });
        return deferred.promise;
      }
      // AngularJS will instantiate a singleton by calling "new" on this function
    });
});
