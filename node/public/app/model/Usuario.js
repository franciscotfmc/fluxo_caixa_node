Ext.define('FM.model.Usuario', {
		extend		: 'Ext.data.Model',
		idProperty  : 'id',
		fields :[{
			name : 'id',
			type : 'int'
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
