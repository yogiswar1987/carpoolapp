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
        $http.get('dishaapiserver/rest/user/completeProfile?userId=' + userName).
          success(function (data, status, headers, config) {
            deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
            deferred.reject(data);
          });
        return deferred.promise;
      };

      this.saveProfile = function (userProfile) {
        var deferred = $q.defer();
        var urlOpts1 = {
          method: 'PUT',
          url: 'dishaapiserver/rest/userProfile/update?imageURI=' + userProfile.imageUri + '&id=' + userProfile.id,
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

      this.saveVehicle = function (model, capacity, fare) {
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
      this.changePassword = function (phone, oldPassword, newPassword) {
        var deferred = $q.defer();
        var urlOpts1 = {
          method: 'PUT',
          url: 'dishaapiserver/rest/user/password?phone=' + phone + '&old_pwd=' + oldPassword + '&new_pwd=' + newPassword,
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

      this.uploadProfileImage = function (file) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: 'dishaapiserver/rest/image',
          data: $.param({photo: file}),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          transformResponse: specialTransform
        }).success(function (data) {
          deferred.resolve(data);
        })
          .error(function (data) {
            deferred.reject(data);
          });
        return deferred.promise;
      };


      function specialTransform(data) {
        return data; //just return the string, don't try to JSON.parse it (angular default(
      };
      // AngularJS will instantiate a singleton by calling "new" on this function
    });
});
