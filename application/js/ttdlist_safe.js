//
// service for managing list of ttds
//
// ao 17dec14
//

    
angular.module('ttdlist', [])
.factory('ttdList', function() {

    var ttds = [
        {id:1, title:'test1', parent:0},
        {id:2, title:'test2', parent:0},
        {id:3, title:'test3', parent:0},
    ];

    var submit = function(newttd) {
        function reorder(t, p, starti) {
            var newttds = [];
            for (var i=starti; i<t.ttds.length; i++) {
                if (t.ttds[i].parent == p) {
                    newttds.push(t.ttds[i]);
                    var newlist = reorder(t, t.ttds[i].id, i+1);
                    newttds = newttds.concat(newlist);
                }
            }
            return newttds;
        }

        if (newttd) {
            var newobj={id:this.ttds.length+1, title:newttd, parent:2};
            this.ttds.push(newobj);
            this.ttds=reorder(this, 0, 0);
        }
    };
    

    return {
                ttds: ttds, 
                submit: submit
            };

});