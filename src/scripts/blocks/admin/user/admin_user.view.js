/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        AdminUserTemplate = require('text!./admin_user.template.html');

    var AdminUsersView = Marionette.ItemView.extend({
        template: _.template(AdminUserTemplate),
        className: 'admin_user',

        initialize: function () {
            _.bindAll(this, 'addGroup', 'save');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                model: this.model,
                view: this
            });
        },

        addGroup: function () {
            this.model.get('groups').add(this._group);
        },

        save: function () {
            this.trigger('save:click', this.model);
        },

        _group: {
            id: '',
            name: ''
        }
    });

    return AdminUsersView;
});
