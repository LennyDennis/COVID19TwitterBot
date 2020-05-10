let Twit = require('twit');
let config = require('./config');

let T = new Twit(config);

tweetUpdate();
setInterval(tweetUpdate(), 1000*60*60*6  )

