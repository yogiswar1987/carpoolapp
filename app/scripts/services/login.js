define(['angular'], function (angular) {
  'use strict';
  angular
    .module('login', ['ngMessages', 'carpoolApp.controllers.RegisterCtrl']).service('LoginService', function ($http, $q) {
      var user = {};
      var deferred = $q.defer();
      this.getUser = function () {
        return user;
      };
      this.login = function (userName, password) {
        var urlOpts1 = {
          method: 'GET',
          url: 'dishaapiserver/rest/user/login?userId=' + userName + '&pwd=' + password,
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
      function specialTransform(data) {
        console.log("INSIDE SPCIAL RANS", data)
        return data; //just return the string, don't try to JSON.parse it (angular default(
      };

      this.activateAccount = function (phone, activationCode) {
        var urlOpts1 = {
          method: 'GET',
          url: 'dishaapiserver/rest/user/activateAccount?userId=' + phone + '&activationCode=' + activationCode,
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

      this.chechkAccountStatus = function (phone) {
        var urlOpts1 = {
          method: 'GET',
          url: 'dishaapiserver/rest/user/entity?phone=' + phone,
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
      this.resendPassword = function(phone)
      {
        var urlOpts1 = {
          method: 'GET',
          url: 'dishaapiserver/rest/user/password?phone=' + phone,
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
      }
    }
  );
});
