//
// display controller for a single ttd
//
// ao 18dec14
//

isosejiApp.controller('TtdDisplayController', ['$scope', 'ttdList', function($scope, ttdList) {

    this.dispTtdList={};
    this.curParent=0;

    this.toggle = function(ttd) {
        this.dispTtdList[ttd.id]=!this.dispTtdList[ttd.id];
    };
    
    this.isSelected = function(ttd) {
        if (_.isUndefined(this.dispTtdList[ttd.id])) {
            this.dispTtdList[ttd.id]=false;
        }
        return this.dispTtdList[ttd.id];
    };
    
    this.updateParent = function(ttd) {
        ttdList.moveParent(ttd, this.curParent);
        this.curParent = ttd.parent;
        $scope.updateList();
    };
}]);