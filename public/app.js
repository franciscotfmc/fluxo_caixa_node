/**
 * Ext JS Library 4.0.2
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 *
 */
Ext.Loader.setPath('Ext', 'extjs/src');

Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true
});

Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
	'Ext.chart.*'
    ]);

Ext.require(['Ext.Window', 'Ext.layout.container.Fit', 'Ext.fx.target.Sprite']);

Ext.application({
    name: 'FM',
    appFolder: 'app',
    controllers: [
     'Usuario', 'Conta', 'Fluxo', 'GraficoFluxoConta'
    ],
    autoCreateViewport: true,
    launch: function() {
        FM.app = this;
    }
});
