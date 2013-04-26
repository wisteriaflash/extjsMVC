Ext.define('app.view.main.Top', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.maintop',

    html: 'XX管理系统',
    height: 80,
    // split: true,
    region: 'north',
    bodyCls: 'topbar',
    margin: '0 0 5 0',
    //
    bbar: [{
        iconCls: 'icon-user'
        // text: '您好:' + $CONFIG.AdminName + ' 欢迎登录'
    }, '-', {
        text: Ext.Date.format(new Date(), '今天是:Y年m月d日')
    }, '->', {
        id: 'logout',
        text: '退出',
        iconCls: 'icon-logout'
    }],

    initComponent: function(){
        //
        this.callParent(arguments);
    }
});