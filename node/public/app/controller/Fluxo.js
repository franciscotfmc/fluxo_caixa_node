Ext.require('Ext.window.MessageBox');

Ext.define('FM.controller.Fluxo', {
    extend  : 'Ext.app.Controller',
    stores  : ['Fluxos'],
    models  : ['Fluxo'],
    views   : [
            'fluxo.List',
            'fluxo.Edit'
            ],
    refs: [
    {
        ref         : 'fluxoEdit',
        selector    : 'fluxoEdit'
    },
    {
        ref         : 'fluxoList',
        selector    : 'fluxoList'
    }
    ],
    init    : function()
    {
        this.control({
            'fluxoList': {
                itemdblclick: this.edit
            },

            'fluxoList button[action=insert]': {
                click: this.insert
            },

            'fluxoList button[action=edit]': {
                click: this.edit
            },

            'fluxoList button[action=destroy]': {
                click: this.destroy
            },

            'fluxoList button[action=refresh]': {
                click: this.refresh
            },

            'fluxoEdit button[action=save]': {
                click: this.save
            }
        });
    },

    refresh: function(){
        this.getFluxoList().store.load();
    },

    insert: function(btn, evt, opt) {
        var view = Ext.widget('fluxoEdit');
        view.setTitle('Novo fluxo');
    },

    destroy: function() {

        var grid    = this.getFluxoList(),
            records = grid.getSelectionModel().getSelection();

        if(records.length === 0)
        {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        }
        else
        {
            Ext.Msg.show({
                title   : 'Confirmação',
                msg     : 'Tem CERTEZA que deseja deletar o(s) registro(s) selecionado(s)?',
                buttons : Ext.Msg.YESNO,
                icon    : Ext.MessageBox.WARNING,
                scope   : this,
                width   : 450,
                fn      : function(btn, ev)
                        {
                            if (btn == 'yes')
                            {
                                var store = this.getFluxoList().store;
                                //Em cache - action destroy (records)
                                store.remove(records);
                                //Linha envia o seu store banco
                                this.getFluxoList().store.sync();
                            }
                        }
            });
        }
    },

    save: function(button) {

        var win         = button.up('window'),
            form        = win.down('form').getForm(),
            id   = form.getRecord() ? form.getRecord().get('id') : 0;

        if (form.isValid())
        {
            var record  = form.getRecord(),
                values  = form.getValues();

            if (record)
            {
                if(record.data['id'])
                {
                    record.set(values);
                }
            }
            else
            {
                record = Ext.create('FM.model.Fluxo');
                record.set(values);
                this.getFluxoList().store.add(record);
            }

            win.close();
            this.getFluxoList().store.sync();
        }
        else
        {
            Ext.ux.Msg.flash({
                msg: 'Há campos preenchidos incorretamente',
                type: 'error'
        });

        }

    },

    edit: function(){

        var records = this.getFluxoList().getSelectionModel().getSelection();

        if(records.length === 1)
        {
            var editWind = Ext.widget('fluxoEdit');
            var editForm = editWind.down('form');
            var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }
    }

});
