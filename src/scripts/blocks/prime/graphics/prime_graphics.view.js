/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),
        HighstockExporting = require('highstock.exporting'),

        Template = require('text!./prime_graphics.template.html');

    var GraphicsView = Marionette.ItemView.extend({
        template: _.template(Template),
        className: 'graphics',

        initialize: function () {
            _.bindAll(this, 'exportGraphic');
        },

        ui: {
            container: '.graphics_container'
        },

        renderGraphic: function () {
            this.ui.container.highcharts('StockChart', {
                rangeSelector : {
                    selected : 1
                },

                title : {
                    text : 'AAPL Stock Price'
                },
                
                series : [{
                    name : 'AAPL',
                    data : [
                        7.0, 6.9, 9.5,
                        14.5, 18.2, 21.5,
                        25.2, 26.5, 23.3,
                        18.3, 13.9, 9.6
                    ],
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                model: this.model,
                view: this
            });

            this.renderGraphic();
        },

        exportGraphic: function(e){
            switch ($(e.target).attr('data-exportType'))
            {
                case 'print':
                    myChart.print();
                    break;
                case 'pdf':
                    myChart.exportChart({type: "application/pdf"});
                    break;
                case 'svg':
                    myChart.exportChart({type: "image/svg+xml"});
                    break;
            }
        }
    });

    return GraphicsView;
});
