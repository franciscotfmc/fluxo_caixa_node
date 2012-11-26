Ext.define('FM.view.usuario.Edit', {
    extend		: 'Ext.window.Window',
    alias 		: 'widget.usuarioEdit',
    title 		: 'Edição de usuários',
    layout		: 'fit',
    autoShow	: true,
    modal		: true,
    initComponent: function() {
        this.items = [{
            xtype			: 'form',
            style			: 'background-color: #fff;',
            fieldDefaults	: {
                anchor			: '100%',
                labelAlign		: 'left',
                labelWidth		: 150,
                allowBlank		: false,
                combineErrors	: false,
                msgTarget		: 'side'
            },
            defaultType			: 'textfield',
            defaults			: {
							anchor: '100%'
            },
            items	: [
			{
                xtype		: 'textfield',
                name 		: 'nome',
                ref			: 'nome',
                fieldLabel	: 'Nome',
                allowBlank	: false
            },
			{
                xtype		: 'textfield',
                vtype       : 'email',
                name 		: 'email',
                ref			: 'email',
                fieldLabel	: 'E-mail',
                allowBlank	: false
            }
			,
			{
                xtype		: 'textfield',
                inputType   : 'password',
                name 		: 'senha',
                ref			: 'senha',
                fieldLabel	: 'Senha',
                allowBlank	: false
            }
			]

			}
        ];

        this.buttons = [{
            text	: 'Salvar',
            action	: 'save',
            iconCls	: 'save'
        },
        {
            text	: 'Cancelar',
            scope	: this,
            iconCls	: 'cancel',
            handler	: this.close
        }];

        this.callParent(arguments);
    }
});
