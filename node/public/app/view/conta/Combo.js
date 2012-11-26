Ext.define('FM.view.conta.Combo', {
    extend			: 'Ext.form.field.ComboBox',
    alias			: 'widget.contaCombo',
    name 			: 'conta_id',
    fieldLabel		: 'Conta',
    store			: 'Contas',
    displayField	: 'nome',
    valueField		: 'id',
    queryMode		: 'local',
    typeAhead		: true,
    forceSelection	: true,
    initComponent	: function() {
        this.callParent(arguments);
    }
});
