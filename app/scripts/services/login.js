define(['angular'], function (angular) {
  'use strict';
  angular
    .module('login', ['ngMessages','carpoolApp.controllers.RegisterCtrl']).service('LoginService', function ($http) {
      var user = {userName: "yogi"};
      this.getUser = function () {
        return user;
      }
      this.login = function (userName, password) {
        user.userName = userName;
      }
    }
  );
});
