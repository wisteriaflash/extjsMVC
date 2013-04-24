Ext.define('app.store.Lefts',{
    extend: 'Ext.data.Store',
    model: 'app.model.Left',
    proxy: {
        type: 'ajax',
        url: 'data/left.php',
        reader: {
            type: 'json',
            root: 'menu'
        }
    }
})