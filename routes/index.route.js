'use strict';

var config = require('../config');

module.exports = [{

    method  : 'GET',
    path    : '/',
    handler : function(request, reply) {
        reply.view('index', {
            title : config.title,
            url   : request.server.info.uri
        });
    }

}, {

    method  : 'GET',
    path    : '/{param*}',
    handler : {
        directory : { path : 'public' }
    }

}];
