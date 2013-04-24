Ext.onReady(function () {
    var dataStore = new Ext.data.JsonStore({
        fields: ['Month', 'rate'],
        data: [
			{ "Num": "12", "Month": "2013-1", "MaxPeopleNum": "100", "Region": "30", "rate": "88" },
            { "Num": "12", "Month": "2013-2", "MaxPeopleNum": "100", "Region": "30", "rate": "88" },
            { "Num": "12", "Month": "2013-3", "MaxPeopleNum": "100", "Region": "30", "rate": "88" }
        ]
    });



    Ext.create('Ext.panel.Panel', {
        title: '员工年龄分布图',
        id:'chart',
        width: 400,
        height: 400,
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [
			{
			    xtype: 'chart',
			    store: dataStore,
			    axes: [
                    { type: 'Numeric', position: 'left', minimum: 0, maximum: 100, title: '百分比' },
                    { id:'cc', type: 'Category', position: 'bottom', fields: ['Month'], title: '地区' }
			    ],
			    legend: { position: 'top' },
			    series: [
                 {
                     type: 'column', yField: ['rate'], title: ['空岗率'], label: {
                         field: ['rate'],
                         display: 'outside',
                         font: '18px "Lucida Grande"',
                         renderer: function (v) {
                             return v + '%';
                         }
                     }
                 }
			    ]
			}


        ]
    });

    Ext.getCmp('chart').axes.Category.title = "东区";


});