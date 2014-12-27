//
// display controller for a single ttd
//
// ao 18dec14
//

isosejiApp.controller('TtdDisplayController', [function() {

    this.dispTtdList={}

    this.toggle = function(ttd) {
        this.dispTtdList[ttd.id]=!this.dispTtdList[ttd.id];
    };
    
    this.isSelected = function(ttd) {
        if (_.isUndefined(this.dispTtdList[ttd.id])) {
            this.dispTtdList[ttd.id]=false;
        }
        return this.dispTtdList[ttd.id];
    }
}]);