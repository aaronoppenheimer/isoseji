
// display controller for a list of TTDs
tdlc = isosejiApp.controller('TtdListDisplayController', ['$scope', 'ttdList', function($scope, ttdList) {

//     $scope.ttds = ttdList.getttds();
//     
//     $scope.updateList = function() {
//         $scope.ttds = ttdList.getttds();    
//     };

    $scope.ttdList = ttdList;

    $scope.handleDrop = function(item, bin) {
        itemid = item.substring(4);
        newparent = bin.substring(4);
        if (bin.substring(0,4)=="item") {
            ttdList.dragDropReparent(itemid, newparent);
        } else {
            ttdList.dragDropAfter(itemid, newparent);
        }
//         $scope.ttds = ttdList.getttds();    
    }  
}]);

tdlc.config(function() {
    console.log("init TtdListDisplayController");
});


// display controller for a single TTD
tdc = isosejiApp.controller('TtdDisplayController', ['$scope', 'ttdList', function($scope, ttdList) {

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

tdc.config(function() {
    console.log("init TtdDisplayController");
});


// controller for entering a new ttd
nttd = isosejiApp.controller('TtdNewInputController', ['$scope', 'ttdList', function($scope, ttdList) {
    $scope.newttd='';

    $scope.submitNewTtd = function() {
        ttdList.submit($scope.newttd);
        $scope.newttd='';
//         $scope.ttds = ttdList.getttds();   
    }; 
}]);

nttd.config(function() {
    console.log("init TtdNewInputController");
});
