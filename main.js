var app=app||{};!function($){app.main={setBg:function(){var t=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},e="bg-"+t(1,7);$("body").addClass(e)},transmitTweet:function(t){var e,n,a,r,i,o,s;r=[],r.push({delay:0,text:t}),e=$("#container"),n=$("#message"),a=null,s=function(t,e,n){var a,r,i,o,s,u,p,l,f,c,h,d,m,g,v,w,y,T,b,M,k,x,Q,j,C,O,S,B,L,Y,z,A;for(o={probability:.2,glitches:"=+%@*!-|/\\",blank:"",duration:30*e.length,ease:"easeInOutQuad",delay:0},a=$(t),S=$.extend(o,n),B=function(){return Math.random()<.5?1:-1},A=function(t,e){return'<span class="'+e+'">'+t+"</span>"},v=S.glitches,h=v.split(""),m=h.length,g=S.probability,w=function(){var t,e,n;for(n=[],t=0,e=h.length;e>t;t++)M=h[t],n.push(A(M,"glitch"));return n}(),l=a.text(),u=l.split(""),p=u.length,f=function(){var t,e,n;for(n=[],t=0,e=u.length;e>t;t++)M=u[t],n.push(A(M,"ghost"));return n}(),Y=e.split(""),z=Y.length,x=function(){O=[];for(var t=0;z>=0?z>t:t>z;z>=0?t++:t--)O.push(t);return O}.apply(this).sort(this.shuffle),Q=[],y=b=0,C=z;C>=0?C>b:b>C;y=C>=0?++b:--b)d=Math.floor(Math.random()*(m-1)),c=w[d],s=f[y]||S.blank,r=Math.random()<g,i=r?c:s,Q.push(i);return k={value:0},L={value:1},j={duration:S.duration,ease:S.ease,step:function(){var t,e,n,r;for(n=Math.floor(k.value*(z-1)),y=e=0,r=n;r>=0?r>=e:e>=r;y=r>=0?++e:--e)t=x[y],Q[t]=Y[t];return a.html(Q.join(""))},complete:function(){return a.html(e)}},$(k).delay(S.delay).animate(L,j)},i=function(){var t,e,n,i,o,u;for(n=i=0,o=r.length;o>i;n=++i)t=r[n],e=a.get(n),e.innerText="",u={delay:t.delay},s(e,t.text,u)},(o=function(){var t,o,s,u;for(t=o=0,s=r.length;s>o;t=++o)u=r[t],n.append("<p class='tweet'>");a=e.find("p"),i()})()},moreTweets:function(){$("#moreTweets").on("click",function(){$("p.tweet").fadeOut(function(){$(this).remove(),app.main.getTweets()})})},getTweets:function(){Tabletop.init({key:"1QYoKHp4tJErMvTkht4QVA4rf9tp9te9rwBL22N_pP08",callback:function(t,e){app.main.createTweets(t)},simpleSheet:!0})},createTweets:function(t){var e=Object.keys(t),n=t[e[e.length*Math.random()<<0]];app.main.createString(n.Date,n.Tweet,n.Link),app.main.transmitTweet(n.Tweet)},createString:function(t,e,n){var a=$("#app"),r=a.find("span"),i=a.find("a");i.text(e).addClass("show"),i.attr("href",n),r.text("-Yeezy "+t).addClass("show")},init:function(){app.main.getTweets(),app.main.moreTweets()}},jQuery(document).ready(function(){app.main.init()})}(jQuery);