"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[289],{713:function(n,t,e){e.d(t,{Bp:function(){return c},QA:function(){return u},ci:function(){return p},dx:function(){return s},oq:function(){return d}});var r=e(861),o=e(687),i=e.n(o),a=e(243);a.Z.defaults.params={api_key:"9dc2bc7aceb5d04bb628518c7503619e"};var c=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},289:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var r,o,i,a,c,s,u,p,d,l=e(439),h=e(689),f=e(791),m=e(713),x=e(168),v=e(686),g=e(87),b=v.Z.div(r||(r=(0,x.Z)(["\ndisplay: flex;\n"]))),Z=v.Z.div(o||(o=(0,x.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-left: 25px;\n"]))),w=v.Z.li(i||(i=(0,x.Z)(["\nlist-style: none;\n"]))),j=(0,v.Z)(g.rU)(a||(a=(0,x.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  text-decoration: none;\n  color: blue;\n  font-weight: 500;\n  :hover {\n    text-transform: uppercase;\n    text-decoration: dashed;\n  }\n"]))),k=v.Z.p(c||(c=(0,x.Z)(["\nmargin: 0;\nmargin-bottom: 10px;\n// background-color: white;\nopacity: 0.95;\n"]))),y=v.Z.h2(s||(s=(0,x.Z)(["\nmargin-top: 10px;\nmargin-bottom: 10px;\n"]))),_=v.Z.h4(u||(u=(0,x.Z)(["\nmargin-top: 10px;\nmargin-bottom: 10px; \n"]))),U=(v.Z.div(p||(p=(0,x.Z)(["\nwidth: 960px;\nborder-bottom: 2px solid tomato;\nmargin-bottom: 10px;\n"]))),e(184)),C=(0,v.Z)(g.rU)(d||(d=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),S=function(n){var t=n.to,e=n.children;return(0,U.jsxs)(C,{to:t,children:[(0,U.jsx)("p",{children:"back"}),e]})},A=function(){var n,t,e=(0,h.UO)().id,r=(0,h.TH)(),o=null!==(n=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies",i=(0,f.useState)(null),a=(0,l.Z)(i,2),c=a[0],s=a[1];if((0,f.useEffect)((function(){(0,m.dx)(e).then((function(n){s(n)})).catch((function(n){console.log(n.message)}))}),[e]),!c)return(0,U.jsx)("div",{children:(0,U.jsx)("h1",{children:"Something went wrong..."})});var u=c.genres.map((function(n){return n.name+" "})).join("");return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(S,{to:o,children:"GO BACK"}),(0,U.jsxs)(b,{children:[(0,U.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(c.poster_path),alt:""}),(0,U.jsxs)(Z,{children:[(0,U.jsx)(y,{children:c.title}),(0,U.jsxs)(k,{children:["User Score: ",Math.round(c.popularity)," points"]}),(0,U.jsx)(_,{children:"Overview"}),(0,U.jsx)(k,{children:c.overview}),""===c.overview&&(0,U.jsx)("p",{children:"We don`t have any overview for this movie."}),(0,U.jsx)(_,{children:"Genres"}),(0,U.jsx)(k,{children:u})]})]}),(0,U.jsx)("h4",{children:"Additional information"}),(0,U.jsxs)("ul",{children:[(0,U.jsx)(w,{children:(0,U.jsx)(j,{to:"cast",state:{from:r.state.from},children:"Cast"})}),(0,U.jsx)(w,{children:(0,U.jsx)(j,{to:"reviews",state:{from:r.state.from},children:"Reviews"})})]}),(0,U.jsx)(h.j3,{})]})}}}]);
//# sourceMappingURL=289.5b353fad.chunk.js.map