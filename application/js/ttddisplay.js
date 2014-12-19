//
// display controller for a single ttd
//
// ao 18dec14
//

isosejiApp.controller('TtdDisplayController', [ function() {

    this.toggle = function(ttd) {
        ttd.isOpen=!ttd.isOpen;
    };

}]);