$(function() {
    $.ajax({
        url: 'https://twitter-nodejs-poc.herokuapp.com/getTweets',
        success: function(tData) {
            $('.tData').html(tData);
        },
        error: function() {
            console.log('err in conn');
        }
    })
});
