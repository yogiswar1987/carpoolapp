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
      this.getProfileinfo = function (userName) {
         $http.get('dishaapiserver/rest/user/completeProfile?userId='+userName).
         success(function(data, status, headers, config) {
         deferred.resolve(data);
         }).
         error(function(data, status, headers, config) {
         deferred.reject(data);
         });
        return deferred.promise;
      };

      this.saveProfile= function(name, gender)
      {
        var urlOpts1 = {
          method: 'POST',
          url: 'dishaapiserver/rest/',
          transformResponse: specialTransform
        };
        $http(urlOpts1).
          success(function (data, status, headers, config) {
            user.phone = userName;
            deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
            user.phone = userName;
            deferred.reject(data, status);
          });
        return deferred.promise;
      };

      this.saveProfile = function(model,capacity,fare){
        var urlOpts1 = {
          method: 'POST',
          url: 'dishaapiserver/rest/',
          transformResponse: specialTransform
        };
        $http(urlOpts1).
          success(function (data, status, headers, config) {
            user.phone = userName;
            deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
            user.phone = userName;
            deferred.reject(data, status);
          });
        return deferred.promise;
      }

      function specialTransform(data) {
        return data; //just return the string, don't try to JSON.parse it (angular default(
      };
      // AngularJS will instantiate a singleton by calling "new" on this function
    });
});
