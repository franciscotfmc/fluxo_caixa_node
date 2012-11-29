Ext.require(['FM.view.AbstractForm']);
Ext.require(['FM.view.AbstractWindow']);
Ext.require(['FM.view.conta.Combo']);
Ext.require(['FM.view.conta.ComboTipo']);

Ext.define('FM.view.conta.Edit', {
    extend: 'FM.view.AbstractWindow',
    alias : 'widget.contaEdit',
    title : 'Edição de Conta',

    initComponent: function() {

        this.items = [{
            xtype: 'abstractform',
            items: [
			        {
                  xtype		: 'contaCombo',
                  allowBlank: true
              },
			        {
                  name 		: 'nome',
                  fieldLabel	: 'Nome',
          				allowBlank	: false
              },
			        {
                  name 		: 'flag_tipo',
                  fieldLabel	: 'Tipo',
                  xtype       : 'contaComboTipo',
                	allowBlank	: false
              }
    			]}
        ];
        this.callParent(arguments);
    }
});
