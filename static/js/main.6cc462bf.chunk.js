(this.webpackJsonphaus=this.webpackJsonphaus||[]).push([[0],[,,,function(e,t,a){e.exports={hero:"hero_hero__34FW3",heroTitle:"hero_heroTitle__2H1nD",heroSubtitle:"hero_heroSubtitle__1Mmtp",heroGrid:"hero_heroGrid__74reV",heroInput:"hero_heroInput__aHCyY",heroInputContainer:"hero_heroInputContainer__1UQm6",heroInputPlaceholder:"hero_heroInputPlaceholder__XfzLG",active:"hero_active__3vlr5",activeBorder:"hero_activeBorder__2iK_J",heroButton:"hero_heroButton__10LEN",search:"hero_search__1Runs"}},function(e,t,a){e.exports={discoverContainer:"discover_discoverContainer__39na9",discoverGrid:"discover_discoverGrid__3hD5N",discoverListingsContainer:"discover_discoverListingsContainer__1Ys9u",discoverTitle:"discover_discoverTitle__28sdj",discoverListing:"discover_discoverListing__3hrIN",listingTitle:"discover_listingTitle__2FUFv",listingHeuristic:"discover_listingHeuristic__1ykKl",heuristicGrid:"discover_heuristicGrid__2OT_Z"}},,,function(e,t,a){e.exports={navbar:"navbar_navbar__1pbIf",navItemList:"navbar_navItemList__3D6N2",navItem:"navbar_navItem__1bmye",logo:"navbar_logo__1nWOE",logoCenter:"navbar_logoCenter__qfRdY",logoContainer:"navbar_logoContainer__3Kmmy",logoText:"navbar_logoText__10wxG",ctaLink:"navbar_ctaLink__32_BP"}},,,,,,function(e,t,a){e.exports={footer:"footer_footer__11BbJ",footerContainer:"footer_footerContainer__3FR_i",footerTitle:"footer_footerTitle__2Ps9m",footerText:"footer_footerText__DEl7Y"}},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/search.ceec3f62.svg"},function(e,t,a){e.exports=a.p+"static/media/outline-red.173178e4.svg"},function(e,t,a){e.exports=a.p+"static/media/washington.70ec86e3.svg"},function(e,t,a){e.exports=a.p+"static/media/outline.0103b795.svg"},function(e,t,a){e.exports=a(38)},,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),i=a.n(r),c=a(9),s=a(8),l=a(11),m=a.n(l),u=a(7),h=a.n(u),_=function(e){var t=e.routes;return o.a.createElement("nav",{className:h.a.navbar},o.a.createElement("ul",{className:h.a.navItemList},o.a.createElement(c.b,{className:h.a.logoContainer,to:"/"},o.a.createElement("div",{className:h.a.logo},o.a.createElement("span",{className:h.a.logoCenter})),o.a.createElement("h2",{className:h.a.logoText},"Ha\xfcs")),t.map((function(e){return o.a.createElement(c.b,{to:"/".concat(e.url),className:m()(e.cta&&h.a.ctaLink,h.a.navItem)},e.name)}))))},d=a(17),v=a(23),p=a.n(v),g=a(3),f=a.n(g),E=function(e){var t=e.id,a=e.placeholder,r=Object(n.useState)(!1),i=Object(d.a)(r,2),s=i[0],l=i[1],u=Object(n.useState)(""),h=Object(d.a)(u,2),_=h[0],v=h[1];return Object(n.useEffect)((function(){l(!!_)}),[_]),o.a.createElement("div",{className:f.a.heroInputContainer},o.a.createElement("label",{className:m()(f.a.heroInputPlaceholder,s&&f.a.active),htmlFor:t},a),o.a.createElement("input",{id:t,className:m()(f.a.heroInput,s&&f.a.activeBorder),onFocus:function(){return l(!0)},onBlur:function(){return l(!!_)},onChange:function(e){var t=e.target.value;v(t),t&&l(!0)},type:"text",required:!0}),o.a.createElement(c.b,{to:"/haus/discover"},o.a.createElement("img",{className:m()(f.a.heroButton,f.a.search),src:p.a,height:25,alt:"search"})))},b=function(e){return o.a.createElement("div",{className:f.a.heroGrid},o.a.createElement("div",{className:f.a.hero},o.a.createElement("h1",{className:f.a.heroTitle},"Ha\xfcs"),o.a.createElement("h2",{className:f.a.heroSubtitle},"We'll help you find the perfect neighborhood.")),o.a.createElement(E,{placeholder:"Search for a city",id:"heroInput"}))},N=a(24),C=a.n(N),x=a(4),T=a.n(x),y=[{name:"Queen Anne",score:97,population:3500,schools:"A+"},{name:"West Queen Anne",score:95,population:4e3,schools:"A-"},{name:"South Lake Union",score:85,population:3750,schools:"A-"},{name:"Westlake",score:78,population:1500,schools:"B+"},{name:"Capitol Hill",score:75,population:2500,schools:"A+"}],I=function(){return o.a.createElement("div",{className:T.a.discoverListingsContainer},y.map((function(e){var t=e.name,a=e.score,n=e.population,r=e.schools;return o.a.createElement("div",{className:T.a.discoverListing},o.a.createElement("span",{className:T.a.listingTitle},t),o.a.createElement("div",{className:T.a.heuristicGrid},o.a.createElement("span",null,"Ha\xfcs Score:",o.a.createElement("span",{className:T.a.listingHeuristic},a)),o.a.createElement("span",null,"Population:",o.a.createElement("span",{className:T.a.listingHeuristic},n)),o.a.createElement("span",null,"Schools:",o.a.createElement("span",{className:T.a.listingHeuristic},r))))})))},L=function(){return o.a.createElement("div",{className:T.a.discoverGrid},o.a.createElement("div",{className:T.a.discoverContainer},o.a.createElement("h2",{className:T.a.discoverTitle},"Seattle"),o.a.createElement("img",{height:1e3,src:C.a,alt:"Map image"})),o.a.createElement(I,null))},H=a(25),S=a.n(H),w=a(26),B=a.n(w),k=a(13),G=a.n(k),W=function(){return o.a.createElement("footer",{className:G.a.footer},o.a.createElement("img",{height:350,src:S.a,style:{marginLeft:"auto",marginRight:"3rem"},alt:"Space Needle"}),o.a.createElement("div",{className:G.a.footerContainer},o.a.createElement("span",{className:G.a.footerTitle},"Ha\xfcs"),o.a.createElement("p",{className:G.a.footerText},"Your home's location is super important. There's no need to have tons of tabs open just to compare various listings and neighborhoods when you're trying to find your dream home. With Ha\xfcs, you'll be able to find the perfect neighborhood for your home \u2013 give it a try! Search up a city and we'll do the rest.")),o.a.createElement("img",{height:350,src:B.a,style:{marginLeft:"auto",marginRight:"3rem",border:"0 solid black"},alt:"Space Needle"}))},j=(a(37),[{name:"Home",url:"haus/home",cta:!1},{name:"Discover",url:"haus/discover",cta:!1},{name:"Login",url:"haus/login",cta:!0}]);var A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement(_,{routes:j}),o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/haus/discover",component:function(){return o.a.createElement(L,null)}}),o.a.createElement(s.a,{exact:!0,path:"/haus/login",component:function(){return o.a.createElement("h1",{style:{fontWeight:300,fontSize:"4rem",textAlign:"center"}},"Login & Register Page")}}),o.a.createElement(s.a,{path:"/",component:function(){return o.a.createElement(b,null)}}))),o.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[27,1,2]]]);
//# sourceMappingURL=main.6cc462bf.chunk.js.map