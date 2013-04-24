Ext.define('app.store.Users',{
    extend: 'Ext.data.Store',
    model: 'app.model.User',

    //inline data
    data: [
        {id: 1, name: 'Ed',    email: 'ed@163.com'},
        {id: 2, name: 'Tommy',    email: 'tommy@163.com'}
    ]
})