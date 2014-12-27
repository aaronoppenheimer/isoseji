//
// Main controller for ttd application
//
// ao 15dec14

var isosejiApp = angular.module('isosejiApp', ['ttdList', 'ui.bootstrap', 'xeditable']);

isosejiApp.controller('TtdController', ['$scope', 'ttdList', function($scope, ttdList) {

    $scope.newttd='';
    $scope.submitNewTtd = function() {
        ttdList.submit($scope.newttd);
        $scope.newttd='';
        $scope.ttds = ttdList.getttds();    
    };
    
    $scope.ttds = ttdList.getttds();
    
    $scope.updateList = function() {
        $scope.ttds = ttdList.getttds();    
    };
}]);

isosejiApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});