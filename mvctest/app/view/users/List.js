Ext.define('app.view.users.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    store: 'Users',
    title: 'All users',

    initComponent: function(){
        this.columns = [
            {text: 'Name', dataIndex: 'name', flex: 1},
            {text: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});