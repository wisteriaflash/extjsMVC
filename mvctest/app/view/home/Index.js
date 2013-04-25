Ext.define('app.view.home.Index', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.homeindex',
    requires: [
        'Ext.ux.datetime.DateTime'
    ],

    //
    title: '首页内容',
    // html: '这是首页内容',
    bodyPadding: 10,
    layout: 'fit',

    initComponent: function(){
        //
        var form = Ext.create('Ext.form.Panel', {
                // title: 'Simple Form',
                border:false,
                height : 500,
                layout : 'hbox',
                items : [
                    {
                        xtype : 'datetimefield',
                        format : 'Y-m-d H:i:s',
                        width: 200
                        // editable: true
                    }
                ]
            });


        this.items = [form];
        //
        this.callParent(arguments);
    }
});