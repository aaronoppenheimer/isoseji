//
// service for managing list of ttds
//
// ao 17dec14
//

    
angular.module('ttdList', ['underscore'])
.service('ttdList', function(_) {

    this.ttds={};
    this.ttdcount = 0;
    this.displayTtds = {};

    this.initialize = function() {
        var tmp = []
        for (var i=1; i<=10; i++) {
            tmp.push({id: i, title: 'test '+i, parent:0});
        };
        this.ttds = {0: tmp}
        this.ttdcount = 10;
        this.updateDisplayTtds();
    };

    // update the list of ttds to display (really, just put them into display order)
    this.updateDisplayTtds = function() {
        this.displayTtds = this.getchildren(0,1);
        console.log('updated');
    };

    this.getchildren = function(parent, level) {
        var newlist=[]
        if (_.isUndefined(this.ttds[parent])) {
            return newlist;
        } else {
            var list = this.ttds[parent];
            for (var i=0; i<list.length; i++) {
                newlist.push([list[i],level]);
                newlist = newlist.concat(this.getchildren(list[i].id, level + 1));
            }
        }
        return newlist;
    };

    // add a new thing to do from a passed-in title
    this.submit = function(newttd) {
        if (newttd) {
            var newobj={id:this.ttdcount+1, title:newttd, parent:-1};
            this.moveParent(newobj, Math.round(Math.random()*10));
            this.ttdcount += 1;
            this.updateDisplayTtds();
        }
    };
    
    // take a ttd and migrate it to a new parent. If it has an old parent, remove it from
    // its list of children.
    this.moveParent = function(ttd, newparent, newpos) {
        if (newparent == ttd.id) {
            return;
        } else {
            this.ttds[ttd.parent] = _.without(this.ttds[ttd.parent], ttd);
            // move it to a new parent
            ttd.parent = newparent;
            if (_.isUndefined(this.ttds[newparent])) {
                this.ttds[newparent]=[ttd];
            } else {
                var currentkids = this.ttds[newparent];
                var newkids = [];
                var done = false;
                for (var i=0; i<currentkids.length; i++) {
                    newkids.push(currentkids[i]);
                    if (currentkids[i].id == newpos) {
                        newkids.push(ttd);
                        done = true;
                    }
                }
                if (done == false) {
                    newkids.push(ttd);
                }
                this.ttds[newparent]=newkids;
            }
            this.updateDisplayTtds();
        }
    }

    // Handle drag and drop to a new parent. Find the ttd with the right item id, and make it's parent the new parent
    this.dragDropReparent = function(itemid, newparent) {
        linearlist = this.displayTtds; // ew, don't recalculate every time.
        ttd = _.find(linearlist, function(t) { return t[0].id == itemid; });
        this.moveParent(ttd[0], newparent, -1);
    }
    
    // Handle drag and drop to a new position. Find the ttd with the right item id, and make it's parent the new parent
    // and insert us into the right place.
    this.dragDropAfter = function(itemid, newpos) {
        linearlist = this.displayTtds; // ew, don't recalculate every time.
        ttd = _.find(linearlist, function(t) { return t[0].id == itemid; })[0];
        newneighbor = _.find(linearlist, function(t) { return t[0].id == newpos; });
        newparent = newneighbor[0].parent;
        this.moveParent(ttd, newparent, newpos);
    }
    
   this.initialize();
});