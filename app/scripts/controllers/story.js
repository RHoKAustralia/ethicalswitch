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

    $scope.flowKeys = Object.keys($scope.flow);

    function nextState() {
      return $scope.flowKeys[$scope.flowKeys.indexOf($state.current.name) + 1];
    }

    $scope.storyState = function() {
      return $state.current.name.replace('story.','');
    };

    $scope.hasNext = function() {
      return !!nextState();
    };

    $scope.nextStateLabel = function() {
      return $scope.flow[nextState()];
    };

    $scope.next = function() {
      $state.go(nextState());
    };
  });

