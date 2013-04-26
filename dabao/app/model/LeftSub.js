Ext.define('app.model.LeftSub',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'text', type: 'string', mapping: 'title'},
        {name: 'url', type: 'string'}
    ],
    belongsTo: 'app.model.Left'
})