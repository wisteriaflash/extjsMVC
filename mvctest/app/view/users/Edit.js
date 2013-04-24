Ext.define('app.view.users.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,
    modal: true,

    initComponent: function(){
        this.items = [{
            xtype: 'form',
            border: false,
            bodyPadding: 10,
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Name'
            },{
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email'
            }]
        }];
        this.buttons = [{
            text: 'Save',
            action: 'save'
        },{
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];
        //
        this.callParent(arguments);
    }
})