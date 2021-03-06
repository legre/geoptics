define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Bus = require('bus'),

        SensorsSetsView = require('./sensors_sets.view');

    var SensorsSetsBlock = Block.create(
        {
            view: SensorsSetsView,

            onInit: function (options) {
                this._view.model = options;
            }
        },
        {
            show: function () {
                Bus.events.trigger('app:modal:show', this._view);
            }
        }
    );

    return SensorsSetsBlock;
});
