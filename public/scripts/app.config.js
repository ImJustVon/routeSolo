angular.module('routeApp')
       .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
          templateUrl: 'views/home.html',
        }).when('/ashe', {
          templateUrl: 'views/ashe.html',
        }).when('/jhin', {
          templateUrl: 'views/jhin.html',
        }).when('/lux', {
          templateUrl: 'views/lux.html',
        });
        $locationProvider.html5Mode(true);
      });
