Ext.define('FM.store.Contas', {
    extend: 'Ext.data.Store',
    model: 'FM.model.Conta',
    remoteSort: false,
    autoLoad: true,
    pageSize: 10,
    proxy: {
        simpleSortMode: true,
        type: 'ajax',
			api            : {
				read    : 'php/contas.php?acao=list',
				create  : 'php/contas.php?acao=insert',
				update  : 'php/contas.php?acao=update',
				destroy : 'php/contas.php?acao=delete'
			},
		actionMethods : {
				read	: 'POST',
				create	: 'POST',
				update	: 'POST',
				destroy : 'POST'
		},
        reader: {
				type		: 'json',
				root		: 'data',
            successProperty	: 'success'
        },
		writer: {
            type			: 'json',
            writeAllFields	: true,
            encode			: true,
            root			: 'data'
        },
		extraParams: {
            sort 	: 'id',
            dir 	: 'ASC'

        },
        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    },
    listeners : {
      write: function(proxy, operation)
      {
        var obj = Ext.decode(operation.response.responseText);

        if(obj.success){
            Ext.ux.Msg.flash({
                msg: obj.message,
                type: 'success'
            });
        }else{
            Ext.ux.Msg.flash({
                msg: obj.message,
                type: 'error'
            });
        }
      }
    }
});
