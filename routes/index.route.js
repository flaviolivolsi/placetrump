'use strict';

module.exports = [{

    method  : 'GET',
    path    : '/',
    handler : function(request, reply) {
        reply.view('index', { title : 'placetrump'});
    }

}, {

    method  : 'GET',
    path    : '/{param*}',
    handler : {
        directory : { path : 'public' }
    }

}];
