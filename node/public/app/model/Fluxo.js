Ext.define('FM.model.Fluxo', {
        extend      : 'Ext.data.Model',
        idProperty  : 'id',
        fields :[{
            name : 'id',
            type : 'int'
        },
        {
            name : 'conta_id',
            type : 'int'
        },
        {
            name : 'descricao',
            type : 'string'
        },
        {
            name : 'dt_fluxo',
            type : 'date',
            dateFormat:'Y-m-d'
        },
        {
            name : 'valor',
            type : 'float'
        }]
});
