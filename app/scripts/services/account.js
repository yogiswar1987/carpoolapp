define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name carpoolApp.Account
   * @description
   * # Account
   * Service in the carpoolApp.
   */
  angular.module('carpoolApp.services.Account', [])
    .service('Account', function ($http, $q) {
      this.getAccountBalance = function (phone) {
        var deferred = $q.defer();
        $http.get('dishaapiserver/rest/account?accountid=' + phone).
          success(function (data, status, headers, config) {
            deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
            deferred.reject(data);
          });
        return deferred.promise;
      };
      this.redeemPoints = function (phone, points) {
        var deferred = $q.defer();
        var urlOpts1 = {
          method: 'PUT',
          url: 'dishaapiserver/rest/account/balance/encash?accountid=' + phone + '&points=' + points,
          transformResponse: specialTransform
        };
        $http(urlOpts1).
          success(function (data, status, headers, config) {
            deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
            deferred.reject(data, status);
          });
        return deferred.promise;
      };
      function specialTransform(data) {
        return data;
      };
    });
});
