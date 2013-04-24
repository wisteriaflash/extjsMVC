Ext.define('app.controller.Home',{
    extend: 'Ext.app.Controller',

    views: [
        'home.Index'
    ],

    //init
    init: function(){
       this.control({
            // 'viewport>userlist': {
            //     itemdblclick: this.editUser
            // },
            // 'useredit button[action=save]': {
            //     click: this.updateUser
            // }
       });
    },
    //router
    index: function(){

    }
});