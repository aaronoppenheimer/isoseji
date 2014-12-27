//
// Main controller for ttd application
//
// ao 15dec14

var isosejiApp = angular.module('isosejiApp', ['ttdList', 'ui.bootstrap']);

isosejiApp.controller('TtdController', ['$scope', 'ttdList', function($scope, ttdList) {

    $scope.newttd='';
    $scope.submit = function() {
        ttdList.submit($scope.newttd);
        $scope.newttd='';
        $scope.ttds = ttdList.getttds();    
    };
    
    $scope.ttds = ttdList.getttds();    
}]);