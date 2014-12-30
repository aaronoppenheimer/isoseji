//
// Main controller for ttd application
//
// ao 15dec14

var isosejiApp = angular.module('isosejiApp', ['ttdList', 'ui.bootstrap', 'xeditable', 'underscore']);

isosejiApp.controller('TtdController', ['$scope', 'ttdList', function($scope, ttdList) {

    $scope._ = _;
}]);

isosejiApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});