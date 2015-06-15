$(function() {
    $.ajax({
        url: '/getTweets',
        success: function(tData) {
            $('.tData').html(tData);
        },
        error: function() {
            console.log('err in conn');
        }
    })
});
