//
// service for managing list of ttds
//
// ao 17dec14
//

    
angular.module('ttdlist', [])
.factory('ttdList', function() {

    var ttds=[];
    for (var i=1; i<=10; i++) {
        ttds.push({id: i, title: 'test '+i, parent:0, isOpen:false});
    }

    var submit = function(newttd) {

        function reorder(t, p) {
            var newttds = [];
            for (var i=0; i<t.ttds.length; i++) {
                if (t.ttds[i].parent == p) {
                    newttds.push(t.ttds[i]);
                    var newlist = reorder(t, t.ttds[i].id);
                    newttds = newttds.concat(newlist);
                }
            }
            return newttds;
        }

        if (newttd) {
            var newobj={id:this.ttds.length+1, title:newttd, parent:2, isOpen:true};
            this.ttds.push(newobj);
            this.ttds=reorder(this, 0);
        }
    };
    

    return {
                ttds: ttds, 
                submit: submit
            };

});