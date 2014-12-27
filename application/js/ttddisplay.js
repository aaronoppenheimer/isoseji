//
// display controller for a single ttd
//
// ao 18dec14
//

isosejiApp.controller('TtdDisplayController', ['$scope', 'ttdList', function($scope, ttdList) {

    this.isSelected=false;
    this.curParent=0;

    this.toggle = function(ttd) {
        this.isSelected = !this.isSelected;
    };
    
    this.updateParent = function(ttd) {
        ttdList.moveParent(ttd, this.curParent);
        this.curParent = ttd.parent;
        $scope.updateList();
    };
}]);