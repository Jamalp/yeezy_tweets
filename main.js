var app=app||{};!function($){app.main={setBg:function(){var t=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},e="bg-"+t(1,7);$("body").addClass(e)},transmitTweet:function(t,e){var n,a,r,i,o,u,l;i=[],i.push({delay:0,text:t}),n=$("#container"),a=$("#message"),r=null,l=function(t,e,n){var a,r,i,o,u,l,p,s,c,f,h,d,m,g,v,w,y,T,b,k,M,x,Q,j,L,O,S,B,_,A,C,D;for(o={probability:.2,glitches:"=+%@*!-|/\\",blank:"",duration:30*e.length,ease:"easeInOutQuad",delay:0},a=$(t),S=$.extend(o,n),B=function(){return Math.random()<.5?1:-1},D=function(t,e){return'<span class="'+e+'">'+t+"</span>"},v=S.glitches,h=v.split(""),m=h.length,g=S.probability,w=function(){var t,e,n;for(n=[],t=0,e=h.length;e>t;t++)k=h[t],n.push(D(k,"glitch"));return n}(),s=a.text(),l=s.split(""),p=l.length,c=function(){var t,e,n;for(n=[],t=0,e=l.length;e>t;t++)k=l[t],n.push(D(k,"ghost"));return n}(),A=e.split(""),C=A.length,x=function(){O=[];for(var t=0;C>=0?C>t:t>C;C>=0?t++:t--)O.push(t);return O}.apply(this).sort(this.shuffle),Q=[],y=b=0,L=C;L>=0?L>b:b>L;y=L>=0?++b:--b)d=Math.floor(Math.random()*(m-1)),f=w[d],u=c[y]||S.blank,r=Math.random()<g,i=r?f:u,Q.push(i);return M={value:0},_={value:1},j={duration:S.duration,ease:S.ease,step:function(){var t,e,n,r;for(n=Math.floor(M.value*(C-1)),y=e=0,r=n;r>=0?r>=e:e>=r;y=r>=0?++e:--e)t=x[y],Q[t]=A[t];return a.html(Q.join(""))},complete:function(){return a.html(e)}},$(M).delay(S.delay).animate(_,j)},o=function(){var t,e,n,a,o,u;for(n=a=0,o=i.length;o>a;n=++a)t=i[n],e=r.get(n),e.innerText="",u={delay:t.delay},l(e,t.text,u)},(u=function(){var t,u,l,p;for(t=u=0,l=i.length;l>u;t=++u)p=i[t],a.append("<a href='"+e+"' class='tweet' target='_blank'>");r=n.find("a"),o()})()},moreTweets:function(){$("#moreTweets").on("click",function(){$("p.tweet").fadeOut(function(){$(this).remove(),app.main.getTweets()})})},getTweets:function(){Tabletop.init({key:"1QYoKHp4tJErMvTkht4QVA4rf9tp9te9rwBL22N_pP08",callback:function(t,e){app.main.createTweets(t)},simpleSheet:!0})},createTweets:function(t){var e=Object.keys(t),n=t[e[e.length*Math.random()<<0]];console.log(t),app.main.createString(n.Date,n.Tweet,n.Link),app.main.transmitTweet(n.Tweet,n.Link)},createString:function(t,e,n){var a=$("#app"),r=a.find("span"),i=a.find(".tweet")},init:function(){app.main.getTweets(),app.main.moreTweets()}},jQuery(document).ready(function(){app.main.init()})}(jQuery);