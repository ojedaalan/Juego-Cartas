(this["webpackJsonpjuego-cartar-app"]=this["webpackJsonpjuego-cartar-app"]||[]).push([[0],{12:function(a,e,n){"use strict";n.r(e);var c=n(0),t=n(5),r=n.n(t),s=(n(4),n(2)),i=n(6),l=n.n(i),u=n.p+"static/media/question-mark-card.be8106da.png",p=n(1),o=function(a){var e=a.name,n=a.number,t=a.frontFace,r=a.flipCard,i=a.unflippedCards,o=a.disabledCards,d=Object(c.useState)(!1),b=Object(s.a)(d,2),j=b[0],m=b[1],f=Object(c.useState)(!0),O=Object(s.a)(f,2),g=O[0],h=O[1];Object(c.useEffect)((function(){i.includes(n)&&setTimeout((function(){return m(!1)}),700)}),[i]),Object(c.useEffect)((function(){o.includes(n)&&h(!1)}),[o]);var y=function(a){0!==r(e,n)&&m(!j)};return Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)(l.a,{isFlipped:j,children:[Object(p.jsx)("img",{className:"card-image",src:u,alt:"back-face",onClick:g?y:null}),Object(p.jsx)("img",{className:"card-image",src:t,alt:"front-face",onClick:g?y:null})]})})},d=n.p+"static/media/ansu-fati.7f958cab.jpg",b=n.p+"static/media/alphonso-davies.d01e6b66.jpg",j=n.p+"static/media/christian-pulisic.0a8e54d9.jpg",m=n.p+"static/media/erling-haaland.9c1aa1f0.jpg",f=n.p+"static/media/jordan-sancho.d29b6ca4.jpg",O=n.p+"static/media/kylian-mbappe.937f333d.jpg",g=[{src:d,player:"Ansu Fati"},{src:d,player:"Ansu Fati"},{src:b,player:"Alphonso Davies"},{src:b,player:"Alphonso Davies"},{src:j,player:"Christian Pulisic"},{src:j,player:"Christian Pulisic"},{src:m,player:"Erling Haaland"},{src:m,player:"Erling Haaland"},{src:f,player:"Jordan Sancho"},{src:f,player:"Jordan Sancho"},{src:O,player:"Kylian Mbappe"},{src:O,player:"Kylian Mbappe"}],h=function(){var a=Object(c.useState)([]),e=Object(s.a)(a,2),n=e[0],t=e[1],r=Object(c.useState)({}),i=Object(s.a)(r,2),l=i[0],u=i[1],d=Object(c.useState)({}),b=Object(s.a)(d,2),j=b[0],m=b[1],f=Object(c.useState)([]),O=Object(s.a)(f,2),h=O[0],y=O[1],v=Object(c.useState)([]),C=Object(s.a)(v,2),S=C[0],x=C[1];Object(c.useEffect)((function(){!function(a){for(var e=a.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),c=a[e];a[e]=a[n],a[n]=c}}(g),t(g)}),[]),Object(c.useEffect)((function(){E()}),[j]);var k=function(a,e){return l.name===a&&l.number===a?0:(l.name?j.name||(m({name:a,number:e}),console.log(j)):(u({name:a,number:e}),console.log(l)),1)},E=function(){l.name&&j.name&&(l.name===j.name?A():F())},A=function(){x([l.number,j.number]),N()},F=function(){y([l.number,j.number]),N()},N=function(){u({}),m({})};return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("div",{className:"card-container",children:n.map((function(a,e){return Object(p.jsx)(o,{name:a.player,number:e,frontFace:a.src,flipCard:k,unflippedCards:h,disabledCards:S})}))})})};r.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))},4:function(a,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.e08c4b3b.chunk.js.map