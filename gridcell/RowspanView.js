/**
 * 实现grid的rowspan效果
 *
 *  1.在列模型里需要配置合并行的列中设置rowspan属性，如：{dataIndex:'xxx', header:'xxx', rowspan:3} //该列每三行合并一行
 *  2.为grid设置view属性 => view : new ExtBuilder.grid.RowspanView()
 *  3.为grid设置cls属性 => cls : 'rowspan-grid'
 *  4.加入css样式
 */
 Ext.define('Ext.ux.grid.RowspanView', {
    extend: 'Ext.grid.View',
    constructor: function(conf) {
        Ext.ux.grid.RowspanView.superclass.constructor.call(this, conf);
    },
    // private
    //清除合并的行中，非第一行的数据
    cleanRenderer : function(column, value, metaData, record, rowIndex, colIndex, store) {
        var rowspan = column.rowspan;
        if(!Ext.isEmpty(rowspan) && rowspan.length !== 0){
          //var arrLast = new Array;
          var recordFront = rowIndex === 0 ? null : store.getAt(rowIndex-1);
          //var recordLast = rowIndex === store.getCount() ? null : store.getAt(rowIndex+1);
          var isFront = false;
          //var isLast = false;
          for(var i = 0;i < rowspan.length; i++){
            var key = rowspan[i];
            if(recordFront != null && record.get(key) === recordFront.get(key)){
              isFront = true;
            }else{
              isFront = false;
            }
          }
            if(isFront){
                return '';
            }
        }
        return column.renderer(value, metaData, record, rowIndex, colIndex, store);
    },
    // private
    doRender : function(cs, rs, ds, startRow, colCount, stripe){
        var ts = this.templates, ct = ts.cell, rt = ts.row, last = colCount-1;
        var tstyle = 'width:'+this.getTotalWidth()+';';
        // buffers
        var buf = [], cb, c, p = {}, rp = {tstyle: tstyle}, r;

        //cmConfig列模型
        var cmConfig = this.cm.config, rowspans=[];
        //for(var i = 0, len = cmConfig.length; i < len; i++){
        //    rowspans.push(Math.max((cmConfig[i].rowspan || 0), 0));
        //}

        for(var j = 0, len = rs.length; j < len; j++){
            r = rs[j]; cb = [];
            var rowIndex = (j+startRow);
            for(var i = 0; i < colCount; i++){
                c = cs[i];
                p.id = c.id;
                p.css = i === 0 ? 'x-grid3-cell-first ' : (i == last ? 'x-grid3-cell-last ' : '');
                p.attr = p.cellAttr = "";
                p.value = this.cleanRenderer(cmConfig[i], r.data[c.name], p, r, rowIndex, i, ds);
                p.style = c.style;
                if(Ext.isEmpty(p.value)){
                    p.value = "&nbsp;";
                }
                if(this.markDirty && r.dirty && typeof r.modified[c.name] !== 'undefined'){
                    p.css += ' x-grid3-dirty-cell';
                }
                //----------------------------------------------------------------------------
                //alert(this.cm.config[0].rowspan);
                //添加rowspan类，用样式实现合并行的效果
                var rowspan = cmConfig[i].rowspan;
                var record = r;
                var recordFront = rowIndex === 0 ? null : ds.getAt(rowIndex-1);
                var recordLast = rowIndex === ds.getCount() ? null : ds.getAt(rowIndex+1);
                var isFront = false;
                var isLast = false;
                 if(!Ext.isEmpty(rowspan) && rowspan.length !== 0){
                  for(var k = 0;k < rowspan.length; k++){
                    var key = rowspan[k];
                    if(recordFront != null && record.get(key) === recordFront.get(key)){
                      isFront = true;
                    }else{
                      isFront = false;
                    }
                    if(recordLast != null && record.get(key) === recordLast.get(key)){
                      isLast = true;
                    }else{
                      isLast = false;
                    }
                  }
                  if(!isLast　){
                    p.css += ' rowspan';
                  }else{
                    p.css += ' rowspan-unborder';
                  }
                  
                }
            
                /**
                if(rowspans[i] !== 0){
                    //每rowspan行以及最后一行加上rowspan类，即加上border-bottom
                    if(j == (len-1) || (rowIndex+1) % rowspans[i] === 0){
                        p.css += ' rowspan';
                    }else{
                        p.css += ' rowspan-unborder';
                    }
                }*/
                //----------------------------------------------------------------------------
                cb[cb.length] = ct.apply(p);
            }
            var alt = [];
            if(stripe && ((rowIndex+1) % 2 === 0)){
                alt[0] = "x-grid3-row-alt";
            }
            if(r.dirty){
                alt[1] = " x-grid3-dirty-row";
            }
            rp.cols = colCount;
            if(this.getRowClass){
                alt[2] = this.getRowClass(r, rowIndex, rp, ds);
            }
            rp.alt = alt.join(" ");
            rp.cells = cb.join("");
            buf[buf.length] =  rt.apply(rp);
        }
        return buf.join("");
    }
});
