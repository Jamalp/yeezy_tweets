var app=app||{};!function($){app.main={setBg:function(){var e=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},t="bg-"+e(1,7);$("body").addClass(t)},transmitTweet:function(e,t){var a,n,o,r,s,i,l;r=[],r.push({delay:0,text:e}),a=$("#container"),n=$("#message"),o=null,l=function(e,t,a){var n,o,r,s,i,l,u,d,f,p,c,h,v,m,y,w,g,k,_,T,C,b,M,x,O,E,Q,j,I,L,S,B;for(s={probability:.2,glitches:"=+%*-|/\\",blank:"",duration:30*t.length,ease:"easeInOutQuad",delay:0},n=$(e),Q=$.extend(s,a),j=function(){return Math.random()<.5?1:-1},B=function(e,t){return'<span class="'+t+'">'+e+"</span>"},y=Q.glitches,c=y.split(""),v=c.length,m=Q.probability,w=function(){var e,t,a;for(a=[],e=0,t=c.length;t>e;e++)T=c[e],a.push(B(T,"glitch"));return a}(),d=n.text(),l=d.split(""),u=l.length,f=function(){var e,t,a;for(a=[],e=0,t=l.length;t>e;e++)T=l[e],a.push(B(T,"ghost"));return a}(),L=t.split(""),S=L.length,b=function(){E=[];for(var e=0;S>=0?S>e:e>S;S>=0?e++:e--)E.push(e);return E}.apply(this).sort(this.shuffle),M=[],g=_=0,O=S;O>=0?O>_:_>O;g=O>=0?++_:--_)h=Math.floor(Math.random()*(v-1)),p=w[h],i=f[g]||Q.blank,o=Math.random()<m,r=o?p:i,M.push(r);return C={value:0},I={value:1},x={duration:Q.duration,ease:Q.ease,step:function(){var e,t,a,o;for(a=Math.floor(C.value*(S-1)),g=t=0,o=a;o>=0?o>=t:t>=o;g=o>=0?++t:--t)e=b[g],M[e]=L[e];return n.html(M.join(""))},complete:function(){return n.html(t)}},$(C).delay(Q.delay).animate(I,x)},s=function(){var e,t,a,n,s,i;for(a=n=0,s=r.length;s>n;a=++n)e=r[a],t=o.get(a),t.innerText="",i={delay:e.delay},l(t,e.text,i)},(i=function(){var e,i,l,u;for(e=i=0,l=r.length;l>i;e=++i)u=r[e],n.append("<a href='"+t+"' class='tweet' target='_blank'>");o=a.find("a"),s()})()},moreTweets:function(){$("#moreTweets").on("click",function(){$("a.tweet").fadeOut(function(){$(this).remove(),app.main.getTweets()})})},getTweets:function(){Tabletop.init({key:"1QYoKHp4tJErMvTkht4QVA4rf9tp9te9rwBL22N_pP08",callback:function(e,t){app.main.createTweets(e)},simpleSheet:!0})},createTweets:function(e){var t=Object.keys(e),a=e[t[t.length*Math.random()<<0]];app.main.updateMeta(a.Date,a.Retweets,a.Likes),app.main.transmitTweet(a.Tweet,a.Link)},updateMeta:function(e,t,a){$(".retweets").text(t+" RETWEETS"),$(".likes").text(a+" LIKES"),$(".date").text(e)},overlayEvents:function(){var e=$("*[data-overlayInit]"),t=$(".overlay__close"),a=$(".footer__links").find("li");e.on("click",function(){app.main.openOverlay();var e=$(this).attr("data-overlayInit"),t=$('.overlay__items[data-overlayTarget="'+e+'"]');$(".overlay__items").not(t).removeClass("show"),$(".overlay__items").not(t).find(".fade-out").removeClass("fade-in"),t.addClass("show"),t.find(".fade-out").addClass("fade-in"),a.not($(this)).addClass("darken"),$(this).hasClass("darken")&&$(this).removeClass("darken"),"initShare"==$(this).attr("id")&&$(".share__twin").removeClass("darken")}),t.on("click",function(){app.main.closeOverlay()}),document.onkeydown=function(e){e=e||window.event,27==e.keyCode&&app.main.closeOverlay()}},openOverlay:function(){var e=$(".overlay");e.hasClass("show")||e.addClass("show")},closeOverlay:function(){var e=$(".overlay");e.hasClass("show")&&e.removeClass("show"),$(".footer__links").find("li").removeClass("darken"),$(".overlay__items").removeClass("show")},init:function(){app.main.getTweets(),app.main.moreTweets(),app.main.overlayEvents()}},jQuery(document).ready(function(){app.main.init()})}(jQuery);