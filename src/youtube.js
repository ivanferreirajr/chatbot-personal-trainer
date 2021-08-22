const YouTube = require('youtube-node');
const config = require('./config/youtube');

const youtube = new YouTube();

youtube.setKey(config.key);

youtube.search('Treino de biceps', 2, function(err, results) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(JSON.stringify(results, null, 2));
    }    
});
