//
// Controller for ttd application
//
// ao 15dec14

//var isosejiApp = angular.module('isosejiApp', ['ttdlist']);
var isosejiApp = angular.module('isosejiApp', []);

isosejiApp.controller('TtdController', ['$scope', function($scope) {

    $scope.newttd='';
    $scope.submit = function() {
//        ttdlist.submit($scope.newttd);
    };
    
    $scope.ttds = [
        {id:1, title:'learn to play old-time stuff'},
        {id:2, title:'learn St. Anne\'s Reel'},
        {id:3, title:'sing a little'} ];

//     $scope.ttds = function() {
//         
//         return [
//         {id:1, title:'learn to play old-time stuff'},
//         {id:2, title:'learn St. Anne\'s Reel'},
//         {id:3, title:'sing a little'},
//     ];

//        return ttdlist.ttds;
//    };
    
}]);