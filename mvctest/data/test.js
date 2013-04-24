Ext.onReady(function() {

    Ext.define('Projects', {
        extend: 'Ext.data.Model',
        fields: [
            'id',
            {name: 'text'}
        ],
        proxy: {
            type: 'rest',
            url: 'left.php?v=1',
            reader: {
                type: 'json',
                root: 'records'
            }
        },
        hasMany: {model: 'Versions', name: 'versions'}
    });

    Ext.define('Versions', {
        extend: 'Ext.data.Model',
        hasMany: {model: 'Version', name: 'version', associationKey: 'records'},
        belongsTo: 'Projects'
    });

    Ext.define('Version', {
        extend: 'Ext.data.Model',
        fields: [
            'id',
            {name: 'text'}
        ],
        belongsTo: 'Versions'
    });

    var store = new Ext.data.Store({
        model: 'Projects',
        autoLoad: true,
        listeners: {
            load: function (store, records)
            {
                var data = buildTreeData(store)
                var store = Ext.create('Ext.data.TreeStore', {
                    root: {
                        expanded: true,
                        children: data
                    }
                });
                
                var tree = Ext.create('Ext.tree.Panel', {
                    store: store,
                    rootVisible: false,
                    useArrows: true,
                    frame: true,
                    title: 'Tree',
                    renderTo: document.body,
                    width: 400,
                    height: 250
                });
            }
        }
    });

    function buildTreeData (store)
    {
        var data = [], 
            node;

        store.each(function (project) {
            node = {
                id: project.get('id'),
                cls: 'root',
                iconCls: 'rootIcon',
                text: project.get('text'),
                expanded: true
            };
            debugger;
            project.versions().each(function (versions) {
                node.children = [];
                versions.version().each(function (version) {
                    node.children.push({
                        id: version.get('id'),
                        cls: 'leaf',
                        iconCls: 'leafIcon',
                        leaf: true,
                        text: version.get('text')
                    });
                })
            });
            data.push(node);
        });
        return data;
    }
});