'use strict';

angular.module('ethicalSwitchApp')
  .controller('StoryCtrl', function ($scope, $state) {

    $scope.flow = {
      'story.inspiration': 'Inspiration',
      'story.motivation': 'Motivation',
      'story.doing': 'Doing',
      'story.tribe': 'Tribe',
      'story.join': 'Join'
    };

    var flowKeys = Object.keys($scope.flow)

    function nextState() {
      return flowKeys[flowKeys.indexOf($state.current.name) + 1];
    };

    $scope.hasNext = function() {
      return !!nextState()
    };

    $scope.nextName = function() {
      $scope.flow[nextState()];
    };

    $scope.next = function() {
      $state.go(nextState());
    };
  });

