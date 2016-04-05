'use strict';

var glue = require('glue');
var path = require('path');

var manifest = {
    connections : [{
        port    : process.env.PORT || 5050,
        routes  : {
            files : {
                relativeTo : __dirname
            }
        }
    }],
    registrations : [{
        plugin : { register : 'inert' }
    }, {
        plugin : {
            register : 'hapi-router',
            options  : {
                cwd     : __dirname,
                routes  : 'routes/**/*.route.js'
            }
        }
    }]
};

glue.compose(manifest, { relativeTo: __dirname }, function(error, server) {
    if (error) throw error;

    server.start(function() {
        console.info('Server running at %s', server.info.uri);
    });
});
