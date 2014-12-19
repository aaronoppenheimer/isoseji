//
// display controller for a single ttd
//
// ao 18dec14
//

isosejiApp.controller('TtdDisplayController', [ '$scope', function($scope) {

    $scope.toggle = function(ttd) {
        ttd.isOpen=!ttd.isOpen;
    };

}]);