(function() {
    app['tweet-container'] = {
        settings: {
            target: '.mod-tweet-container',
        },
        init: function() {
            var self = this;
            var s = this.settings;
            $.ajax({
                url: '/getTweets',
                type: "GET",
                success: function(data) {
                    data = $.parseJSON(data);
                    var container = $(s.target).find('.wi-container');
                    $.each(data, function(i, v) {
                        container.append("<li> <h3>" + this.user.name + "</h3> <p>" + this.text + "</p> </li>");
                    });
                    self.bindCarousel();
                },
                error: function() {
                    console.log('err');
                }

            })
        },
        parseLinksinTweet: function(tweetText) {
            return twttr.txt.autoLink(tweetText);
        },
        bindCarousel: function() {

            var $el = $('#wi-el'),
                windy = $el.windy(),
                allownavnext = false,
                allownavprev = false;

            $('#nav-prev').on('mousedown', function(event) {

                allownavprev = true;
                navprev();

            }).on('mouseup mouseleave', function(event) {

                allownavprev = false;

            });

            $('#nav-next').on('mousedown', function(event) {

                allownavnext = true;
                navnext();

            }).on('mouseup mouseleave', function(event) {

                allownavnext = false;

            });

            function navnext() {
                if (allownavnext) {
                    windy.next();
                    setTimeout(function() {
                        navnext();
                    }, 150);
                }
            }

            function navprev() {
                if (allownavprev) {
                    windy.prev();
                    setTimeout(function() {
                        navprev();
                    }, 150);
                }
            }
        }

    }
}(app));
