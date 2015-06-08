$(function() {
    $.ajax({
        url: 'http://localhost:8081/getTweets',
        success: function(tData) {
            $('.tData').html(tData);
        },
        error: function() {
            console.log('err in conn');
        }
    })
});
