Ext.require('Ext.window.MessageBox');
Ext.define('FM.controller.Conta', {
    extend: 'Ext.app.Controller',
    stores: ['Contas'],
    models: ['Conta'],

    views: [
        'conta.Edit',
        'conta.List'
    ],

    refs: [
        {
            ref:'contaEdit',
            selector:'contaEdit'
        },

        {
            ref:'contaList',
            selector:'contaList'
        }
    ],

    init: function() {
    this.control({
        'contaList': {
            itemdblclick: this.edit
        },

        'contaList button[action=insert]': {
            click: this.insert
        },

        'contaList button[action=edit]': {
            click: this.edit
        },

        'contaList button[action=destroy]': {
            click: this.delete
        },

        'contaList button[action=refresh]': {
            click: this.refresh
        },

        'contaEdit button[action=save]': {
            click: this.save
        }
    });
    },

    refresh: function(){
        this.getContaList().store.load();
    },

    insert: function(btn, evt, opt) {
        var view = Ext.widget('contaEdit');
        view.setTitle('Nova Conta');
    },

    delete: function() {

        var grid = this.getContaList(), records = grid.getSelectionModel().getSelection();

        if(records.length === 0){
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        } else {

            Ext.Msg.show({
                title : 'Confirmação',
                msg : 'Tem certeza que deseja deletar o(s) registro(s) selecionado(s)?',
                buttons : Ext.Msg.YESNO,
                icon : Ext.MessageBox.WARNING,
                scope : this,
                width : 450,
                fn : function(btn, ev){
                    if (btn == 'yes')
					{
			            // array para armazenar o(s) id(s) dos registros a serem excluídos
			            var idSel = [];

			            // atribui o(s) id(s) dos registros selecionados ao array de id(s) dos registros a serem excluídos
			            for( var i = 0 ; i < records.length ; i++ )
			            {
				            idSel.push(records[i].data.id);
			            }

			            // faz a requisição da exclusão
			            Ext.Ajax.request ({
				            scope	: this,
				            url		: 'php/contas.php?acao=delete', //arquivo que contém o método a utilizar
				            params	: {
							            'id[]'	: idSel //manda o array idSel para o método excluir o registro
						              },
				            success: function(r){ // se a exclusão foi executada com sucesso
					            //Se tudo OK, pegamos a resposta que é um JSON e decodificamos para um objeto
					            var obj = Ext.decode(r.responseText);
					            //Verificamos se obtivemos sucesso na ação
					            if(obj.success){
						            Ext.Msg.alert('Sucesso', obj.message);
						            this.getContaList().store.loadPage(1);
                	            //this.getAgendaList().store.load(); // atualiza informações dogrid
					            }
					            else{
						            Ext.Msg.alert('Erro', obj.message); //exibe a mensagem
					            }
				            },
				            failure: function(){ // se houve algum erro ao submeter o formulário
					            Ext.Msg.alert('Erro', 'Erro na comunicação com o servidor.'); //exibe a mensagem
				            }
			            });
                    }
                }
            });
        }
    },

    save: function(button) {

        var win     	= button.up('window'),
            form    	= win.down('form').getForm(),
            id	= form.getRecord() ? form.getRecord().get('id') : 0;

        if (form.isValid()) {
            var record = form.getRecord(),
                values = form.getValues();
            if (record)
            {
                if(record.data['id'])
                {
                    record.set(values);
                }
            }
            else
            {
                record = Ext.create('FM.model.Conta');
                record.set(values);
                this.getContaList().store.add(record);
            }

            win.close();
            this.getContaList().store.sync();
        }else{
            Ext.ux.Msg.flash({
                msg: 'Há campos preenchidos incorretamente',
                type: 'error'
            });

        }
    },

    edit: function() {
        var records = this.getContaList().getSelectionModel().getSelection();
        if(records.length === 1) {
            var editWind = Ext.widget('contaEdit');
            var editForm = editWind.down('form');
            var record = records[0];
            editForm.loadRecord(record);
        } else {
            return;
        }
    }
});
