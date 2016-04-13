var app = app || {};

(function($) {

	app.main = {

		setBg : function() {
			var getRandomInt = function(min, max) {
			    return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			var bgClass ="bg-" + getRandomInt(1,7);
			$('body').addClass(bgClass);
		},

		transmitTweet : function(tweetText, tweetLink) {
			var $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;

				MESSAGES = [];

				MESSAGES.push({
				  delay: 0,
				  text: tweetText
				});
				$container = $("#container");
				$message = $("#message");

				$paragraph = null;

				scramble = function(element, text, options) {
				  var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, k, letter, object, order, output, parameters, ref, results, settings, shuffle, target, textCharacters, textLength, wrap;
				  defaults = {
				    probability: 0.2,
				    glitches: '=+%*-|/\\',
				    blank: '',
				    duration: text.length * 30,
				    ease: 'easeInOutQuad',
				    delay: 0.0
				  };
				  $element = $(element);
				  settings = $.extend(defaults, options);
				  shuffle = function() {
				    if (Math.random() < 0.5) {
				      return 1;
				    } else {
				      return -1;
				    }
				  };
				  wrap = function(text, classes) {
				    return "<span class=\"" + classes + "\">" + text + "</span>";
				  };
				  glitchText = settings.glitches;
				  glitchCharacters = glitchText.split('');
				  glitchLength = glitchCharacters.length;
				  glitchProbability = settings.probability;
				  glitches = (function() {
				    var j, len, results;
				    results = [];
				    for (j = 0, len = glitchCharacters.length; j < len; j++) {
				      letter = glitchCharacters[j];
				      results.push(wrap(letter, 'glitch'));
				    }
				    return results;
				  })();
				  ghostText = $element.text();
				  ghostCharacters = ghostText.split('');
				  ghostLength = ghostCharacters.length;
				  ghosts = (function() {
				    var j, len, results;
				    results = [];
				    for (j = 0, len = ghostCharacters.length; j < len; j++) {
				      letter = ghostCharacters[j];
				      results.push(wrap(letter, 'ghost'));
				    }
				    return results;
				  })();
				  textCharacters = text.split('');
				  textLength = textCharacters.length;
				  order = (function() {
				    results = [];
				    for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--){ results.push(j); }
				    return results;
				  }).apply(this).sort(this.shuffle);
				  output = [];
				  for (i = k = 0, ref = textLength; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
				    glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
				    glitchCharacter = glitches[glitchIndex];
				    ghostCharacter = ghosts[i] || settings.blank;
				    addGlitch = Math.random() < glitchProbability;
				    character = addGlitch ? glitchCharacter : ghostCharacter;
				    output.push(character);
				  }
				  object = {
				    value: 0
				  };
				  target = {
				    value: 1
				  };
				  parameters = {
				    duration: settings.duration,
				    ease: settings.ease,
				    step: function() {
				      var index, l, progress, ref1;
				      progress = Math.floor(object.value * (textLength - 1));
				      for (i = l = 0, ref1 = progress; 0 <= ref1 ? l <= ref1 : l >= ref1; i = 0 <= ref1 ? ++l : --l) {
				        index = order[i];
				        output[index] = textCharacters[index];
				      }
				      return $element.html(output.join(''));
				    },
				    complete: function() {
				      return $element.html(text);
				    }
				  };
				  return $(object).delay(settings.delay).animate(target, parameters);
				};

				animate = function() {
				  var data, element, index, j, len, options;
				  for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
				    data = MESSAGES[index];
				    element = $paragraph.get(index);
				    element.innerText = '';
				    options = {
				      delay: data.delay
				    };
				    scramble(element, data.text, options);
				  }
				};

				initialise = function() {
				  var index, j, len, text;
				  for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
				    text = MESSAGES[index];
				    $message.append("<a href='"+tweetLink+"' class='tweet' target='_blank'>");

				  }
				  $paragraph = $container.find("a");
				  animate();
				};

				initialise();
		},

		moreTweets : function() {
			$('#moreTweets').on('click', function() {
				$('a.tweet').fadeOut(function() {
					$(this).remove();
						app.main.getTweets();
				});
			});
		},


		getTweets : function() {
			Tabletop.init({
				key: '1QYoKHp4tJErMvTkht4QVA4rf9tp9te9rwBL22N_pP08',
               callback: function(data, tabletop) {
						app.main.createTweets(data);
				 },
               simpleSheet: true
			})


		},

		createTweets : function(obj) {
			var keys = Object.keys(obj)
			var tweet = obj[keys[ keys.length * Math.random() << 0]]
			app.main.updateMeta(tweet.Date, tweet.Retweets, tweet.Likes);
			app.main.transmitTweet(tweet.Tweet, tweet.Link);
		},

		updateMeta : function(date, retweets, likes) {
			$('.retweets').text(retweets + ' RETWEETS');
			$('.likes').text(likes + ' LIKES');
			$('.date').text(date);
		},

		overlayEvents : function() {
			var $el = $('*[data-overlayInit]');
			var $close = $('.overlay__close');
			var $footerEl = $('.footer__links').find('li');


			$el.on('click', function() {
				app.main.openOverlay();
				var source = $(this).attr('data-overlayInit');
				var target = $('.overlay__items[data-overlayTarget="'+source+'"]');
				$('.overlay__items').not(target).removeClass('show');
				$('.overlay__items').not(target).find('.fade-out').removeClass('fade-in');
				target.addClass('show');
				target.find('.fade-out').addClass('fade-in');
				$footerEl.not( $(this) ).addClass('darken');
				if ( $(this).hasClass('darken') ) {
					$(this).removeClass('darken');
				}
				if ($(this).attr('id') == 'initShare') {
					$('.share__twin').removeClass('darken');
				}
			});

			$close.on('click', function() {
				app.main.closeOverlay();
			});

			document.onkeydown = function(evt) {
			    evt = evt || window.event;
			    if (evt.keyCode == 27) {
			        app.main.closeOverlay();
			    }
			};

		},

		openOverlay : function() {
			var $overlay = $('.overlay');

			if ( !$overlay.hasClass('show') ) {
				$overlay.addClass('show');
			}
		},

		closeOverlay : function() {
			var $overlay = $('.overlay');

			if ( $overlay.hasClass('show') ) {
				$overlay.removeClass('show');
			}
			 $('.footer__links').find('li').removeClass('darken');
			 $('.overlay__items').removeClass('show');
		},

		player : function() {
				function initAnimation(animationData) {
					bodymovin.loadAnimation({
					  container: document.getElementById("eq"), // the dom element
					  renderer: 'svg',
					  loop: true,
					  autoplay: true,
					  animationData: JSON.parse(animationData) // the animation data
					});
				};


			    var xobj = new XMLHttpRequest();
			        xobj.overrideMimeType("application/json");
				xobj.open('GET', 'js/data.json', true); // Replace 'my_data' with the path to your file
				xobj.onreadystatechange = function () {
			          if (xobj.readyState == 4 && xobj.status == "200") {
			            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			           initAnimation(xobj.responseText);
			          }
			    };
			    xobj.send(null);  
		},

		playerControls : function() {
			var $eq = $('#eq');
			var audio = document.getElementById('audioTrack');
			var playing = true;

			$eq.on('click', function() {

				if ( playing === true ) {
					bodymovin.pause();
					audio.pause();
					playing = false;
				} else {
					bodymovin.play();
					audio.play();
					playing = true;
				}
			});

			// dont play on smaller devices
			if (  window.innerWidth < 600 ) {
				audio.pause();
			}
		},

		shareTwitter : function() {
			$('#shareTwitter').on('click', function(e) {
				e.preventDefault();
				console.log('clicked');
				var msg = encodeURIComponent("Get on an ultralight beam with Yeezy's life affirming tweets. #ultralightbeaming");  
				var url = encodeURIComponent('http://www.ultralightbeaming.com');  
				var hashtag = 'ultralightbeaming'
				var link = 'http://twitter.com/intent/tweet?text=' + msg + '&url=' + url + '&hashtags=' + hashtag; 
				window.open(link); 
			});
		},

		init : function() {
			app.main.getTweets();
			app.main.moreTweets();
			app.main.player();
			app.main.overlayEvents();
			app.main.playerControls();
		}
	};



	jQuery(document).ready(function() {
		app.main.init();
	});

}(jQuery));
