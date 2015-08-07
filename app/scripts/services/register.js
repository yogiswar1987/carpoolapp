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
    .service('Register', function ($http, $q) {


      this.register = function (user) {
        var deferred = $q.defer();
        var urlOpts1 = {
          method: 'PUT',
          url: 'dishaapiserver/rest/user?phone=' + user.phone + '&name=' + user.name + '&pwd=' + user.password + '&gender=' + user.gender + '&email=' + user.email,
          transformResponse: specialTransform
        };
        $http(urlOpts1)
          .success(function (data, status, headers, config) {
            deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
            deferred.reject(data);
          });
        return deferred.promise;
      };
      function specialTransform(data) {
        return data; //just return the string, don't try to JSON.parse it (angular default(
      };

    });
});
