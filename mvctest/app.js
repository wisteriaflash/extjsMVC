// main set
Ext.Loader.setConfig({
     enabled:true,

     paths:{
          Ext:'../lib/extjs/src',
          'Ext.ux': '../lib/ExtJS.ux',
          mvctest:'app'
     }
});


//application
Ext.application({
    name: 'app',
    appFolder: 'app',
    autoCreateViewport: true,
    requires: [
        'Ext.ux.Router' // Require the UX
    ],
    //
    views: [
        'main.Bottom'
    ],
    controllers: [
        'main.Tops',
        'main.Lefts',
        'Users',
        'Home'
    ],
    /*
     * Here is where routes are defined.
     *  key:    URL matcher
     *  value:  controller + '#' + action to be invoked
     */
    routes: {
        '/'             : 'home#index',
        'users'         : 'users#list',
        'users/:id/edit': 'users#edit',
        // 'settings'      : 'settings#index',
        // 'users'         : 'users#list',
        // 'users/:id/edit': 'users#edit'
    },
    //
    launch: function() {
        var me = this;
        Ext.ux.Router.on({
            beforedispatch: function(token, match, params) {
                Ext.log('beforedispatch ' + token);
            },            
            /**
             * For this example I'm using the dispatch event to render the view
             * based on the token. Each route points to a controller and action. 
             * Here I'm using these 2 information to get the view and render.
             */
            dispatch: function(token, match, params, controller) {
                var view, viewClass, action,
                    viewport    = Ext.getCmp('viewport'),
                    win         = viewport.down('window'),
                    target      = viewport.down('#maincontentView');
                var navTreeController = me.getController('main.Lefts');

                // adjust controller and action names    
                action      = Ext.String.capitalize(match.action);
                controller  = match.controller.charAt(0).toLowerCase() + match.controller.substr(1);
    
                // try to get the view by controller + action names
                viewClass   = Ext.ClassManager.get('app.view.' + controller + '.' + action);

                //不是window类型的view用该方法创建
                if (viewClass.superclass.xtype != 'window' && viewClass) {
                    // create view
                    view = Ext.create(viewClass);
                    // clear target and add new view
                    target.removeAll();
                    Ext.WindowManager.hideAll();  //关闭所有的window
                    target.add(view);
                    
                    // adjust nav
                }
                navTreeController.navSelect(token, match, params);
            }
        });
    }
});