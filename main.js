var app = app || {};

(function($) {

	app.main = {

		setBg : function() {
			var getRandomInt = function(min, max) {
			    return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			var bgClass ="bg-" + getRandomInt(1,7);
			console.log(bgClass);
			$('body').addClass(bgClass);
		},


		getTweets : function() {
			Tabletop.init({
				key: '1QYoKHp4tJErMvTkht4QVA4rf9tp9te9rwBL22N_pP08',
               callback: function(data, tabletop) {
								//  tweet = data[Math.floor(Math.random()*data.length)];

									app.main.createTweets(data);
							 },
               simpleSheet: true
			})


		},

		createTweets : function(obj) {
			var keys = Object.keys(obj)
			var tweet = obj[keys[ keys.length * Math.random() << 0]]
			app.main.createString(tweet.Date, tweet.Tweet, tweet.Link);
		},

		createString : function(date, tweet, link) {
			var app = $('#app');
			var dateEl = app.find('span');
			var tweetText = app.find('a');

			tweetText.text(tweet).addClass('show');
			tweetText.attr('href', link);
			dateEl.text('-Yeezy ' + date).addClass('show');
		},

		init : function() {
			app.main.getTweets();
			app.main.setBg();
		}
	};



	jQuery(document).ready(function() {
		app.main.init();
	});

}(jQuery));
