'use strict';

var _       = require('lodash');
var joi     = require('joi');
var sharp   = require('sharp');
var path    = require('path');
var images  = path.join(__dirname, '../images');

var lastModified = new Date(2016, 3, 5, 2).toUTCString(); // "not modified" since project start

function getImage(request, reply, options) {
    var key = _(options).values().unshift('drumpf').compact().join('_');
    console.log('getImage: %s', key);

    // load, scale and transform image
    var image = sharp(path.join(images, '1.jpg')).resize(options.width, options.height);
    if (options.color === 'gray')   image = image.grayscale();
    if (options.color === 'bw')     image = image.threshold(130);
    if (options.blur)               image = image.blur(15);

    reply(image).type('image/jpeg').etag(key).header('last-modified', lastModified);
}

module.exports = _.transform([null, 'cats'], function(routes, category) {
    _.each([null, 'gray', 'bw'], function(color) {
        _.each([null, 'blur'], function(blur) {
            routes.push({

                method  : 'GET',
                path    : _([ '/{width}/{height}', category, color, blur ]).compact().join('/'),
                handler : function(request, reply) {
                    getImage(request, reply, {
                        width       : request.params.width,
                        height      : request.params.height,
                        category    : category,
                        color       : color,
                        blur        : blur
                    });
                },

                config : {
                    validate : {
                        params : {
                            width   : joi.number().integer().min(1).max(3000).required(),
                            height  : joi.number().integer().min(1).max(3000).required()
                        }
                    },
                    cache : {
                        expiresIn   : 30 * 24 * 60 * 60 * 1000, // 30 days
                        privacy     : 'public'
                    }
                }

             });
        });
    });
});
