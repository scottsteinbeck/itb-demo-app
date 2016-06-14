// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.users', {
    url: '/users',
    views: {
      'menuContent': {
        templateUrl: 'templates/user/list.html',
        controller: 'UsersCtrl'
      }
    }
  })
  .state('app.user', {
    url: '/users/:userID',
    views: {
      'menuContent': {
        templateUrl: 'templates/user/item.html',
        controller: 'UserCtrl'
      }
    }
  })

  .state('app.products', {
    url: '/products',
    views: {
      'menuContent': {
        templateUrl: 'templates/product/list.html',
        controller: 'ProductsCtrl'
      }
    }
  })
  .state('app.product', {
    url: '/products/:productID',
    views: {
      'menuContent': {
        templateUrl: 'templates/product/item.html',
        controller: 'ProductCtrl'
      }
    }
  })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/users');
});
