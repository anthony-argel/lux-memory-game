(this["webpackJsonpcard-memory"]=this["webpackJsonpcard-memory"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),o=c(5),s=c.n(o),i=c(3),d=c(2),r=(c(10),c(11),c(0));var h=function(e){return Object(r.jsxs)("div",{className:"card",onClick:function(){e.matched?e.notifyGameOver():e.notifyPickedNonmatch(e.cardId)},children:[Object(r.jsx)("img",{src:e.imgRef,onLoad:e.notifyImgLoaded}),Object(r.jsx)("p",{children:e.skinName})]})};var l=function(e){return Object(r.jsxs)("div",{id:"header",children:[Object(r.jsx)("h1",{children:"Lux Memory Card Game"}),Object(r.jsx)("h2",{children:"Try to click on all skins exactly once!"}),Object(r.jsxs)("div",{id:"scoreboard",children:[Object(r.jsxs)("p",{children:["Current: ",e.currentScore]}),Object(r.jsxs)("p",{children:["High: ",e.highScore]})]})]})};var g=function(e){return Object(r.jsx)("div",{id:"footer",children:Object(r.jsx)("a",{href:"https://github.com/anthony-argel",target:"_blank",children:"My Github"})})};var m=function(){var e=Object(n.useState)([0,1,2]),t=Object(d.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)([]),s=Object(d.a)(o,2),m=s[0],j=s[1],u=Object(n.useState)(!1),f=Object(d.a)(u,2),p=f[0],b=f[1],O=Object(n.useState)(0),x=Object(d.a)(O,2),y=x[0],v=x[1],L=Object(n.useState)(0),S=Object(d.a)(L,2),_=S[0],k=S[1],C=Object(n.useState)(0),E=Object(d.a)(C,2),G=E[0],I=E[1],N=["Classic","Sorcereress","Spellthief","Commando","Imperial","Steel Legion","Star Guardian","Elementalist","Lunar Empress","Pajama Guardian","Battle Academia","Dark Cosmic","Cosmic"],M=["https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_1.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_2.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_3.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_4.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_5.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_6.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_8.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_14.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_15.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_17.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_18.jpg"];function P(){k(0),p&&A()}function w(e){if(k(_+1),_+1===M.length)alert("you win!"),P();else{var t=m;t[e].matched=!0,j(t),J()}}function A(){for(var e=[],t=0;t<N.length;t++)e.push({imgRef:M[t],randomizeCard:J,skinName:N[t],matched:!1,cardId:t});j(e)}function B(){return Math.floor(Math.random()*M.length)}function J(){if(0!==m.length&&_!=M.length){for(var e=0,t=B();c.includes(t);)t=B();!0===m[t].matched&&e++;for(var n=B();n===t||c.includes(n);)n=B();!0===m[n].matched&&e++;for(var o=B();o===t||o===n||c.includes(o)||2===e&&m[o].matched;)o=B();a([t,n,o])}}function R(){v(y+1)}return Object(n.useEffect)((function(){A()}),[]),Object(n.useEffect)((function(){J()}),[m]),Object(n.useEffect)((function(){b(!1),v(0)}),[c]),Object(n.useEffect)((function(){3===y&&b(!0)}),[y]),Object(n.useEffect)((function(){_>G&&I(_)}),[_]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{currentScore:_,highScore:G}),Object(r.jsxs)("div",{id:"shown-cards",style:{display:p?"flex":"none"},children:[Object(r.jsx)(h,Object(i.a)(Object(i.a)({},m[c[0]]),{},{notifyImgLoaded:R,notifyPickedNonmatch:w,notifyGameOver:P})),Object(r.jsx)(h,Object(i.a)(Object(i.a)({},m[c[1]]),{},{notifyImgLoaded:R,notifyPickedNonmatch:w,notifyGameOver:P})),Object(r.jsx)(h,Object(i.a)(Object(i.a)({},m[c[2]]),{},{notifyImgLoaded:R,notifyPickedNonmatch:w,notifyGameOver:P}))]}),Object(r.jsx)("div",{id:"load-notification",style:{display:p?"none":"flex"},children:"Loading..."}),Object(r.jsx)(g,{})]})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.cb712bc1.chunk.js.map