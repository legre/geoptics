define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config');

    var GraphicPointModel = Backbone.AssociatedModel.extend();

    var GraphicModel = Backbone.AssociatedModel.extend({
        relations: [
            {
                type: Backbone.Many,
                key: 'points',
                relatedModel: GraphicPointModel
            }
        ]
    });

    var GraphicCollection = Backbone.Collection.extend({
        url: AppConfig.rest.graphics,
        model: GraphicModel
    });

    return {
        Model: GraphicModel,
        Collection: GraphicCollection
    };
});