(this["webpackJsonpproject-bg"]=this["webpackJsonpproject-bg"]||[]).push([[0],[,,,,,,,,,,function(e,a,n){},,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(1),c=n(4),i=n.n(c),o=n(2),s=(n(10),n(0)),l=function(e){e.gamePhase;return Object(s.jsx)("div",{id:"bg",children:Object(s.jsx)("div",{className:"noise"})})};l.defaultProps={gamePhase:null};var r=l,u=(n(12),function(e){var a=e.text,n=e.icon,t=e.onClick;return Object(s.jsxs)("button",{className:"simple-button",type:"button",onClick:t,children:[n&&Object(s.jsx)("span",{className:"material-icons-round",children:n}),a&&a]})});u.defaultProps={text:null,icon:null,onClick:function(){}};var d=u,j="menu",b="lobby_pregame",m="region_roulette",p="game_phase",O="game_data",h=[{id:1,name:"Abruzzo",populations:1322247},{id:2,name:"Basilicata",populations:570365},{id:3,name:"Calabria",populations:1965128},{id:4,name:"Campania",populations:5839084},{id:5,name:"Emilia-Romagna",populations:4448841},{id:6,name:"Friuli-Venezia Giulia",populations:1217872},{id:7,name:"Lazio",populations:5898124},{id:8,name:"Liguria",populations:1565307},{id:9,name:"Lombardia",populations:10018806},{id:10,name:"Marche",populations:1538055},{id:11,name:"Molise",populations:310449},{id:12,name:"Piemonte",populations:4392526},{id:13,name:"Puglia",populations:4063888},{id:14,name:"Sardegna",populations:1653135},{id:15,name:"Sicilia",populations:5056641},{id:16,name:"Toscana",populations:3742437},{id:17,name:"Trentino-Alto Adige",populations:1062860},{id:18,name:"Umbria",populations:888908},{id:19,name:"Valle d'Aosta",populations:126883},{id:20,name:"Veneto",populations:4907529}],f=(n(13),function(e){var a=e.changePhase;return Object(s.jsx)("div",{id:"menu",children:Object(s.jsx)(d,{text:"Start campaign",icon:"play_arrow",onClick:function(){return a(b)}})})});f.defaultProps={};var x=f,g=(n(14),function(e){var a=e.changePhase,n=e.changeGameData,c=Object(t.useCallback)((function(){n({regions_played:[]}),a(m)}),[]);return Object(s.jsxs)("div",{id:"pregame",children:[Object(s.jsxs)("div",{className:"player blue",children:[Object(s.jsx)("span",{className:"icon material-icons-round",children:"face"}),Object(s.jsx)("span",{children:"Player blue (you)"})]}),Object(s.jsxs)("div",{className:"player red",children:[Object(s.jsx)("span",{className:"icon material-icons-outlined",children:"smart_toy"}),Object(s.jsx)("span",{children:"Player red (bot)"})]}),Object(s.jsxs)("div",{className:"player green",children:[Object(s.jsx)("span",{className:"icon material-icons-outlined",children:"smart_toy"}),Object(s.jsx)("span",{children:"Player green (bot)"})]}),Object(s.jsxs)("div",{className:"player yellow",children:[Object(s.jsx)("span",{className:"icon material-icons-outlined",children:"smart_toy"}),Object(s.jsx)("span",{children:"Player yellow (bot)"})]}),Object(s.jsx)(d,{text:"Back",icon:"arrow_back",onClick:function(){return a(j)}}),Object(s.jsx)(d,{text:"Start",icon:"play_arrow",onClick:c})]})});g.defaultProps={};var v=g,y=(n(15),function(e){var a=e.changePhase,n=e.gameData,c=(e.changeGameData,Object(t.useMemo)((function(){var e=n.regions_played.map((function(e){return e.id})),a=Object.keys(h).map((function(a){return e.includes(h[a].id)?null:h[a].id})).filter((function(e){return e})),t=a[Math.floor(Math.random()*a.length)];return h.filter((function(e){return e.id===t}))[0]}),[n]));return Object(s.jsxs)("div",{id:"region-roulette",children:[Object(s.jsxs)("div",{className:"choosen-region",children:[Object(s.jsx)("label",{children:"Name:"}),Object(s.jsx)("span",{children:c.name}),Object(s.jsx)("label",{children:"Populations:"}),Object(s.jsx)("span",{children:c.populations.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"'")})]}),Object(s.jsx)(d,{text:"Continue",icon:"play_arrow",onClick:function(){return a(m)}})]})});y.defaultProps={};var P=y,k=n(5),C=(n(16),function(e){Object(k.a)(e);var a=Object(t.useState)(!1),n=Object(o.a)(a,2),c=n[0],i=n[1],l=Object(t.useState)(!1),r=Object(o.a)(l,2),u=r[0],d=r[1],j=Object(t.useState)(!1),b=Object(o.a)(j,2),m=b[0],p=b[1],O=Object(t.useState)(0),h=Object(o.a)(O,2),f=h[0],x=h[1],g=Object(t.useState)(0),v=Object(o.a)(g,2),y=v[0],P=v[1],C=Object(t.useMemo)((function(){return[c?"hidden":null,u?"down":null,m?"up":null].filter((function(e){return!!e}))}),[c,u,m]),N=Object(t.useCallback)((function(e){var a=e||window.event;x(a.x),P(a.y)}),[]),S=Object(t.useCallback)((function(){return i(!1)}),[]),w=Object(t.useCallback)((function(){p(!1),i(!0)}),[]),_=Object(t.useCallback)((function(){p(!1),d(!0)}),[]),D=Object(t.useCallback)((function(){d(!1),p(!0)}),[]),G=Object(t.useCallback)((function(e){return e.preventDefault(),!1}),[]);return Object(t.useEffect)((function(){document.onmousemove=N,document.onmouseenter=S,document.onmouseleave=w,document.onmousedown=_,document.onmouseup=D,document.oncontextmenu=G})),Object(s.jsxs)("div",{id:"cursor",className:C,style:{transform:"translate("+f+"px, "+y+"px)"},children:[Object(s.jsx)("div",{className:"cursor"}),Object(s.jsx)("div",{className:"text",children:"Wtf is this cursor?"})]})});C.defaultProps={};var N=C,S=(n(17),function(){var e=Object(t.useState)(localStorage.getItem(p)),a=Object(o.a)(e,2),n=a[0],c=a[1],i=Object(t.useState)(JSON.parse(localStorage.getItem(O))),l=Object(o.a)(i,2),u=l[0],d=l[1],h=Object(t.useCallback)((function(e){localStorage.setItem(p,e),c(e)}),[]),f=Object(t.useCallback)((function(e){console.log({newGameData:e}),localStorage.setItem(O,JSON.stringify(e)),d(e)}),[]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(r,{gamePhase:n}),(null===n||n===j)&&Object(s.jsx)(x,{changePhase:h}),n===b&&Object(s.jsx)(v,{changePhase:h,changeGameData:f}),n===m&&Object(s.jsx)(P,{changePhase:h,gameData:u,changeGameData:f}),Object(s.jsx)(N,{})]})});i.a.render(Object(s.jsx)(S,{}),document.getElementById("app"))}],[[18,1,2]]]);
//# sourceMappingURL=main.dd411348.chunk.js.map