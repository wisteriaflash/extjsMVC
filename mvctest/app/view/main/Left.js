Ext.define('app.view.main.Left', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainleft',

    region: 'west',
    id: 'mainleft',
    title: "菜单",
    width: 250,
    minWidth: 250,
    iconCls: "icon-tree",
    autoScroll: false,
    split: true,
    collapsible: true,
    layout: {
        type: 'fit',
        animate: true
    },
    dataDefault: [{
        itemId: 'index'
    },{
        itemId: 'users', children: [{itemId:'users_list'}],
    },{
        itemId: 'other', children: [{itemId: 'other1'},{itemId: 'other2'},{itemId: 'other3'}]
    }],
    
    
    initComponent: function(){
        var me = this;
        //init tree
        var store = Ext.create('app.store.Lefts');
        store.load({
            callback: function(records, operation, success){
                var data = me.buildTreeData(store);
                var treeStroe = Ext.create('Ext.data.TreeStore', {
                    root: {
                        expanded: false,
                        children: data
                    }
                });
                
                var tree = Ext.create('Ext.tree.Panel', {
                    store: treeStroe,
                    itemId: 'navTree',
                    rootVisible: false,
                    autoScroll: true,
                    border: false,
                    // useArrows: true,
                    // frame: true,
                    width: 400,
                    height: 250
                });
                //add
                me.add(tree);
            }
        });

        //
        this.callParent(arguments);
    },
    buildTreeData: function(store){
        var me = this;
        var data = [], 
            node;

        store.each(function (item, index) {
            // debugger;
            var defaultItem = me.dataDefault[index];

            node = {
                id: defaultItem.itemId,
                itemId: item.get('id'),
                // cls: 'root',
                // iconCls: 'rootIcon',
                text: item.get('text'),
                expanded: true
            };
            if(item.children().count()>0){
                node.children = [];
                item.children().each(function (items, index) {
                        var defaultItems = defaultItem.children[index];
                        node.children.push({
                            id: defaultItems.itemId,
                            itemId: items.get('id'),
                            // cls: 'leaf',
                            // iconCls: 'leafIcon',
                            leaf: true,
                            text: items.get('text')
                        });
                });    
            }else{
                node.leaf = true;
            }
            data.push(node);
        });
        return data;
    }
});