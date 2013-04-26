/* 主内容区 */
Ext.define('app.controller.Users',{
    extend: 'Ext.app.Controller',

    models: [
        'User'
    ],
    stores: [
        'Users'
    ],
    views: [
        'users.List',
        'users.Edit'
    ],
    refs: [{
         ref: 'userList',
         selector: 'userlist'
     },{
        ref: 'userEdit',
        selector: 'useredit'
     }],

    //init
    init: function(){
       this.control({
            'userlist': {
                itemdblclick: this.editUser
            },
            'useredit': {
                close: this.editClose
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
       });
    },
    initList: function(){
        var view = Ext.create('app.view.users.List');
        var viewport    = Ext.getCmp('viewport');
        var target      = viewport.down('#maincontentView');
        target.removeAll();
        target.add(view);
    },
    //utils handler
    showEditWindow: function(record){
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    },
    //router handler
    list: function(){//独立render
        
    },
    edit: function(params) {//edit显示依赖list
        //data
        this.userId = parseInt(params.id, 10);
        //init
        var userList = this.getUserList();
        if(!userList){
            this.initList();
            userList = this.getUserList();
        }
        var record = userList.store.getById(this.userId)
        userList.getSelectionModel().select(record);
        this.showEditWindow(record);
    },
    //event handler
    editUser: function(grid, record){
        Ext.ux.Router.redirect('users/' + record.getId() + '/edit');
    },
    editClose: function(){
        Ext.ux.Router.redirect('users');
    },
    updateUser : function(button){
        var win = button.up('window');
        var form = win.down('form');
        var record = form.getRecord();
        var values = form.getValues();
        record.set(values);
        win.close();
    }
});