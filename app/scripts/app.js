'use strict';

angular
  .module('ethicalSwitchApp', ['facebook', 'ui.router', 'ngAnimate'])
  .config(['FacebookProvider', function(FacebookProvider) {
    // Here you could set your appId through the setAppId method and then initialize
    // or use the shortcut in the initialize method directly.
    FacebookProvider.init('my-ap-id');
  }])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('story', {
      controller: 'StoryCtrl',
      templateUrl: 'views/story.html',
      abstract: true,
    })
    .state('story.inspiration', {
      url: '/',
      templateUrl: 'views/story.inspiration.html'
    })
    .state('story.motivation', {
      url: '/motivation',
      templateUrl: 'views/story.motivation.html'
    })
    .state('story.doing', {
      url: '/what-we-are-doing',
      templateUrl: 'views/story.what-we-are-doing.html'
    })
    .state('story.tribe', {
      url: '/tribe',
      templateUrl: 'views/story.tribe.html'
    })
    .state('story.join', {
      url: '/join',
      templateUrl: 'views/story.join.html'
    })
    .state('faq', {
      url: '/faq',
      //controller: 'FaqCtrl',
      templateUrl: 'views/faq.html'
    });
  });
