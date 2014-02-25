define(function () {
    'use strict';

    var getPaths = function (basePath, paths) {
        var result = {};

        Object.keys(paths).forEach(function (key) {
            result[key] = basePath + paths[key];
        });

        return result;
    };

    var basePaths = {
        src: '../',
        dist: './'
    };

    var mockPaths = {
        adminUser: 'data/admin_user.data.json',
        adminUsers: 'data/admin_users.data.json',

        adminNoAttachedBoreholes: 'data/admin_no_attached_boreholes.data.json',
        adminFields: 'data/admin_fields.data.json',
        adminClusters: 'data/admin_clusters.data.json',
        adminBoreholes: 'data/admin_boreholes.json',
        adminPressureSensors: 'data/admin_pressure_sensors.json',
        adminTemperatureSensors: 'data/admin_temperature_sensors.json',

        adminField: 'data/admin_field.data.json',
        adminCluster: 'data/admin_cluster.data.json',
        adminBorehole: '',
        adminPressureSensor: '',
        adminTemperatureSensor: '',

        graphics: 'data/graphics.data.json',

        primeSensorsTree: 'data/prime_sensors_tree.data.json',
        primeSensorsTreeSet: 'data/prime_sensors_tree_set.data.json'
    };

    var rest = {
        local: getPaths(basePaths.src, mockPaths)
    };

    return rest;
});
