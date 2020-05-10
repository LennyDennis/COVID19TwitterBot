let Twit = require('twit');
let config = require('./config');

let T = new Twit(config);

tweetUpdate();
setInterval(tweetUpdate(), 1000*60*60*6  )

function tweetUpdate(){

let tweet = {
    status:'Jambo Kenyans, I am COVID19 Kenya bot that tweets the latest info about the coronavirus every 12 hours.'
}

T.post('statuses/update', tweet, tweeted)

function tweeted(err,data, response){
    if(err){
        console.log("err")
    }else{
        console.log("hello")
    }
  }
}