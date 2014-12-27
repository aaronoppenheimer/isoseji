//
// Main controller for ttd application
//
// ao 15dec14

var isosejiApp = angular.module('isosejiApp', ['ttdList', 'ui.bootstrap', 'xeditable', 'underscore']);

isosejiApp.controller('TtdController', ['$scope', 'ttdList', function($scope, ttdList) {

    $scope._ = _;

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

    $scope.handleDrop = function(item, bin) {
        itemid = item.substring(4);
        newparent = bin.substring(4);
        ttdList.dragDrop(itemid, newparent);
        $scope.ttds = ttdList.getttds();    
    }    
    
}]);

isosejiApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});