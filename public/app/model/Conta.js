Ext.define('FM.model.Conta', {
  extend		: 'Ext.data.Model',
	idProperty  : '_id',
    fields: [
      {
          name: '_id'
      },
	    {
          name: 'conta_id'
      },
      {
          name: 'nome',
          type: 'string'
      },
      {
          name: 'flag_tipo'
      }
    ]
});
