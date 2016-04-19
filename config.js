'use strict';

module.exports = {
    title : 'placetrump',
    url   : process.env.NODE_ENV === 'production' ? 'http://placetrump.xyz' : null,
    port  : process.env.PORT || 5050
};
