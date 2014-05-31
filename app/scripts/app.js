'use strict';

angular
  .module('ethicalSwitchApp', ['facebook', 'ui.router'])
  .config(['FacebookProvider', function(FacebookProvider) {
    // Here you could set your appId through the setAppId method and then initialize
    // or use the shortcut in the initialize method directly.
    FacebookProvider.init('my-ap-id');
  }])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('app', {
      //controller: 'AppCtrl',
      templateUrl: 'views/app.html',
      abstract: true,
    })
    .state('app.main', {
      url: '/',
      //controller: 'MainCtrl',
      templateUrl: 'views/main.html'
    })
    .state('app.faq', {
      url: '/faq',
      //controller: 'FaqCtrl',
      templateUrl: 'views/faq.html'
    });
  });

