'use strict';

var handlers = require('../handlers'),
    utils = require('../utils');

module.exports.extend = function (server) {
    var url = utils.getUrlTemplates('perforations');

    server.post(url.base, handlers.body);
    server.get(url.spec(), handlers.getGen('perforation'));
    server.put(url.spec(), handlers.body);
    server.delete(url.spec(), handlers.empty);
};
