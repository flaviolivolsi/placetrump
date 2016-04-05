'use strict';

var sharp   = require('sharp');
var path    = require('path');
var images  = path.join(__dirname, '../images');

module.exports = [{

    method  : 'GET',
    path    : '/{width}/{height}',
    handler : function(request, reply) {
        var image = sharp(path.join(images, '1.jpg')).resize(request.params.width | 0, request.params.height | 0);
        reply(image).type('image/jpeg');
    }

}];
