Ext.define('FM.model.Conta', {
  extend		: 'Ext.data.Model',
	idProperty  : 'id',
    fields: [
      {
          name: 'id'
      },
	    {
          name: 'conta_id'
      },
      {
          name: 'nome',
          type: 'string'
      },
      {
          name: 'flag_tipo',
      }
    ]
});
