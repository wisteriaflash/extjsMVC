Ext.define('app.model.Left',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'number'},
        {name: 'role', type: 'string'},   //normal|admin
        {name: 'text', type: 'string', mapping: 'title'},
        {name: 'type', type: 'com'},      //com|iframe
        {name: 'url', type: 'string'}
    ],
    hasMany: {model: 'app.model.LeftSub', name: 'children', associationKey: 'sub'}
})