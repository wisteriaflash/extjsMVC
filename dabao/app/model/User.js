Ext.define('app.model.User',{
    extend: 'Ext.data.Model',
    fields: [
        {name:'id', type:'number'},
        {name:'name', type:'string'},
        {name:'email', type:'string'}
    ]
})