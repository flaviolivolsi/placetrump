'use strict';

var glue    = require('glue');
var path    = require('path');
var config  = require('./config');
var url     = require('url');

var manifest = {
    connections : [{
        port    : config.port,
        host    : config.url && url.parse(config.url).host,
        uri     : config.url,
        address : '0.0.0.0',
        routes  : {
            files : {
                relativeTo : __dirname
            }
        }
    }],
    registrations : [{
        plugin : { register : 'inert' }
    }, {
        plugin : { register : 'vision' }
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

    server.views({
        engines     : { ejs: require('ejs') },
        relativeTo  : __dirname,
        path        : 'views'
    });

    server.start(function() {
        console.info('Server running at %s', server.info.uri);
    });
});
