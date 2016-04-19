var gulp    = require('gulp');
var fs      = require('fs');
var http    = require('request');
var uuid    = require('node-uuid');

gulp.task("fetch-images", function() {
    var basePath = './images/';
    var imagesList = [
        'http://upload.wikimedia.org/wikipedia/commons/archive/d/d2/20150826012236!Donald_Trump_August_19,_2015_(cropped).jpg',
        'http://static.iphoneitalia.com/wp-content/uploads/2016/01/trump2.jpg',
        'http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg',
        'http://www.notiziefree.it/wp-content/uploads/2016/01/donald-trump.jpg',
        'http://www.cruxnow.com/wp-content/uploads/2015/08/Donald-Trump.jpg',
        'http://static4.businessinsider.com/image/559e9efe6bb3f72c54679458/donald-trump-has-surged-to-the-top-of-2-new-2016-polls.jpg',
        'http://static1.businessinsider.com/image/55ca4540371d22462c8bcb17/donald-trump-is-still-soaring-in-iowa--but-there-are-now-some-clear-warning-signs.jpg',
        'http://moked.it/files/2015/12/trump.jpg',
        'http://pmcdeadline2.files.wordpress.com/2015/06/donald-trump.jpg',
        'http://i2.wp.com/www.powerlineblog.com/ed-assets/2016/01/donald-trump.jpg',
        'http://thequery.it/wp-content/uploads/2016/02/AAEAAQAAAAAAAASmAAAAJDgzMzY1YWMzLWZjMGItNDQ2NC04MTIyLWVhNGZkYThjNDZkZQ.jpg',
        'http://www.elezioniusa.it/wp-content/uploads/2016/03/trump-2.jpg',
        'http://blogs.thegospelcoalition.org/trevinwax/files/2016/01/trump.jpg',
        'http://media3.s-nbcnews.com/j/newscms/2015_50/1312506/151122-donald-trump-smiling-956a_6d624dc0061bbd1233cc33461649ea73.nbcnews-fp-1200-800.jpg',
        'http://vice-images.vice.com/images/articles/crops/2015/07/01/donald-trump-is-losing-his-insane-pr-war-against-mexico-1435778037-crop_mobile.jpg',
        'http://media3.s-nbcnews.com/j/newscms/2015_33/1165401/150810-donald-trump-debate-743a_ded2a0af932f2c2332757273ea911da2.nbcnews-fp-1200-800.jpg',
        'http://www.mifacciodicultura.it/wp-content/uploads/2016/03/donald1-.jpg',
        'http://s.newsweek.com/sites/www.newsweek.com/files/2015/08/04/donald-trump.jpg',
        'http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg',
        'http://s3-origin-images.politico.com/2015/06/16/150616_latimer_trump_ap.jpg'
    ];
        
    for (var i=0;i<imagesList.length;i++) {
        var img = imagesList[i];
        var request = http.get(img, {encoding: 'binary'}, function(error, response, body) {
            var dest = basePath+uuid.v4()+'.jpg';
            if (response.statusCode === 200) { fs.writeFileSync(dest, body, 'binary'); }
        });
    }
});