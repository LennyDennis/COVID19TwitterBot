const Twit = require('twit');
const config = require('./config');
const fs = require('fs');
const path = require('path');
const { NovelCovid } = require("novelcovid");

let T = new Twit(config);

tweetUpdate();
setInterval(tweetUpdate, 1000*10)

async function tweetUpdate(){
    const track = new NovelCovid();
    const imagePath = path.join(__dirname, '/images/komesha.jpg');
    let b64content = fs.readFileSync(imagePath,{encoding:'base64'});

    let worldStats = await track.all(); 
    let kenyaStats = await track.countries('Kenya');

    function deathtitle(){
        if(kenyaStats.todayDeaths>1){
            return 'Today\'s Deaths'
        }else{
            return 'Today\'s Death'
        }
    }

    let worldUpdate = `🌍 Worldwide COVID19 Statistics\nConfirmed Cases: ${worldStats.cases.toLocaleString()} (+${worldStats.todayCases.toLocaleString()})\nRecovered: ${worldStats.recovered.toLocaleString()}\nDeaths: ${worldStats.deaths.toLocaleString()} (+${worldStats.todayDeaths})`;
    let kenyaUpdate = `\n\n🇰🇪  Kenya COVID19 Statistics:\nConfirmed Cases: ${kenyaStats.cases.toLocaleString()} (+${kenyaStats.todayCases.toLocaleString()})\nRecovered: ${kenyaStats.recovered.toLocaleString()}\nDeaths: ${kenyaStats.deaths.toLocaleString()} (+${kenyaStats.todayDeaths})\nTotal Tests: ${kenyaStats.tests.toLocaleString()}`;
    let hashtags = `\n\n#KomeshaCorona #covid_19Ke #covid19`
 
    T.post('media/upload', { media_data: b64content }, function (err, data, response) {        let mediaIdStr = data.media_id_string
        let altText = "Small flowers in a planter on a sunny balcony, blossoming."
        let meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
       
        T.post('media/metadata/create', meta_params, function (err, data, response) {
          if (!err) {
            let tweet = { status: worldUpdate + kenyaUpdate + hashtags, media_ids: [mediaIdStr] }
       
            T.post('statuses/update', tweet, function (err, data, response) {
                if(err){
                    console.log(err);
                }else{
                    console.log('Tweet successful')
                }
            })
          }
        })
    })
     

}