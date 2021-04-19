Ext.define('Proyecto2.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',

        'Proyecto2.view.main.Historial'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'top',


    items: [{          
            title: 'Cálculos',
            iconCls: 'x-fa fa-calculator',
            layout: 'fit',
            
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'numberfield',
                label: 'Ingrese primer valor',
                name: 'valor1',
                margin: 10,
                height: 52

            },{
                xtype: 'numberfield',
                label: 'Ingrese segundo valor',
                name: 'valor2',
                margin: 10,
                height: 52

            },{
                xtype: 'fieldset',
                
                items: [{
                    xtype: 'selectfield',
                    label: 'Seleccione operación...',
                    name:'operacion',
                    identifier: 'ope',
                    options: [{
                        text: 'Suma [+]'
                    }, {
                        text: 'Resta [-]'
                    }, {
                        text: 'Multiplicación [*]'
                    }, {
                        text: 'División [/]'
                    }]
                }]
            },{
                xtype: 'button',
                margin: 10,
                height: 52,
                style: 'background-color:#FF9D00; color: white;',
                text: 'Calcular',
                
                handler: function() {
                    //tomamos los valores de los fields
                    var valor1= document.querySelector("[name='valor1']").value;
                    var valor2= document.querySelector("[name='valor2']").value;
                    var operacion= document.querySelector("[name='operacion']").value;
                    
                    //comprobamos campos vacios
                    if(valor1 == ''){
                        alert('Ingrese el primer valor.');
                    }else if (valor2 == ''){
                        alert('Ingrese el segundo valor.');
                    }else if (operacion == ''){
                        alert('Seleccione operación a realizar.');
                    }else{
                        switch (operacion){
                            case 'Suma [+]':
                                var totales = parseInt(valor1)+parseInt(valor2);
                                var muestra = document.querySelector("[name='total']");

                                muestra.value = 'Total: '+totales;
                                muestra.style.fontSize = "large";
                                muestra.style.color = "black";
                                muestra.style.fontWeight = "bolder";
                                
                            break;

                            case 'Resta [-]':
                                var totales = parseInt(valor1)-parseInt(valor2);
                                var muestra = document.querySelector("[name='total']");

                                muestra.value = 'Total: '+totales;
                                muestra.style.fontSize = "large";
                                muestra.style.color = "black";
                                muestra.style.fontWeight = "bolder";

                            break;

                            case 'Multiplicación [*]':
                                var totales = parseInt(valor1)*parseInt(valor2);
                                var muestra = document.querySelector("[name='total']");

                                muestra.value = 'Total: '+totales;
                                muestra.style.fontSize = "large";
                                muestra.style.color = "black";
                                muestra.style.fontWeight = "bolder";

                            break;

                            case 'División [/]':
                                var totales = parseInt(valor1)/parseInt(valor2);
                                var muestra = document.querySelector("[name='total']");

                                muestra.value = 'Total: '+totales;
                                muestra.style.fontSize = "large";
                                muestra.style.color = "black";
                                muestra.style.fontWeight = "bolder";

                            break;
                        }
                    }
                    
                }
                

            },{
                xtype: 'numberfield',
                name:'total',
                margin: 10,
                disabled: true,
                style: 'border: 3px solid #E2E2E2;',
                height: 52,

            }]
        },{
            title: 'Historial',
            iconCls: 'x-fa fa-history',
            items:[{
                xtype:'historia'
            }]
    }]
});
