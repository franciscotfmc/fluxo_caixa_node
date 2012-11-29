Ext.define('FM.model.Fluxo', {
        extend      : 'Ext.data.Model',
        idProperty  : '_id',
        fields :[{
            name : '_id',
            type : 'string'
        },
        {
            name : 'conta_id',
            type : 'string'
        },
        {
            name : 'descricao',
            type : 'string'
        },
        {
            name : 'dt_fluxo',
            type : 'date',
            dateFormat:'c'
        },
        {
            name : 'valor',
            type : 'float'
        }]
});
