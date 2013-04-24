Ext.define('app.view.Viewport', {
    extend: 'Ext.container.Viewport',
    renderTo: Ext.getBody(),
    requires: [
        
    ],

    id: 'viewport',
    layout: 'border',
    items: [{
        xtype: 'maintop'
    },{
        xtype: 'mainleft'
    },{
        xtype: 'mainbottom'
    },{
        xtype: 'container',
        itemId: 'maincontentView',
        region: 'center',
        layout: 'fit'
    }]
});