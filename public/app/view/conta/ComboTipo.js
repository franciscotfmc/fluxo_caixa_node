Ext.define('FM.view.conta.ComboTipo', {
    extend          : 'Ext.form.field.ComboBox',
    alias           : 'widget.contaComboTipo',
    name            : 'flag_tipo',
    fieldLabel      : 'Tipo',
    store           : Ext.create('Ext.data.Store', {
        fields : ['valor', 'descricao'],
        data : [
            {'valor':'0', 'descricao':'Entrada'},
            {'valor':'1', 'descricao':'Saída'}
        ]
    }),
    displayField    : 'descricao',
    valueField      : 'valor',
    queryMode       : 'local',
    typeAhead       : true,
    forceSelection  : true,
    initComponent   : function() {
        this.callParent(arguments);
    }
});
