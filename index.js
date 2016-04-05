'use strict';

var glue = require('glue');
var path = require('path');

var manifest = {
    connections : [{
        port    : process.env.PORT || 5050,
        routes  : {
            files : {
                relativeTo : path.join(__dirname, 'public')
            }
        }
    }],
    registrations : [{
        plugin : { register : 'inert' }
    }, {
        plugin : {
            register : 'hapi-router',
            options  : {
                cwd     : path.join(__dirname, 'api'),
                routes  : '**/*.route.js'
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
