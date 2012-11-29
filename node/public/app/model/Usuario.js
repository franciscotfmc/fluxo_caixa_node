Ext.define('FM.model.Usuario', {
		extend		: 'Ext.data.Model',
		idProperty  : '_id',
		fields :[{
			name : '_id',
			type : 'string'
		},
		{
			name : 'nome',
			type : 'string'
		},
		{
			name : 'email',
			type : 'string'
		},
		{
			name : 'senha',
			type : 'string'
		}
		]
});
