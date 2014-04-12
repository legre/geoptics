/* global _, Backbone */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./borehole.template.html');

    var BoreholeView = Marionette.ItemView.extend({
        template: _.template(Template),

        className: 'admin_borehole inner-container',

        initialize: function () {
            _.bindAll(this, 'save');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                borehole: this.model,
                view: this
            });
        },

        serializeData: function () {
            return {
                borehole: this.model
            };
        },

        editTSensor: function (ev, data) {
            ev.stopPropagation();
            var tsensor = data.tsensor;
            Backbone.history.navigate('#/admin/boreholes/' +
                this.model.get('id') + '/tsensors/' +
                tsensor.get('channelNumber'));
        },

        editPSensor: function (ev, data) {
            ev.stopPropagation();
            var psensor = data.psensor;
            Backbone.history.navigate('#/admin/boreholes/' +
                this.model.get('id') + '/psensors/' +
                psensor.get('channelNumber'));
        },

        save: function () {
            this.trigger('view:save');
        }
    });

    return BoreholeView;
});
