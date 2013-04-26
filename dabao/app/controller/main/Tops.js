Ext.define('app.controller.main.Tops',{
    extend: 'Ext.app.Controller',

    views: [
        'main.Top'
    ],

    //init
    init: function(){
       this.control({
            '#logout': {
                click: this.logout
            }
       });
    },
    logout: function(){
        console.log('logout');
        // window.location.href = "/Account/LogOff";
    }
});