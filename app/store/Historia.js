Ext.define('Proyecto2.store.Historia', {
    extend: 'Ext.data.Store',
    alias: 'store.historia',


    data: { items: [
        { valor1: '1', valor2: "2", operacion: "+", total: "3" },
        { valor1: '5', valor2: "3", operacion: "-", total: "2" },
        { valor1: '10', valor2: "5", operacion: "/", total: "2" },
        { valor1: '6', valor2: "2", operacion: "*", total: "12" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items',
        }
    }
});