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

      this.getProfileinfo = function (userName) {
        var deferred = $q.defer();
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
        var deferred = $q.defer();
        var urlOpts1 = {
          method: 'POST',
          url: 'dishaapiserver/rest/',
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

      this.saveVehicle = function(model,capacity,fare){
        var deferred = $q.defer();
        var urlOpts1 = {
          method: 'POST',
          url: 'dishaapiserver/rest/',
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
      this.changePassword = function(phone,oldPassword,newPassword)
      {
        var deferred = $q.defer();
        var urlOpts1 = {
          method: 'PUT',
          url: 'dishaapiserver/rest/user/password?phone='+phone+'&old_pwd='+oldPassword+'&new_pwd='+newPassword,
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
      this.getAccountBalance = function(phone){
        var deferred = $q.defer();
        $http.get('dishaapiserver/rest/account?accountid='+phone).
          success(function(data, status, headers, config) {
            deferred.resolve(data);
          }).
          error(function(data, status, headers, config) {
            deferred.reject(data);
          });
        return deferred.promise;
      };
      this.redeemPoints = function(phone,points){
        var deferred = $q.defer();
        var urlOpts1 = {
          method: 'PUT',
          url: 'dishaapiserver/rest/account/balance/encash?accountid='+phone+'&points='+points,
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
        return data; //just return the string, don't try to JSON.parse it (angular default(
      };
      // AngularJS will instantiate a singleton by calling "new" on this function
    });
});
