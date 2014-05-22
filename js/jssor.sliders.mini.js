﻿(function(g,f,b,e,c,d,z){/*! Jssor */
$Jssor$=g.$Jssor$=g.$Jssor$||{};new(function(){});var m=function(){var b=this,a={};b.$On=b.addEventListener=function(b,c){if(typeof c!="function")return;if(!a[b])a[b]=[];a[b].push(c)};b.$Off=b.removeEventListener=function(e,d){var b=a[e];if(typeof d!="function")return;else if(!b)return;for(var c=0;c<b.length;c++)if(d==b[c]){b.splice(c,1);return}};b.e=function(e){var c=a[e],d=[];if(!c)return;for(var b=1;b<arguments.length;b++)d.push(arguments[b]);for(var b=0;b<c.length;b++)try{c[b].apply(g,d)}catch(f){}}},h;(function(){h=function(a,b){this.x=typeof a=="number"?a:0;this.y=typeof b=="number"?b:0};})();var l=g.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-l.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?l.$EaseInBounce(a*2)*.5:l.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},q={cd:37,oe:39},n={ge:0,fe:1,le:2,ke:3,ae:4,Zd:5},y=1,u=2,v=4,x=5,j,a=new function(){var i=this,m=n.ge,j=0,q=0,t=0,cb=navigator.appName,k=navigator.userAgent;function D(){if(!m)if(cb=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var d=k.indexOf("MSIE");m=n.fe;q=parseFloat(k.substring(d+5,k.indexOf(";",d)));/*@cc_on@*/j=f.documentMode||q}else if(cb=="Netscape"&&!!g.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){m=n.le;j=parseFloat(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");m=h>=0?n.ae:n.ke;j=parseFloat(k.substring(i+1,a))}if(b>=0)t=parseFloat(k.substring(b+12))}else{var e=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(e){m=n.Zd;j=parseFloat(e[2])}}}function l(){D();return m==y}function G(){return l()&&(j<6||f.compatMode=="BackCompat")}function V(){D();return m==u}function hb(){D();return m==v}function ib(){D();return m==x}function s(){return l()&&j<9}var B;function r(a){if(!B){p(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(!i.Lc(a.style[b])){B=b;return c}});B=B||"transform"}return B}function ab(a){return Object.prototype.toString.call(a)}var J;function p(a,c){if(ab(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(c(a[b],b,a))break}else for(var d in a)if(c(a[d],d,a))break}function jb(){if(!J){J={};p(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){J["[object "+a+"]"]=a.toLowerCase()})}return J}function A(a){return a==e?String(a):jb()[ab(a)]||"object"}function bb(b,a){setTimeout(b,a||0)}function I(b,d,c){var a=!b||b=="inherit"?"":b;p(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function W(b,a){if(j<9)b.style.filter=a}i.Qb=l;i.dc=hb;i.cc=ib;i.Db=s;i.V=function(){return j};i.hc=function(){return t};i.$Delay=bb;i.M=function(a){if(i.Nd(a))a=f.getElementById(a);return a};i.Bb=function(a){return a?a:g.event};i.Zb=function(a){a=i.Bb(a);var b=new h;if(a.type=="DOMMouseScroll"&&V()&&j<3){b.x=a.screenX;b.y=a.screenY}else if(typeof a.pageX=="number"){b.x=a.pageX;b.y=a.pageY}else if(typeof a.clientX=="number"){b.x=a.clientX+f.body.scrollLeft+f.documentElement.scrollLeft;b.y=a.clientY+f.body.scrollTop+f.documentElement.scrollTop}return b};i.Ab=function(c,a,f){if(l()&&q<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=I(h,[i],d);W(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100};i.xe=function(b,c){var a=r(b);if(a)b.style[a+"Origin"]=c};i.pe=function(a,c){if(l()&&q<9||q<10&&G())a.style.zoom=c==1?"":c;else{var b=r(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=I(e,[g],f);a.style[b]=d}}};i.Ee=function(a){if(!a.style[r(a)]||a.style[r(a)]=="none")a.style[r(a)]="perspective(2000px)"};i.c=function(a,c,d,b){a=i.M(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.ve=function(a,c,d,b){a=i.M(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.te=function(b,a){i.c(s()?f:g,"mouseup",b,a)};i.P=function(a){a=i.Bb(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=d};i.s=function(e,d){for(var b=[],a=2;a<arguments.length;a++)b.push(arguments[a]);var c=function(){for(var c=b.concat([]),a=0;a<arguments.length;a++)c.push(arguments[a]);return d.apply(e,c)};return c};i.ne=function(a,c){var b=f.createTextNode(c);i.oc(a);a.appendChild(b)};i.oc=function(a){a.innerHTML=""};i.sb=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function N(a,c,b,f){if(!b)b="u";for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(i.G(a,b)==c)return a;if(f){var d=N(a,c,b,f);if(d)return d}}}i.n=N;function S(a,c,d){for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(d){var b=S(a,c,d);if(b)return b}}}i.fd=S;i.Pc=function(b,a){return b.getElementsByTagName(a)};i.o=function(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c};i.Lc=function(a){return A(a)=="undefined"};i.Zc=function(a){return A(a)=="function"};i.Nd=function(a){return A(a)=="string"};i.hd=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};i.f=p;i.rb=function(a){return i.jc("DIV",a)};i.Qc=function(a){return i.jc("SPAN",a)};i.jc=function(b,a){a=a||f;return a.createElement(b)};i.C=function(){};i.yc=function(a,b){return a.getAttribute(b)};i.G=function(a,b){return i.yc(a,b)||i.yc(a,"data-"+b)};i.Uc=function(b,c,a){b.setAttribute(c,a)};i.Xb=function(a){return a.className};i.bc=function(b,a){b.className=a?a:""};i.zd=function(a){return a.style.display};i.Q=function(b,a){b.style.display=a||""};i.Y=function(b,a){b.style.overflow=a};i.W=function(a){return a.parentNode};i.y=function(a){i.Q(a,"none")};i.m=function(a,b){i.Q(a,b==d?"none":"")};i.r=function(b,a){b.style.position=a};i.k=function(a,b){a.style.top=b+"px"};i.j=function(a,b){a.style.left=b+"px"};i.i=function(a){return parseInt(a.style.width,10)};i.J=function(c,a){c.style.width=b.max(a,0)+"px"};i.l=function(a){return parseInt(a.style.height,10)};i.I=function(c,a){c.style.height=b.max(a,0)+"px"};i.gc=function(a){return a.style.cssText};i.Rb=function(b,a){b.style.cssText=a};i.Pb=function(b,a){b.removeAttribute(a)};i.de=function(b,a){b.style.marginLeft=a+"px"};i.ce=function(b,a){b.style.marginTop=a+"px"};i.ic=function(a){return parseInt(a.style.zIndex)||0};i.S=function(c,a){c.style.zIndex=b.ceil(a)};i.kc=function(b,a){b.style.backgroundColor=a};i.sd=function(){return l()&&j<10};i.od=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=i.gc(d),f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=I(g,f,"");a.Rb(d,e)}};i.u=function(){return+new Date};i.t=function(b,a){b.appendChild(a)};i.vb=function(c,b,a){c.insertBefore(b,a)};i.cb=function(b,a){b.removeChild(a)};i.Ed=function(b,a){p(a,function(a){i.cb(b,a)})};i.Dd=function(a){i.Ed(a,i.sb(a))};i.Wb=function(b,a){var c=f.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(e){return d}return b==a};i.p=function(b,a){return b.cloneNode(a)};function L(b,a,c){a.onload=e;a.abort=e;b&&b(a,c)}i.Z=function(d,b){if(i.cc()&&j<11.6||!d)L(b,e);else{var a=new Image;a.onload=i.s(e,L,b,a);a.onabort=i.s(e,L,b,a,c);a.src=d}};i.xd=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}a.f(e,function(b){a.Z(b.src,c)});c()};i.ac=function(d,k,j,i){if(i)d=a.p(d,c);for(var h=a.Pc(d,k),f=h.length-1;f>-1;f--){var b=h[f],e=a.p(j,c);a.bc(e,a.Xb(b));a.Rb(e,a.gc(b));var g=a.W(b);a.vb(g,e,b);a.cb(g,b)}return d};var C;function lb(b){var g=this,h,e,j;function f(){var c=h;if(e)c+="dn";else if(j)c+="av";a.bc(b,c)}function k(){C.push(g);e=c;f()}g.vd=function(){e=d;f()};g.Vb=function(a){j=a;f()};b=i.M(b);if(!C){i.te(function(){var a=C;C=[];p(a,function(a){a.vd()})});C=[]}h=i.Xb(b);a.c(b,"mousedown",k)}i.mb=function(a){return new lb(a)};var F={$Opacity:i.Ab,$Top:i.k,$Left:i.j,ib:i.J,kb:i.I,bd:i.Q,$Clip:i.od,Wf:i.de,Xf:i.ce,O:i.r,$ZIndex:i.S};function H(){return F}i.Ce=H;i.N=function(c,b){var a=H();p(b,function(d,b){a[b]&&a[b](c,d)})};new(function(){})};j=function(n,m,g,O,z,x){n=n||0;var f=this,r,o,p,y,A=0,C,M,L,D,j=0,t=0,E,k=n,i,h,q,u=[],B;function I(b){i+=b;h+=b;k+=b;j+=b;t+=b;a.f(u,function(a){a,a.$Shift(b)})}function N(a,b){var c=a-i+n*b;I(c);return h}function w(w,G){var n=w;if(q&&(n>=h||n<=i))n=((n-i)%q+q)%q+i;if(!E||y||G||j!=n){var p=b.min(n,h);p=b.max(p,i);if(!E||y||G||p!=t){if(x){var d=x;if(z){var s=(p-k)/(m||1);if(g.Xd&&a.dc()&&m)s=b.round(s*m/16)/m*16;if(g.$Reverse)s=1-s;d={};for(var o in x){var R=M[o]||1,J=L[o]||[0,1],l=(s-J[0])/J[1];l=b.min(b.max(l,0),1);l=l*R;var H=b.floor(l);if(l!=H)l-=H;var Q=C[o]||C.nb,I=Q(l),r,K=z[o],F=x[o];if(a.hd(F))r=K+(F-K)*I;else{r=a.o({K:{}},z[o]);a.f(F.K,function(c,b){var a=c*I;r.K[b]=a;r[b]+=a})}d[o]=r}}if(z.$Zoom);if(x.$Clip&&g.$Move){var v=d.$Clip.K,D=(v.$Top||0)+(v.$Bottom||0),A=(v.$Left||0)+(v.$Right||0);d.$Left=(d.$Left||0)+A;d.$Top=(d.$Top||0)+D;d.$Clip.$Left-=A;d.$Clip.$Right-=A;d.$Clip.$Top-=D;d.$Clip.$Bottom-=D}if(d.$Clip&&a.sd()&&!d.$Clip.$Top&&!d.$Clip.$Left&&d.$Clip.$Right==g.Cb&&d.$Clip.$Bottom==g.xb)d.$Clip=e;a.f(d,function(b,a){B[a]&&B[a](O,b)})}f.Kb(t-k,p-k)}t=p;a.f(u,function(b,c){var a=w<j?u[u.length-c-1]:b;a.z(w,G)});var P=j,N=w;j=n;E=c;f.pb(P,N)}}function F(a,c){c&&a.fc(h,1);h=b.max(h,a.ab());u.push(a)}function H(){if(r){var d=a.u(),e=b.min(d-A,a.cc()?80:20),c=j+e*p;A=d;if(c*p>=o*p)c=o;w(c);if(!y&&c*p>=o*p)J(D);else a.$Delay(H,g.$Interval)}}function v(d,e,g){if(!r){r=c;y=g;D=e;d=b.max(d,i);d=b.min(d,h);o=d;p=o<j?-1:1;f.tc();A=a.u();H()}}function J(a){if(r){y=r=D=d;f.rc();a&&a()}}f.$Play=function(a,b,c){v(a?j+a:h,b,c)};f.vc=function(b,a,c){v(b,a,c)};f.H=function(){J()};f.td=function(a){v(a)};f.F=function(){return j};f.wc=function(){return o};f.ub=function(){return t};f.z=w;f.lc=function(){w(i,c)};f.$Move=function(a){w(j+a)};f.$IsPlaying=function(){return r};f.qd=function(a){q=a};f.fc=N;f.$Shift=I;f.Jb=function(a){F(a,0)};f.Ib=function(a){F(a,1)};f.ab=function(){return h};f.pb=a.C;f.tc=a.C;f.rc=a.C;f.Kb=a.C;f.Hb=a.u();g=a.o({$Interval:15},g);q=g.mc;B=a.o({},a.Ce(),g.nc);i=k=n;h=n+m;var M=g.$Round||{},L=g.$During||{};C=a.o({nb:a.Zc(g.$Easing)&&g.$Easing||l.$EaseSwing},g.$Easing)};var r;new function(){;function n(o,ac){var k=this;function wc(){var a=this;j.call(a,-1e8,2e8);a.Ld=function(){var c=a.ub(),d=b.floor(c),f=u(d),e=c-b.floor(c);return{L:f,Jd:d,O:e}};a.pb=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Ob(e,c);k.e(n.$EVT_POSITION_CHANGE,u(a),u(d),a,d)}}function vc(){var b=this;j.call(b,0,0,{mc:t});a.f(C,function(a){S&1&&a.qd(t);b.Ib(a);a.$Shift(sb/Vb)})}function uc(){var a=this,b=Nb.$Elmt;j.call(a,-1,2,{$Easing:l.$EaseLinear,nc:{O:Tb},mc:t},b,{O:1},{O:-1});a.db=b}function ic(o,m){var a=this,f,g,h,l,b;j.call(a,-1e8,2e8);a.tc=function(){P=c;U=e;k.e(n.$EVT_SWIPE_START,u(x.F()),x.F())};a.rc=function(){P=d;l=d;var a=x.Ld();k.e(n.$EVT_SWIPE_END,u(x.F()),x.F());!a.O&&yc(a.Jd,r)};a.pb=function(d,c){var a;if(l)a=b;else{a=g;if(h)a=i.$SlideEasing(c/h)*(g-f)+f}x.z(a)};a.jb=function(b,d,c,e){f=b;g=d;h=c;x.z(b);a.z(0);a.vc(c,e)};a.Yd=function(d){l=c;b=d;a.$Play(d,e,c)};a.be=function(a){b=a};x=new wc;x.Jb(o);x.Jb(m)}function jc(){var c=this,b=Sb();a.S(b,0);c.$Elmt=b;c.hb=function(){a.y(b);a.oc(b)}}function tc(p,o){var f=this,s,w,I,x,g,y=[],V,q,X,H,P,F,l,v,h;j.call(f,-B,B+1,{});function E(a){w&&w.wb();s&&s.wb();W(p,a);F=c;s=new K.$Class(p,K,1);w=new K.$Class(p,K);w.lc();s.lc()}function bb(){s.Hb<K.Hb&&E()}function J(o,q,m){if(!H){H=c;if(g&&m){var e=m.width,b=m.height,l=e,j=b;if(e&&b&&i.$FillMode){if(i.$FillMode&3){var h=d,p=O/M*b/e;if(i.$FillMode&1)h=p>1;else if(i.$FillMode&2)h=p<1;l=h?e*M/b:O;j=h?M:b*O/e}a.J(g,l);a.I(g,j);a.k(g,(M-j)/2);a.j(g,(O-l)/2)}a.r(g,"absolute");k.e(n.$EVT_LOAD_END,Yb)}}a.y(q);o&&o(f)}function Y(b,c,d,e){if(e==U&&r==o&&Q)if(!xc){var a=u(b);z.Rd(a,o,c,f,d);c.Od();Z.fc(a,1);Z.z(a);A.jb(b,b,0)}}function eb(b){if(b==U&&r==o){if(!l){var a=e;if(z)if(z.L==o)a=z.Qd();else z.hb();bb();l=new rc(o,a,f.Pd(),f.Kd());l.Hc(h)}!l.$IsPlaying()&&l.zb()}}function S(d,c){if(d==o){if(d!=c)C[c]&&C[c].Vd();h&&h.$Enable();var k=U=a.u();f.Z(a.s(e,eb,k))}else{var j=b.abs(o-d),g=B+i.$LazyLoading;(!P||j<=g||t-j<=g)&&f.Z()}}function fb(){if(r==o&&l){l.H();h&&h.$Quit();h&&h.$Disable();l.Fc()}}function gb(){r==o&&l&&l.H()}function N(b){if(T)a.P(b);else k.e(n.$EVT_CLICK,o,b)}function L(){h=v.pInstance;l&&l.Hc(h)}f.Z=function(d,b){b=b||x;if(y.length&&!H){a.m(b);if(!X){X=c;k.e(n.$EVT_LOAD_START);a.f(y,function(b){if(!b.src){b.src=a.G(b,"src2");a.Q(b,b["display-origin"])}})}a.xd(y,g,a.s(e,J,d,b))}else J(d,b)};f.De=function(){if(z){var b=z.ze(t);if(b){var f=U=a.u(),c=o+1,d=C[u(c)];return d.Z(a.s(e,Y,c,d,b,f),x)}}ab(r+i.$AutoPlaySteps)};f.yb=function(){S(o,o)};f.Vd=function(){h&&h.$Quit();h&&h.$Disable();f.zc();l&&l.se();l=e;E()};f.Od=function(){a.y(p)};f.zc=function(){a.m(p)};f.we=function(){h&&h.$Enable()};function W(b,f,e){if(b["jssor-slider"])return;e=e||0;if(!F){if(b.tagName=="IMG"){y.push(b);if(!b.src){P=c;b["display-origin"]=a.zd(b);a.y(b)}}a.Db()&&a.S(b,a.ic(b)+1);if(i.$HWA&&a.hc()>0)(!G||a.hc()<534||!db)&&a.Ee(b)}var h=a.sb(b);a.f(h,function(h){var j=a.G(h,"u");if(j=="player"&&!v){v=h;if(v.pInstance)L();else a.c(v,"dataavailable",L)}if(j=="caption"){if(!a.Qb()&&!f){var i=a.p(h,c);a.vb(b,i,h);a.cb(b,h);h=i;f=c}}else if(!F&&!e&&!g&&a.G(h,"u")=="image"){g=h;if(g){if(g.tagName=="A"){V=g;a.N(V,R);q=a.p(g,d);a.c(q,"click",N);a.N(q,R);a.Q(q,"block");a.Ab(q,0);a.kc(q,"#000");g=a.fd(g,"IMG")}g.border=0;a.N(g,R)}}W(h,f,e+1)})}f.Kb=function(c,b){var a=B-b;Tb(I,a)};f.Pd=function(){return s};f.Kd=function(){return w};f.L=o;m.call(f);var D=a.n(p,"thumb");if(D){f.Yc=a.p(D,c);a.Pb(D,"id");a.y(D)}a.m(p);x=a.p(cb,c);a.S(x,1e3);a.c(p,"click",N);E(c);f.uc=g;f.Kc=q;f.db=I=p;a.t(I,x);k.$On(203,S);k.$On(22,gb);k.$On(24,fb)}function rc(h,q,v,u){var b=this,m=0,x=0,o,g,e,f,l,s,w,t,p=C[h];j.call(b,0,0);function y(){a.Dd(L);Zb&&l&&p.Kc&&a.t(L,p.Kc);a.m(L,l||!p.uc)}function A(){if(s){s=d;k.e(n.$EVT_ROLLBACK_END,h,e,m,g,e,f);b.z(g)}b.zb()}function B(a){t=a;b.H();b.zb()}b.zb=function(){var a=b.ub();if(!H&&!P&&!t&&(a!=e||Q&&(!Qb||Y))&&r==h){if(!a){if(o&&!l){l=c;b.Fc(c);k.e(n.$EVT_SLIDESHOW_START,h,m,x,o,f)}y()}var d,i=n.$EVT_STATE_CHANGE;if(a==f){e==f&&b.z(g);return p.De()}else if(a==e)d=f;else if(a==g)d=e;else if(!a)d=g;else if(a>e){s=c;d=e;i=n.$EVT_ROLLBACK_START}else d=b.wc();k.e(i,h,a,m,g,e,f);b.vc(d,A)}};b.se=function(){z&&z.L==h&&z.hb();var a=b.ub();a<f&&k.e(n.$EVT_STATE_CHANGE,h,-a-1,m,g,e,f)};b.Fc=function(b){q&&a.Y(gb,b&&q.qc.$Outside?"":"hidden")};b.Kb=function(b,a){if(l&&a>=o){l=d;y();p.zc();z.hb();k.e(n.$EVT_SLIDESHOW_END,h,m,x,o,f)}k.e(n.$EVT_PROGRESS_CHANGE,h,a,m,g,e,f)};b.Hc=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.ld,B)}};q&&b.Ib(q);o=b.ab();b.ab();b.Ib(v);g=v.ab();e=g+i.$AutoPlayInterval;u.$Shift(e);b.Jb(u);f=b.ab()}function Tb(c,g){var f=w>0?w:i.$PlayOrientation,d=b.round(xb*g*(f&1)),e=b.round(yb*g*(f>>1&1));if(a.Qb()&&a.V()>=10&&a.V()<11)c.style.msTransform="translate("+d+"px, "+e+"px)";else if(a.dc()&&a.V()>=30&&a.V()<34){c.style.WebkitTransition="transform 0s";c.style.WebkitTransform="translate3d("+d+"px, "+e+"px, 0px) perspective(2000px)"}else{a.j(c,d);a.k(c,e)}}function pc(a){T=0;!I&&mc()&&oc(a)}function oc(b){mb=P;H=c;wb=d;U=e;a.c(f,kb,Wb);a.u();Fb=A.wc();A.H();if(!mb)w=0;if(G){var h=b.touches[0];qb=h.clientX;rb=h.clientY}else{var g=a.Zb(b);qb=g.x;rb=g.y;a.P(b)}E=0;bb=0;fb=0;D=x.F();k.e(n.$EVT_DRAG_START,u(D),D,b)}function Wb(e){if(H&&(!a.Db()||e.button)){var f;if(G){var n=e.touches;if(n&&n.length>0)f=new h(n[0].clientX,n[0].clientY)}else f=a.Zb(e);if(f){var l=f.x-qb,m=f.y-rb;if(b.floor(D)!=D)w=w||i.$PlayOrientation&I;if((l||m)&&!w){if(I==3)if(b.abs(m)>b.abs(l))w=2;else w=1;else w=I;if(G&&w==1&&b.abs(m)-b.abs(l)>3)wb=c}if(w){var d=m,k=yb;if(w==1){d=l;k=xb}if(!(S&1)){if(d>0){var g=k*r,j=d-g;if(j>0)d=g+b.sqrt(j)*5}if(d<0){var g=k*(t-B-r),j=-d-g;if(j>0)d=-g-b.sqrt(j)*5}}if(E-bb<-2)fb=1;else if(E-bb>2)fb=0;bb=E;E=d;ob=D-E/k/(jb||1);if(E&&w&&!wb){a.P(e);if(!P)A.Yd(ob);else A.be(ob)}else a.Db()&&a.P(e)}}}else Bb(e)}function Bb(h){kc();if(H){H=d;a.u();a.ve(f,kb,Wb);T=E;T&&a.P(h);A.H();var e=x.F();k.e(n.$EVT_DRAG_END,u(e),e,u(D),D,h);var c=b.floor(D);if(b.abs(E)>=i.$MinDragOffsetToSlide){c=b.floor(e);c+=fb}if(!(S&1))c=b.min(t-B,b.max(c,0));var g=b.abs(c-e);g=1-b.pow(1-g,5);if(!T&&mb)A.td(Fb);else if(e==c){pb.we();pb.yb()}else A.jb(e,c,g*Pb)}}function hc(a){C[r];r=u(a);pb=C[r];Ob(a);return r}function yc(a,b){w=0;hc(a);k.e(n.$EVT_PARK,u(a),b)}function Ob(b,c){ub=b;a.f(N,function(a){a.Tb(u(b),b,c)})}function mc(){var b=n.Gc||0,a=i.$DragOrientation;if(G)a&1&&(a&=1);n.Gc|=a;return I=a&~b}function kc(){if(I){n.Gc&=~i.$DragOrientation;I=0}}function Sb(){var b=a.rb();a.N(b,R);a.r(b,"absolute");return b}function u(a){return(a%t+t)%t}function ec(a,c){if(c)if(!S){a=b.min(b.max(a+ub,0),t-1);c=d}else if(S&2){a=u(a+ub);c=d}ab(a,i.$SlideDuration,c)}function vb(){a.f(N,function(a){a.Sb(a.fb.$ChanceToShow>Y)})}function cc(b){b=a.Bb(b);var c=b.target?b.target:b.srcElement,d=b.relatedTarget?b.relatedTarget:b.toElement;if(!a.Wb(o,c)||a.Wb(o,d))return;Y=1;vb();C[r].yb()}function bc(){Y=0;vb()}function dc(){R={ib:O,kb:M,$Top:0,$Left:0};a.f(W,function(b){a.N(b,R);a.r(b,"absolute");a.Y(b,"hidden");a.y(b)});a.N(cb,R)}function hb(b,a){ab(b,a,c)}function ab(h,g,l){if(Lb&&(!H||i.$NaviQuitDrag)){P=c;H=d;A.H();if(a.Lc(g))g=Pb;var f=Cb.ub(),e=h;if(l){e=f+h;if(h>0)e=b.ceil(e);else e=b.floor(e)}if(!(S&1)){e=u(e);e=b.max(0,b.min(e,t-B))}var k=(e-f)%t;e=f+k;var j=f==e?0:g*b.abs(k);j=b.min(j,g*B*1.5);A.jb(f,e,j||1)}}k.$PlayTo=ab;k.$GoTo=function(a){ab(a,1)};k.$Next=function(){hb(1)};k.$Prev=function(){hb(-1)};k.$Pause=function(){Q=d};k.$Play=function(){if(!Q){Q=c;C[r]&&C[r].yb()}};k.$SetSlideshowTransitions=function(a){i.$SlideshowOptions.$Transitions=a};k.$SetCaptionTransitions=function(b){K.Hb=a.u()};k.$SlidesCount=function(){return W.length};k.$CurrentIndex=function(){return r};k.$IsAutoPlaying=function(){return Q};k.$IsDragging=function(){return H};k.$IsSliding=function(){return P};k.$IsMouseOver=function(){return!Y};k.$LastDragSucceded=function(){return T};k.$GetOriginalWidth=function(){return a.i(v||o)};k.$GetOriginalHeight=function(){return a.l(v||o)};k.$GetScaleWidth=function(){return a.i(o)};k.$GetScaleHeight=function(){return a.l(o)};k.$SetScaleWidth=function(c){if(!v){var b=a.p(o,d);a.Pb(b,"id");a.r(b,"relative");a.k(b,0);a.j(b,0);a.Y(b,"visible");v=a.p(o,d);a.Pb(v,"id");a.Rb(v,"");a.r(v,"absolute");a.k(v,0);a.j(v,0);a.J(v,a.i(o));a.I(v,a.l(o));a.xe(v,"0 0");a.t(v,b);var f=a.sb(o);a.t(o,v);var e={navigator:X&&X.$Scale==d,arrowleft:J&&J.$Scale==d,arrowright:J&&J.$Scale==d,thumbnavigator:F&&F.$Scale==d,thumbwrapper:F&&F.$Scale==d};a.f(f,function(c){a.t(e[a.G(c,"u")]?o:b,c)});a.m(b);a.m(v)}jb=c/a.i(v);a.pe(v,jb);a.J(o,c);a.I(o,jb*a.l(v));a.f(N,function(a){a.Eb()})};k.Oc=function(a){var d=b.ceil(u(sb/Vb)),c=u(a-r+d);if(c>B){if(a-r>t/2)a-=t;else if(a-r<=-t/2)a+=t}else a=r+c-d;return a};m.call(this);k.$Elmt=o=a.M(o);var i=a.o({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:d,$Loop:1,$HWA:c,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:1,$SlideDuration:500,$SlideEasing:l.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},ac),eb=i.$SlideshowOptions,K=a.o({$Class:s},i.Me),X=i.$BulletNavigatorOptions,J=i.$ArrowNavigatorOptions,F=i.$ThumbnailNavigatorOptions,V=i.$UISearchMode,v,y=a.n(o,"slides",e,V),cb=a.n(o,"loading",e,V)||a.rb(f),Hb=a.n(o,"navigator",e,V),Xb=a.n(o,"arrowleft",e,V),Ub=a.n(o,"arrowright",e,V),Eb=a.n(o,"thumbnavigator",e,V),gc=a.i(y),fc=a.l(y),R,W=[],qc=a.sb(y);a.f(qc,function(b){b.tagName=="DIV"&&!a.G(b,"u")&&W.push(b)});var r=-1,ub,pb,t=W.length,O=i.$SlideWidth||gc,M=i.$SlideHeight||fc,Rb=i.$SlideSpacing,xb=O+Rb,yb=M+Rb,Vb=i.$PlayOrientation==1?xb:yb,B=b.min(i.$DisplayPieces,t),gb,w,I,wb,G,N=[],Kb,Mb,Jb,Zb,xc,Q,Qb=i.$PauseOnHover,Pb=i.$SlideDuration,nb,db,sb,Lb=B<t,S=Lb?i.$Loop:0;if(!(S&1))i.$ParkingPosition=0;if(i.$DisplayPieces>1||i.$ParkingPosition)i.$DragOrientation&=i.$PlayOrientation;var nc=i.$DragOrientation,T,Y=1,P,H,U,qb=0,rb=0,E,bb,fb,Cb,x,Z,A,Nb=new jc,jb;Q=i.$AutoPlay;k.fb=ac;dc();o["jssor-slider"]=c;a.S(y,a.ic(y));a.r(y,"absolute");gb=a.p(y);a.vb(a.W(y),gb,y);if(eb){Zb=eb.$ShowLink;nb=eb.$Class;db=B==1&&t>1&&nb&&(!a.Qb()||a.V()>=8)}sb=db||B>=t?0:i.$ParkingPosition;var tb=y,C=[],z,L,Ab="mousedown",kb="mousemove",Db="mouseup",ib,D,mb,Fb,ob;if(g.navigator.msPointerEnabled){Ab="MSPointerDown";kb="MSPointerMove";Db="MSPointerUp";ib="MSPointerCancel";if(i.$DragOrientation){var zb="none";if(i.$DragOrientation==1)zb="pan-y";else if(i.$DragOrientation==2)zb="pan-x";a.Uc(tb.style,"-ms-touch-action",zb)}}else if("ontouchstart"in g||"createTouch"in f){G=c;Ab="touchstart";kb="touchmove";Db="touchend";ib="touchcancel"}Z=new uc;if(db)z=new nb(Nb,O,M,eb,G);a.t(gb,Z.db);a.Y(y,"hidden");L=Sb();a.kc(L,"#000");a.Ab(L,0);a.vb(tb,L,tb.firstChild);for(var lb=0;lb<W.length;lb++){var sc=W[lb],Yb=new tc(sc,lb);C.push(Yb)}a.y(cb);Cb=new vc;A=new ic(Cb,Z);if(nc){a.c(y,Ab,pc);a.c(f,Db,Bb);ib&&a.c(f,ib,Bb)}Qb&=G?2:1;if(Hb&&X){Kb=new X.$Class(Hb,X);N.push(Kb)}if(J&&Xb&&Ub){Mb=new J.$Class(Xb,Ub,J);N.push(Mb)}if(Eb&&F){F.$StartIndex=i.$StartIndex;Jb=new F.$Class(Eb,F);N.push(Jb)}k.$SetScaleWidth(k.$GetOriginalWidth());a.f(N,function(a){a.Gb(t,C,cb);a.$On(p.lb,ec)});a.c(o,"mouseout",cc);a.c(o,"mouseover",bc);vb();i.$ArrowKeyNavigation&&a.c(f,"keydown",function(a){if(a.keyCode==q.cd)hb(-1);else a.keyCode==q.oe&&hb(1)});A.jb(i.$StartIndex,i.$StartIndex,0)}n.$EVT_CLICK=21;n.$EVT_DRAG_START=22;n.$EVT_DRAG_END=23;n.$EVT_SWIPE_START=24;n.$EVT_SWIPE_END=25;n.$EVT_LOAD_START=26;n.$EVT_LOAD_END=27;n.$EVT_POSITION_CHANGE=202;n.$EVT_PARK=203;n.$EVT_SLIDESHOW_START=206;n.$EVT_SLIDESHOW_END=207;n.$EVT_PROGRESS_CHANGE=208;n.$EVT_STATE_CHANGE=209;n.$EVT_ROLLBACK_START=210;n.$EVT_ROLLBACK_END=211;g.$JssorSlider$=r=n};var p={lb:1};g.$JssorBulletNavigator$=function(d,C){var g=this;m.call(g);d=a.M(d);var s,t,r,q,k=0,f,l,j,x,y,i,h,o,n,B=[],z=[];function w(a){a!=-1&&z[a].Vb(a==k)}function u(a){g.e(p.lb,a*l)}g.$Elmt=d;g.Tb=function(a){if(a!=q){var d=k,c=b.floor(a/l);k=c;q=a;w(d);w(c)}};g.Sb=function(b){a.m(d,b)};var A;g.Eb=function(){if(!A||!f.$Scale){f.$AutoCenter&1&&a.j(d,(a.i(a.W(d))-t)/2);f.$AutoCenter&2&&a.k(d,(a.l(a.W(d))-r)/2);A=c}};var v;g.Gb=function(E){if(!v){s=b.ceil(E/l);k=0;var q=o+x,w=n+y,p=b.ceil(s/j)-1;t=o+q*(!i?p:j-1);r=n+w*(i?p:j-1);a.J(d,t);a.I(d,r);for(var g=0;g<s;g++){var C=a.Qc();a.ne(C,g+1);var m=a.ac(h,"NumberTemplate",C,c);a.r(m,"absolute");var A=g%(p+1);a.j(m,!i?q*A:g%j*q);a.k(m,i?w*A:b.floor(g/(p+1))*w);a.t(d,m);B[g]=m;f.$ActionMode&1&&a.c(m,"click",a.s(e,u,g));f.$ActionMode&2&&a.c(m,"mouseover",a.s(e,u,g));z[g]=a.mb(m)}v=c}};g.fb=f=a.o({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},C);h=a.n(d,"prototype");o=a.i(h);n=a.l(h);a.cb(d,h);l=f.$Steps||1;j=f.$Lanes||1;x=f.$SpacingX;y=f.$SpacingY;i=f.$Orientation-1};g.$JssorArrowNavigator$=function(b,f,r){var d=this;m.call(d);var g,i,o=a.W(b),n=a.i(b),k=a.l(b);function j(a){d.e(p.lb,a,c)}d.Tb=function(b,a,c){if(c);};d.Sb=function(c){a.m(b,c);a.m(f,c)};var q;d.Eb=function(){if(!q||!g.$Scale){var e=a.i(o),d=a.l(o);if(g.$AutoCenter&1){a.j(b,(e-n)/2);a.j(f,(e-n)/2)}if(g.$AutoCenter&2){a.k(b,(d-k)/2);a.k(f,(d-k)/2)}q=c}};var l;d.Gb=function(d){if(!l){a.c(b,"click",a.s(e,j,-i));a.c(f,"click",a.s(e,j,i));a.mb(b);a.mb(f);l=c}};d.fb=g=a.o({$Steps:1},r);i=g.$Steps};g.$JssorThumbnailNavigator$=function(i,A){var h=this,x,l,e,u=[],y,w,f,n,o,t,s,k,q,g,j;m.call(h);i=a.M(i);function z(n,d){var g=this,b,m,k;function o(){m.Vb(l==d)}function i(){if(!q.$LastDragSucceded()){var a=(f-d%f)%f,b=q.Oc((d+a)/f),c=b*f-a;h.e(p.lb,c)}}g.L=d;g.Bc=o;k=n.Yc||n.uc||a.rb();g.db=b=a.ac(j,"ThumbnailTemplate",k,c);m=a.mb(b);e.$ActionMode&1&&a.c(b,"click",i);e.$ActionMode&2&&a.c(b,"mouseover",i)}h.Tb=function(c,d,e){var a=l;l=c;a!=-1&&u[a].Bc();u[c].Bc();!e&&q.$PlayTo(q.Oc(b.floor(d/f)))};h.Sb=function(b){a.m(i,b)};h.Eb=a.C;var v;h.Gb=function(F,D){if(!v){x=F;b.ceil(x/f);l=-1;k=b.min(k,D.length);var h=e.$Orientation&1,p=t+(t+n)*(f-1)*(1-h),m=s+(s+o)*(f-1)*h,C=p+(p+n)*(k-1)*h,A=m+(m+o)*(k-1)*(1-h);a.r(g,"absolute");a.Y(g,"hidden");e.$AutoCenter&1&&a.j(g,(y-C)/2);e.$AutoCenter&2&&a.k(g,(w-A)/2);a.J(g,C);a.I(g,A);var j=[];a.f(D,function(l,e){var i=new z(l,e),d=i.db,c=b.floor(e/f),k=e%f;a.j(d,(t+n)*k*(1-h));a.k(d,(s+o)*k*h);if(!j[c]){j[c]=a.rb();a.t(g,j[c])}a.t(j[c],d);u.push(i)});var E=a.o({$AutoPlay:d,$NaviQuitDrag:d,$SlideWidth:p,$SlideHeight:m,$SlideSpacing:n*h+o*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:1,$PlayOrientation:e.$Orientation,$DragOrientation:e.$DisableDrag?0:e.$Orientation},e);q=new r(i,E);v=c}};h.fb=e=a.o({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.i(i);w=a.l(i);g=a.n(i,"slides");j=a.n(g,"prototype");a.cb(g,j);f=e.$Lanes||1;n=e.$SpacingX;o=e.$SpacingY;t=a.i(j);s=a.l(j);k=e.$DisplayPieces};function s(){j.call(this,0,0);this.wb=a.C}})(window,document,Math,null,true,false)