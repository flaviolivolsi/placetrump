'use strict';

var joi     = require('joi');
var sharp   = require('sharp');
var path    = require('path');
var images  = path.join(__dirname, '../images');

var lastModified = new Date(2016, 3, 5, 2).toUTCString(); // "not modified" since project start

module.exports = [{

    method  : 'GET',
    path    : '/{width}/{height}',
    handler : function(request, reply) {
        var width   = request.params.width;
        var height  = request.params.height;
        var gray    = request.query.gray;
        var key     = ['placetrump', width, height, gray].join('_'); // etag caching

        // load and scale image
        var image = sharp(path.join(images, '1.jpg')).resize(width, height);
        if (gray) image = image.grayscale();

        reply(image).type('image/jpeg').etag(key).header('last-modified', lastModified);
    },
    config  : {
        validate : {
            params : {
                width   : joi.number().integer().min(1).max(3000).required(),
                height  : joi.number().integer().min(1).max(3000).required()
            },
            query : {
                gray    : joi.boolean().default(false, 'color image').optional()
            }
        },
        cache : {
            expiresIn   : 30 * 24 * 60 * 60 * 1000, // 30 days
            privacy     : 'public'
        }
    }

}];
