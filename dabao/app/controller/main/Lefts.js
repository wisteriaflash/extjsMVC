Ext.define('app.controller.main.Lefts',{
    extend: 'Ext.app.Controller',

    models: [
        'Left',
        'LeftSub'
    ],
    stores: [
        'Lefts'
    ],
    views: [
        'main.Left'
    ],
    refs: [{
         ref: 'tree',
         selector: 'treepanel'
     },{
        ref: 'content',
        selector: 'maincontent'
     }],
    //init
    init: function(){
        //addEvent
        this.control({
            'treepanel': {
                afterrender: this.treeAfterRender,
                itemclick: this.treeFunction
            }
        });
    },
    onLaunch: function() {
        
    },
    //utils handler
    navSelect: function(token, match, params){
        //init view
        var controller  = match.controller.charAt(0).toLowerCase() + match.controller.substr(1);
        var treeURL = '/root';
        switch(controller){
            case 'home': treeURL += '/index'; break;
            case 'users': treeURL += '/users/users_list'; break;
        }
        //tree
        var tree = this.getTree();
        if(tree){
            tree.selectPath(treeURL);
            this.treeURL = null;
        }else{
            this.treeURL = treeURL;
        }
    },
    //event handler
    treeAfterRender: function(tree){
        tree.selectPath(this.treeURL);
    },
    treeFunction: function(tree, record, item, index, e, eOpts){
        //leaf node
        if(record.get('leaf')){
            var url = record.getPath();
            url = url.split('/')[2];
            var redirectURL = '';
            switch(url){
                case 'home': redirectURL = ''; break;
                case 'users': redirectURL = 'users'; break;
            }
            Ext.Router.redirect(redirectURL);
        }
    }
});