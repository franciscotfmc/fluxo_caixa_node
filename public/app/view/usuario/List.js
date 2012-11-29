Ext.require(['FM.view.AbstractList']);

Ext.define('FM.view.usuario.List' ,{
    extend      : 'FM.view.AbstractList',
    alias       : 'widget.usuarioList',
    store       : 'Usuarios',
    title       : 'Lista de Usuários',
    selModel    : Ext.create('Ext.selection.CheckboxModel'),
    columns: [
        Ext.create('Ext.grid.RowNumberer'),
        {header: 'Código'	,  dataIndex: '_id'	,  flex: 1},
        {header: 'Nome'		,  dataIndex: 'nome'	,  flex: 1},
        {header: 'E-mail'	,  dataIndex: 'email'		,  flex: 1}
    ],
    dockedItems: [{
        xtype		: 'pagingtoolbar',
        store		: 'Usuarios',
        dock		: 'bottom',
        displayInfo	: true
    }],

    initComponent: function(){
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    }
});
