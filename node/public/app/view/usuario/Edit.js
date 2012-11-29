Ext.require(['FM.view.AbstractForm']);
Ext.require(['FM.view.AbstractWindow']);

Ext.define('FM.view.usuario.Edit', {
    extend: 'FM.view.AbstractWindow',
    alias : 'widget.usuarioEdit',
    title : 'Edição de Usuário',
    initComponent: function() {
        this.items = [{
            xtype			: 'abstractform',
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
        this.callParent(arguments);
    }
});
