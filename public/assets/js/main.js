angular.module('placetrump', [])
    .controller('MainCtrl', function($scope) {
        $scope.imageUrl     = '/500/500';
        $scope.noCache      = '?'+Date.now();
    });