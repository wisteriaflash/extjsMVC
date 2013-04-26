Ext.define('app.view.main.Bottom', {
    extend: 'Ext.Toolbar',
    alias: 'widget.mainbottom',

    border: false,

    initComponent: function () {
        Ext.apply(this, {
            id: 'bottom',
            region: 'south',
            height: 30,
            items: [
                // '当前用户:' + $CONFIG.AdminName,
                '->',
                '技术支持:奥维思'
            ]            
        });
        this.callParent(arguments);
    }
});