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
        $timeout(function () {
          deferred.resolve({
            "user": {
              "phone": 9980965409,
              "name": "rav",
              "gender": "m",
              "pwd": "nmfxv",
              "status": "activated",
              "referralCode": "GDZ67",
              "clientuniquedeviceid": ""
            },
            "userProfile": {
              "id": 9980965409,
              "userName": "rav",
              "confirmtype": false,
              "verificationstatus": false,
              "rating": 0.0,
              "noofridesaspassenger": 0,
              "noofridesasrider": 0
            },
            "vehicle": {
              "id": 6,
              "ownerid": 9980965409,
              "model": "hatchback",
              "regno": "ka091234",
              "capacity": 3,
              "fare": 5.0,
              "imageURI": "yyui"
            }
          });
        }, 1000);
        /*
         $http.get().
         success(function(data, status, headers, config) {
         deferred.resolve(data);
         }).
         error(function(data, status, headers, config) {
         deferred.reject(data);
         });*/
        return deferred.promise;
      }
      // AngularJS will instantiate a singleton by calling "new" on this function
    });
});
