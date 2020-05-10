let Twit = require('twit');
let config = require('./config');
let fs = require('fs');
let path = require('path')

let T = new Twit(config);

tweetUpdate();
// setInterval(tweetUpdate(), 1000*60*60*6  )

function tweetUpdate(){
    let imagePath = path.join(__dirname, '/images/komesha.jpg');
    let b64content = fs.readFileSync(imagePath,{encoding:'base64'});

    T.post('media/upload', { media_data: b64content }, function (err, data, response) {    
        let mediaIdStr = data.media_id_string
        let altText = "Small flowers in a planter on a sunny balcony, blossoming."
        let meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
       
        T.post('media/metadata/create', meta_params, function (err, data, response) {
          if (!err) {
            let tweet = { status: 'loving life #nofilter', media_ids: [mediaIdStr] }
       
            T.post('statuses/update', tweet, function (err, data, response) {
              console.log(data)
            })
          }
        })
    })
     

}