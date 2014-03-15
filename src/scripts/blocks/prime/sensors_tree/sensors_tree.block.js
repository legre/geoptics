define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Bus = require('bus'),

        SessionBlock = require('blocks/session/session.block'),
        SensorsSetsBlock = require('blocks/prime/sensors_sets/sensors_sets.block'),

        SensorsTree = require('./sensors_tree.entity'),
        SensorsTreeView = require('./sensors_tree.view');

    var sessionBlock = SessionBlock.getInstance(),
        sensorsSetsBlock = SensorsSetsBlock.getInstance();

    var SensorsTreeBlock = Block.create({
        view: SensorsTreeView,
        model: SensorsTree.Model,

        onInit: function () {
            sensorsSetsBlock.init(this._modelInstance);

            var currentUser = sessionBlock.getCurrentUser();

            if (!currentUser.isNew()) {
                this._modelInstance.set('sets', currentUser.get('sensorsSets'));
            }

            this._viewInstance.on('save:click', sensorsSetsBlock.show);
        },

        fetch: function () {
            return this._modelInstance.fetchChildren();
        },

        triggers: {
            'model:state:change': 'state:change'
        }
    });

    return SensorsTreeBlock;
});
