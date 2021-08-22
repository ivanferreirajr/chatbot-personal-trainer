const YouTube = require('youtube-node');
const config = require('./config/youtube');

const youtube = new YouTube();

youtube.setKey(config.key);

function searchVideoURL(message, queryText) {
    return new Promise((resolve, reject) => {
        youtube.search(`Treino de ${queryText}`, 1, function(err, results) {
            if (err) {
                resolve('Não foi possível encontrar um vídeo no momento, por favor tente mais tarde');
            }
            else {
                // console.log(JSON.stringify(results, null, 2));
                const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);

                const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`).join(', ');

                resolve(`${message} ${youtubeLinks}`);
            }    
        });
    });
}

module.exports = searchVideoURL;