/* global Backbone */

define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        GuestLayout = require('./guest.layout');

    var Blocks = {
            Session: require('blocks/session/session.block'),
            Login: require('blocks/login/login.block')
        },
        Bundles = {
            Common: require('bundles/common/common.bundle')
        };

    var blocks = Utils.getInstances(Blocks),
        commonBundle = Bundles.Common.getInstance(),
        guestLayout = new GuestLayout();

    var initialize = function () {
        blocks.session.init();
        blocks.login.init();
    };

    guestLayout.on('show', function () {
        blocks.login.render(guestLayout.container);
    });

    blocks.session.on('session:in', function () {
        handlers.check();
    });

    var handlers = {
        check: function () {
            var access = blocks.session.getAccessLevel();

            if (_.isNumber(access) && access < 2) {
                // BUG ?
                if (!location.hash) {
                    Backbone.history.navigate('#/')
                }

                commonBundle.init();
            }
        }
    };

    return {
        handlers:handlers,
        layout: guestLayout,
        init: initialize
    };
});
