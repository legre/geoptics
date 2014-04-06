define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Depth = require('entities/depth.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./depth.view');

    var DepthBlock = Block.create({
        view: View,
        model: Depth.Model,

        onInit: function (options) {
            var _this = this;

            _this._view.on('view:save', function () {
                _this._model.save().then(function () {
                    history.back();
                });
            });
        },

        fetch: function (id) {
            this._model.set('id', id);

            return this._model.fetch();
        }
    });

    return DepthBlock;
});