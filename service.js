var application_root = __dirname,
    express = require("express"),
    Twitter = require('twitter');
    config = require('./config/config.js');
    var port = process.env.PORT || 3000;

var app = express();

//To maintain keys in different file
var configkeys = new config(); 

//Comment out and put your keps below
var client = new Twitter({
    consumer_key: configkeys.consumer_key(),
    consumer_secret: configkeys.consumer_secret(),
    access_token_key: configkeys.access_token_key(),
    access_token_secret: configkeys.access_token_secret()
});

var params = {
    screen_name: 'nodejs',
    count: '5'
};

app.use('/', express.static(application_root));

//Express Restful API
app.get('/getTweets', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    //Twitter API call for fetch tweets
    client.get('/statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            res.end(JSON.stringify(tweets));
        } else {
            console.log(error);
        }
    });
})


app.listen(port);
