Ext.require(['FM.view.AbstractForm']);
Ext.require(['FM.view.AbstractWindow']);
Ext.require(['FM.view.conta.Combo']);

Ext.define('FM.view.fluxo.Edit', {
    extend: 'FM.view.AbstractWindow',
    alias : 'widget.fluxoEdit',
    title : 'Edição de Fluxo',
    initComponent: function() {
        this.items = [{
            xtype           : 'abstractform',
            items   : [
            {
                xtype       : 'contaCombo'
            },
            {
                xtype       : 'textarea',
                name        : 'descricao',
                ref         : 'descricao',
                fieldLabel  : 'Descrição',
                allowBlank  : false
            },
            {
                xtype       : 'datefield',
                name        : 'dt_fluxo',
                ref         : 'dt_fluxo',
                fieldLabel  : 'Data',
                maxValue    : new Date(),
                format      : 'd/m/Y',
                submitFormat: 'Y-m-d',
                allowBlank  : false
            },
            {
                xtype           : 'numberfield',
                allowDecimals   : true,
                minValue        : 0,
                name            : 'valor',
                ref             : 'valor',
                fieldLabel      : 'Valor',
                allowBlank      : false
            }
            ]

            }
        ];
        this.callParent(arguments);
    }
});
