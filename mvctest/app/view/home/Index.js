Ext.define('app.view.home.Index', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.homeindex',

    //
    title: '首页内容',
    html: '这是首页内容',
    bodyPadding: 10,

    initComponent: function(){
        //
        this.callParent(arguments);
    }
});