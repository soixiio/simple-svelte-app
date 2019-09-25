var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function i(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n){t.$$.on_destroy.push(function(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}(e,n))}const c="undefined"!=typeof window;let a=c?()=>window.performance.now():()=>Date.now(),d=c?t=>requestAnimationFrame(t):t;const u=new Set;let f,p=!1;function m(){u.forEach(t=>{t[0](a())||(u.delete(t),t[1]())}),(p=u.size>0)&&d(m)}function h(t){let e;return p||(p=!0,d(m)),{promise:new Promise(n=>{u.add(e=[t,n])}),abort(){u.delete(e)}}}function v(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function k(){return y(" ")}function x(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function w(t,e){e=""+e,t.data!==e&&(t.data=e)}function M(t,e,n){t.classList[n?"add":"remove"](e)}function C(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let S,E=0,B={};function D(t,e,n,i,o,s,r,l=0){const c=16.666/i;let a="{\n";for(let t=0;t<=1;t+=c){const i=e+(n-e)*s(t);a+=100*t+`%{${r(i,1-i)}}\n`}const d=a+`100% {${r(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(d)}_${l}`;if(!B[u]){if(!f){const t=b("style");document.head.appendChild(t),f=t.sheet}B[u]=!0,f.insertRule(`@keyframes ${u} ${d}`,f.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${i}ms linear ${o}ms 1 both`,E+=1,u}function R(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--E&&d(()=>{if(E)return;let t=f.cssRules.length;for(;t--;)f.deleteRule(t);B={}})}function z(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:i}=e,o=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,function(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),o="none"===i.transform?"":i.transform;t.style.transform=`${o} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}(t,o)}}function O(t){S=t}function q(t){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(t)}function L(){const t=S;return(e,n)=>{const i=t.$$.callbacks[e];if(i){const o=C(e,n);i.slice().forEach(e=>{e.call(t,o)})}}}const T=[],F=[],j=[],A=[],H=Promise.resolve();let I,P=!1;function N(t){j.push(t)}function W(){const t=new Set;do{for(;T.length;){const t=T.shift();O(t),U(t.$$)}for(;F.length;)F.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];t.has(n)||(n(),t.add(n))}j.length=0}while(T.length);for(;A.length;)A.pop()();P=!1}function U(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(N))}function Y(){return I||(I=Promise.resolve()).then(()=>{I=null}),I}function G(t,e,n){t.dispatchEvent(C(`${e?"intro":"outro"}${n}`))}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function V(){K.r||o(K.c),K=K.p}function X(t,e){t&&t.i&&(J.delete(t),t.i(e))}function Z(t,e,n,i){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push(()=>{J.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const tt={duration:0};function et(n,i,o){let r,l,c=i(n,o),d=!1,u=0;function f(){r&&R(n,r)}function p(){const{delay:i=0,duration:o=300,easing:s=e,tick:p=t,css:m}=c||tt;m&&(r=D(n,0,1,o,i,s,m,u++)),p(0,1);const v=a()+i,g=v+o;l&&l.abort(),d=!0,N(()=>G(n,!0,"start")),l=h(t=>{if(d){if(t>=g)return p(1,0),G(n,!0,"end"),f(),d=!1;if(t>=v){const e=s((t-v)/o);p(e,1-e)}}return d})}let m=!1;return{start(){m||(R(n),s(c)?(c=c(),Y().then(p)):p())},invalidate(){m=!1},end(){d&&(f(),d=!1)}}}function nt(n,i,r){let l,c=i(n,r),d=!0;const u=K;function f(){const{delay:i=0,duration:s=300,easing:r=e,tick:f=t,css:p}=c||tt;p&&(l=D(n,1,0,s,i,r,p));const m=a()+i,v=m+s;N(()=>G(n,!1,"start")),h(t=>{if(d){if(t>=v)return f(0,1),G(n,!1,"end"),--u.r||o(u.c),!1;if(t>=m){const e=r((t-m)/s);f(1-e,e)}}return d})}return u.r+=1,s(c)?Y().then(()=>{c=c(),f()}):f(),{end(t){t&&c.tick&&c.tick(1,0),d&&(l&&R(n,l),d=!1)}}}function it(n,i,r,l){let c=i(n,r),d=l?0:1,u=null,f=null,p=null;function m(){p&&R(n,p)}function v(t,e){const n=t.b-d;return e*=Math.abs(n),{a:d,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(i){const{delay:s=0,duration:r=300,easing:l=e,tick:g=t,css:$}=c||tt,b={start:a()+s,b:i};i||(b.group=K,K.r+=1),u?f=b:($&&(m(),p=D(n,d,i,r,s,l,$)),i&&g(0,1),u=v(b,r),N(()=>G(n,i,"start")),h(t=>{if(f&&t>f.start&&(u=v(f,r),f=null,G(n,u.b,"start"),$&&(m(),p=D(n,d,u.b,u.duration,0,l,c.css))),u)if(t>=u.end)g(d=u.b,1-d),G(n,u.b,"end"),f||(u.b?m():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;d=u.a+u.d*l(e/u.duration),g(d,1-d)}return!(!u&&!f)}))}return{run(t){s(c)?Y().then(()=>{c=c(),g(t)}):g(t)},end(){m(),u=f=null}}}function ot(t,e){t.f(),function(t,e){Z(t,1,1,()=>{e.delete(t.key)})}(t,e)}function st(t,e,i){const{fragment:r,on_mount:l,on_destroy:c,after_update:a}=t.$$;r.m(e,i),N(()=>{const e=l.map(n).filter(s);c?c.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(N)}function rt(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function lt(t,e){t.$$.dirty||(T.push(t),P||(P=!0,H.then(W)),t.$$.dirty=i()),t.$$.dirty[e]=!0}function ct(e,n,s,r,l,c){const a=S;O(e);const d=n.props||{},u=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:i(),dirty:null};let f=!1;var p;u.ctx=s?s(e,d,(t,n,i=n)=>(u.ctx&&l(u.ctx[t],u.ctx[t]=i)&&(u.bound[t]&&u.bound[t](i),f&&lt(e,t)),n)):d,u.update(),f=!0,o(u.before_update),u.fragment=r(u.ctx),n.target&&(n.hydrate?u.fragment.l((p=n.target,Array.from(p.childNodes))):u.fragment.c(),n.intro&&X(e.$$.fragment),st(e,n.target,n.anchor),W()),O(a)}let at;"undefined"!=typeof HTMLElement&&(at=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class dt{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ut="https://image.tmdb.org/t/p/",ft="w342/",pt="https://api.themoviedb.org/3/discover/movie?api_key=b6a21b30d0a02dbb844bbfb52fb1d2ec&with_release_type=3&primary_release_date.gte=";function mt(e){var n,i,o,s,r,l,c,a,d,u,f,p,m,h,C,S,E;return{c(){var t;n=b("div"),i=b("figure"),o=b("img"),r=k(),l=b("div"),c=b("h2"),a=y(e.title),d=k(),u=b("p"),f=y("Rating: "),p=y(e.rate),m=k(),h=b("p"),C=y("Release: "),S=y(e.date),_(o,"src",s=ut+ft+e.poster),_(o,"alt",e.title),_(o,"class","svelte-145vxgc"),_(i,"class","card-image image svelte-145vxgc"),M(i,"thumb-placeholder",!e.poster),_(c,"class","svelte-145vxgc"),_(l,"class","card-content svelte-145vxgc"),_(n,"class","card card-link svelte-145vxgc"),M(n,"is-invisible",e.invisible),E=x(n,"click",(t=e.handleClick,function(e){return e.preventDefault(),t.call(this,e)}))},m(t,s){g(t,n,s),v(n,i),v(i,o),v(n,r),v(n,l),v(l,c),v(c,a),v(l,d),v(l,u),v(u,f),v(u,p),v(l,m),v(l,h),v(h,C),v(h,S),e.div1_binding(n)},p(t,e){t.poster&&s!==(s=ut+ft+e.poster)&&_(o,"src",s),t.title&&_(o,"alt",e.title),t.poster&&M(i,"thumb-placeholder",!e.poster),t.title&&w(a,e.title),t.rate&&w(p,e.rate),t.date&&w(S,e.date),t.invisible&&M(n,"is-invisible",e.invisible)},i:t,o:t,d(t){t&&$(n),e.div1_binding(null),E()}}}function ht(t,e,n){const i=L();let o,{title:s,poster:r,rate:l,date:c,id:a,invisible:d}=e;return t.$set=(t=>{"title"in t&&n("title",s=t.title),"poster"in t&&n("poster",r=t.poster),"rate"in t&&n("rate",l=t.rate),"date"in t&&n("date",c=t.date),"id"in t&&n("id",a=t.id),"invisible"in t&&n("invisible",d=t.invisible)}),{title:s,poster:r,rate:l,date:c,id:a,invisible:d,card:o,handleClick:function(){const t={},e={};t.top=o.getBoundingClientRect().top,t.left=o.getBoundingClientRect().left,e.width=o.querySelector("img").offsetWidth,e.height=o.querySelector("img").offsetHeight,i("click",{id:a,position:t,imageSize:e})},div1_binding:function(t){F[t?"unshift":"push"](()=>{n("card",o=t)})}}}class vt extends dt{constructor(t){super(),ct(this,t,ht,mt,r,["title","poster","rate","date","id","invisible"])}}function gt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function $t(t){const e=t-1;return e*e*e+1}function bt(t){return Math.sin(t*Math.PI/2)}function yt(t,e,n){const i=getComputedStyle(t),o="none"===i.transform?"":i.transform,r=e.from.left-e.to.left,l=e.from.top-e.to.top,c=Math.sqrt(r*r+l*l),{delay:a=0,duration:d=(t=>120*Math.sqrt(t)),easing:u=$t}=n;return{delay:a,duration:s(d)?d(c):d,easing:u,css:(t,e)=>`transform: ${o} translate(${e*r}px, ${e*l}px);`}}function kt(t,{delay:e=0,duration:n=400}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>`opacity: ${t*i}`}}function xt(t,e,n){const i=Object.create(t);return i.movie=e[n],i}function _t(n,i){var o,s,r,l,c=t,d=new vt({props:{id:i.movie.id,title:i.movie.title,rate:i.movie.popularity,date:i.movie.release_date,poster:i.movie.poster_path,invisible:i.hidden}});return d.$on("click",i.click_handler),{key:n,first:null,c(){o=b("div"),d.$$.fragment.c(),s=k(),_(o,"class","column is-narrow"),this.first=o},m(t,e){g(t,o,e),st(d,o,null),v(o,s),l=!0},p(t,e){var n={};t.movies&&(n.id=e.movie.id),t.movies&&(n.title=e.movie.title),t.movies&&(n.rate=e.movie.popularity),t.movies&&(n.date=e.movie.release_date),t.movies&&(n.poster=e.movie.poster_path),t.hidden&&(n.invisible=e.hidden),d.$set(n)},r(){r=o.getBoundingClientRect()},f(){z(o),c()},a(){c(),c=function(n,i,o,s){if(!i)return t;const r=n.getBoundingClientRect();if(i.left===r.left&&i.right===r.right&&i.top===r.top&&i.bottom===r.bottom)return t;const{delay:l=0,duration:c=300,easing:d=e,start:u=a()+l,end:f=u+c,tick:p=t,css:m}=o(n,{from:i,to:r},s);let v,g=!0,$=!1;function b(){m&&R(n,v),g=!1}return h(t=>{if(!$&&t>=u&&($=!0),$&&t>=f&&(p(1,0),b()),!g)return!1;if($){const e=0+1*d((t-u)/c);p(e,1-e)}return!0}),m&&(v=D(n,0,1,c,l,d,m)),l||($=!0),p(0,1),b}(o,r,yt,{duration:300})},i(t){l||(X(d.$$.fragment,t),l=!0)},o(t){Z(d.$$.fragment,t),l=!1},d(t){t&&$(o),rt(d)}}}function wt(t){var e,n,i,o=[],s=new Map;let r=t.movies;const l=t=>t.movie.id;for(let e=0;e<r.length;e+=1){let n=xt(t,r,e),i=l(n);s.set(i,o[e]=_t(i,n))}return{c(){e=b("div");for(let t=0;t<o.length;t+=1)o[t].c();_(e,"class","columns is-mobile is-centered is-multiline")},m(t,n){g(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null);i=!0},p(t,n){const i=n.movies;Q();for(let t=0;t<o.length;t+=1)o[t].r();o=function(t,e,n,i,o,s,r,l,c,a,d,u){let f=t.length,p=s.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const v=[],g=new Map,$=new Map;for(m=p;m--;){const t=u(o,s,m),l=n(t);let c=r.get(l);c?i&&c.p(e,t):(c=a(l,t)).c(),g.set(l,v[m]=c),l in h&&$.set(l,Math.abs(m-h[l]))}const b=new Set,y=new Set;function k(t){X(t,1),t.m(l,d),r.set(t.key,t),d=t.first,p--}for(;f&&p;){const e=v[p-1],n=t[f-1],i=e.key,o=n.key;e===n?(d=e.first,f--,p--):g.has(o)?!r.has(i)||b.has(i)?k(e):y.has(o)?f--:$.get(i)>$.get(o)?(y.add(i),k(e)):(b.add(o),f--):(c(n,r),f--)}for(;f--;){const e=t[f];g.has(e.key)||c(e,r)}for(;p;)k(v[p-1]);return v}(o,t,l,1,n,i,s,e,ot,_t,null,xt);for(let t=0;t<o.length;t+=1)o[t].a();V()},i(t){if(!i){for(let t=0;t<r.length;t+=1)X(o[t]);N(()=>{n||(n=it(e,kt,{},!0)),n.run(1)}),i=!0}},o(t){for(let t=0;t<o.length;t+=1)Z(o[t]);n||(n=it(e,kt,{},!1)),n.run(0),i=!1},d(t){t&&$(e);for(let t=0;t<o.length;t+=1)o[t].d();t&&n&&n.end()}}}function Mt(t,e,n){let{movies:i,hidden:o}=e;return t.$set=(t=>{"movies"in t&&n("movies",i=t.movies),"hidden"in t&&n("hidden",o=t.hidden)}),{movies:i,hidden:o,click_handler:function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}}}class Ct extends dt{constructor(t){super(),ct(this,t,Mt,wt,r,["movies","hidden"])}}const St=[];const Et=function(e,n=t){let i;const o=[];function s(t){if(r(e,t)&&(e=t,i)){const t=!St.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),St.push(n,e)}if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(r,l=t){const c=[r,l];return o.push(c),1===o.length&&(i=n(s)||t),r(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(i(),i=null)}}}}([]),Bt={subscribe:Et.subscribe,setMovies:t=>{Et.set(t)}};function Dt(t,{delay:e=100,easing:n=cubicOut,duration:i=400,start:o=0,end:s=1,x1:r=0,y1:l=0,x2:c=100,y2:a=100}){t.style.left=`${c}px`,t.style.top=`${a}px`;const d=s-o,u=c-r,f=a-l;return{delay:e,duration:i,easing:n,css:(t,e)=>`\n\t\t\t\t\ttransform: scale(${s-d*e});\t\t\t\t\n\t\t\t\t\tleft: ${r+u*t}px;\t\n\t\t\t\t\ttop: ${l+f*t}px;\t\t\t\t\t\t\n\t\t\t\t`}}function Rt(t){var e,n,i,s,r,l,c,a,d,u,f,p,m,h,w,C,S,E,B,D,R,z,O,q,L,T,F,j,A,H,I,P,W=t.movie.title+"",U=t.movie.overview+"",Y=t.movie.release_date+"",G=t.movie.popularity+"";return{c(){e=b("div"),n=b("div"),r=k(),l=b("div"),c=b("div"),a=b("img"),d=k(),u=b("div"),f=b("h2"),p=y(W),m=k(),h=b("p"),w=y(U),C=k(),S=b("br"),E=k(),B=b("p"),D=y("Release date: "),R=y(Y),z=k(),O=b("p"),q=y("Rating: "),L=y(G),A=k(),H=b("button"),_(n,"class","modal-background svelte-3obxgf"),_(a,"src",ut+ft+t.movie.poster_path),_(a,"alt",t.movie.title),_(a,"class","svelte-3obxgf"),_(c,"class","image svelte-3obxgf"),_(c,"style",t.modalImageStyle),M(c,"thumb-placeholder",!t.movie.poster_path),_(f,"class","svelte-3obxgf"),_(u,"class","content svelte-3obxgf"),_(l,"class","modal-body svelte-3obxgf"),_(l,"style",t.modalBodyStyle),_(H,"class","modal-close is-large svelte-3obxgf"),_(H,"aria-label","close"),_(e,"class","modal svelte-3obxgf"),M(e,"is-unclickable",t.disableClick),P=[x(u,"introend",t.introend_handler),x(l,"introstart",t.introstart_handler),x(e,"click",t.handleClick)]},m(t,i){g(t,e,i),v(e,n),v(e,r),v(e,l),v(l,c),v(c,a),v(l,d),v(l,u),v(u,f),v(f,p),v(u,m),v(u,h),v(h,w),v(u,C),v(u,S),v(u,E),v(u,B),v(B,D),v(B,R),v(u,z),v(u,O),v(O,q),v(O,L),v(e,A),v(e,H),I=!0},p(t,n){t.movie&&M(c,"thumb-placeholder",!n.movie.poster_path),t.disableClick&&M(e,"is-unclickable",n.disableClick)},i(e){I||(N(()=>{s&&s.end(1),i||(i=et(n,kt,{easing:gt})),i.start()}),N(()=>{F&&F.end(1),T||(T=et(u,kt,{delay:600})),T.start()}),N(()=>{j||(j=it(l,Dt,t.animationOpt,!0)),j.run(1)}),I=!0)},o(e){i&&i.invalidate(),s=nt(n,kt,{delay:400}),T&&T.invalidate(),F=nt(u,kt,{duration:0}),j||(j=it(l,Dt,t.animationOpt,!1)),j.run(0),I=!1},d(t){t&&($(e),s&&s.end(),F&&F.end(),j&&j.end()),o(P)}}}function zt(t,e,n){let i;l(t,Bt,t=>{n("$movieStore",i=t)});const o=L();let{id:s,position:r,imageSize:c}=e,a=!1;const d=i.find(t=>t.id===s),u=`top: ${r.top}px; left: ${r.left}px`,f=`width: ${c.width}px; height: ${c.height}px`,p=r.top,m=r.left,h=window.innerHeight/2-c.height/2,v={easing:bt,start:1,end:1.2,x1:m,y1:p,x2:document.documentElement.clientWidth/2-c.width,y2:h};return t.$set=(t=>{"id"in t&&n("id",s=t.id),"position"in t&&n("position",r=t.position),"imageSize"in t&&n("imageSize",c=t.imageSize)}),{id:s,position:r,imageSize:c,disableClick:a,movie:d,modalBodyStyle:u,modalImageStyle:f,animationOpt:v,handleClick:function(){if(a)return!1;o("close")},introend_handler:()=>n("disableClick",a=!1),introstart_handler:()=>n("disableClick",a=!0)}}class Ot extends dt{constructor(t){super(),ct(this,t,zt,Rt,r,["id","position","imageSize"])}}function qt(e){var n;return{c(){(n=b("footer")).innerHTML='<div class="container"><div class="credits"><img width="50" height="50" src="images/tmdb.png" alt="TMDB"></div></div>',_(n,"class","footer svelte-1hbimba")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&$(n)}}}class Lt extends dt{constructor(t){super(),ct(this,t,null,qt,r,[])}}function Tt(e){var n,i,s,r,l;return{c(){n=b("div"),(i=b("button")).textContent="Sort be rate",s=k(),(r=b("button")).textContent="Sort by date",_(i,"type","button"),_(i,"class","button svelte-1q5kils"),M(i,"is-active","rate"===e.selectedButton),_(r,"type","button"),_(r,"class","button svelte-1q5kils"),M(r,"is-active","date"===e.selectedButton),_(n,"class","controls svelte-1q5kils"),l=[x(i,"click",e.click_handler),x(r,"click",e.click_handler_1)]},m(t,e){g(t,n,e),v(n,i),v(n,s),v(n,r)},p(t,e){t.selectedButton&&(M(i,"is-active","rate"===e.selectedButton),M(r,"is-active","date"===e.selectedButton))},i:t,o:t,d(t){t&&$(n),o(l)}}}function Ft(t,e){return t.release_date===e.release_date?0:t.release_date>e.release_date?1:-1}function jt(t,e,n){const i=L();let o="rate";return{dispatch:i,selectedButton:o,click_handler:()=>{n("selectedButton",o="rate"),i("select","default")},click_handler_1:()=>{n("selectedButton",o="date"),i("select",Ft)}}}class At extends dt{constructor(t){super(),ct(this,t,jt,Tt,r,[])}}const Ht=new Date;let It=Ht.getDate(),Pt=Ht.getMonth()+1;Pt<10&&(Pt="0"+Pt),It<10&&(It="0"+It);const Nt=Ht.getFullYear()+"-"+Pt+"-"+It;function Wt(t){var e,n=new Ct({props:{movies:t.sortedMovies,hidden:t.modal}});return n.$on("click",t.showModal),{c(){n.$$.fragment.c()},m(t,i){st(n,t,i),e=!0},p(t,e){var i={};t.sortedMovies&&(i.movies=e.sortedMovies),t.modal&&(i.hidden=e.modal),n.$set(i)},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Z(n.$$.fragment,t),e=!1},d(t){rt(n,t)}}}function Ut(e){var n;return{c(){(n=b("p")).textContent="...Is loading",_(n,"class","loading")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&$(n)}}}function Yt(t){var e,n=new Ot({props:{id:t.clickedMovieDetails.id,position:t.clickedMovieDetails.position,imageSize:t.clickedMovieDetails.imageSize}});return n.$on("close",t.closeModal),{c(){n.$$.fragment.c()},m(t,i){st(n,t,i),e=!0},p(t,e){var i={};t.clickedMovieDetails&&(i.id=e.clickedMovieDetails.id),t.clickedMovieDetails&&(i.position=e.clickedMovieDetails.position),t.clickedMovieDetails&&(i.imageSize=e.clickedMovieDetails.imageSize),n.$set(i)},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Z(n.$$.fragment,t),e=!1},d(t){rt(n,t)}}}function Gt(t){var e,n,i,o,s,r,l,c,a,d=new At({});d.$on("select",t.setSorting);var u=[Ut,Wt],f=[];function p(t,e){return e.isLoading?0:1}s=p(0,t),r=f[s]=u[s](t);var m=t.modal&&Yt(t),h=new Lt({});return{c(){e=b("div"),(n=b("h1")).textContent="Upcoming movies",i=k(),d.$$.fragment.c(),o=k(),r.c(),l=k(),m&&m.c(),c=k(),h.$$.fragment.c(),_(e,"class","container")},m(t,r){g(t,e,r),v(e,n),v(e,i),st(d,e,null),v(e,o),f[s].m(e,null),v(e,l),m&&m.m(e,null),g(t,c,r),st(h,t,r),a=!0},p(t,n){var i=s;(s=p(0,n))===i?f[s].p(t,n):(Q(),Z(f[i],1,1,()=>{f[i]=null}),V(),(r=f[s])||(r=f[s]=u[s](n)).c(),X(r,1),r.m(e,l)),n.modal?m?(m.p(t,n),X(m,1)):((m=Yt(n)).c(),X(m,1),m.m(e,null)):m&&(Q(),Z(m,1,1,()=>{m=null}),V())},i(t){a||(X(d.$$.fragment,t),X(r),X(m),X(h.$$.fragment,t),a=!0)},o(t){Z(d.$$.fragment,t),Z(r),Z(m),Z(h.$$.fragment,t),a=!1},d(t){t&&$(e),rt(d),f[s].d(),m&&m.d(),t&&$(c),rt(h,t)}}}function Jt(t,e,n){let i;l(t,Bt,t=>{n("$movieStore",i=t)});let o,s,r=!0,c=!1;const a=pt+Nt;let d;return q(()=>{fetch(a).then(t=>{if(!t.ok)throw new Error("Connection failed");return t.json()}).then(t=>{if(!t.results.length)throw new Error("Results is empty");n("isLoading",r=!1),Bt.setMovies(t.results)}).catch(t=>{console.error(t)})}),t.$$.update=((t={sortTypeFn:1,$movieStore:1,sortedMovies:1})=>{(t.sortTypeFn||t.$movieStore)&&n("sortedMovies",d="default"===s?i:[...i].sort(s)),t.sortedMovies&&console.log("Movie store: ",d)}),{isLoading:r,modal:c,clickedMovieDetails:o,showModal:function(t){n("modal",c=!0),n("clickedMovieDetails",o=t.detail)},closeModal:function(){n("modal",c=!1),n("clickedMovieDetails",o=null)},setSorting:function(t){n("sortTypeFn",s=t.detail)},sortedMovies:d}}return new class extends dt{constructor(t){super(),ct(this,t,Jt,Gt,r,[])}}({target:document.body})}();
