Ext.require(['FM.view.AbstractList']);

Ext.define('FM.view.fluxo.List' ,{
    extend      : 'FM.view.AbstractList',
    alias       : 'widget.fluxoList',
    store       : 'Fluxos',
    title       : 'Lista de Fluxos',
    selModel    : Ext.create('Ext.selection.CheckboxModel'),
    columns: [
        Ext.create('Ext.grid.RowNumberer'),
        {header: 'Código', dataIndex: '_id', flex: 1},
        {
            header: 'Conta',
            dataIndex: 'conta_id',
            flex: 1,
            renderer: function(value) {
                var contasStore = Ext.getStore('Contas');
                var record = contasStore.findRecord('_id', value);
                if (record !== null)
                    return record.get('nome');
                return '';
            }
        },
        {header: 'Descrição', dataIndex: 'descricao', flex: 1},
        {
            header: 'Data',
            dataIndex: 'dt_fluxo',
            flex: 1,
            xtype: 'datecolumn',
            format: 'd/m/Y'
        },
        {
            header: 'Valor',
            dataIndex: 'valor',
            flex: 1,
            renderer: function (value) {
                return Ext.util.Format.currency(value);
            }
        }
    ],
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'Fluxos',
        dock        : 'bottom',
        displayInfo : true
    }],

    initComponent: function(){
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    }
});
