Ext.define('Proyecto2.view.main.Historial',{
    extend: 'Ext.grid.Grid',
    xtype: 'historia',
    

    store: {
        type: 'historia'
    },

    columns:[{
        text:'Valor 1',
        dataIndex:'valor1'
    },{
        text:'Valor 2',
        dataIndex: 'valor2'
    },{
        text:'Operación',
        dataIndex:'operacion'
    },{
        text:'Total',
        dataIndex:'total',
        flex:1
    }],

    height: 500,
    width: 500,
    

    items:[{
        xtype: 'button',
        margin: 10,
        height: 52,
        style: 'background-color:#FF9D00; color: white;',
        text: 'Reset',

        

        handler: function() {

        }
    }],
    
        

});