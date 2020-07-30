(this["webpackJsonpcomic-bot"]=this["webpackJsonpcomic-bot"]||[]).push([[0],{21:function(e,t,a){e.exports=a(50)},26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(18),r=a.n(i),c=(a(26),a(27),a(3)),s=a.n(c),u=a(20),l=a(8),m=a(5),d=a(6),h=function(){function e(t,a){var o=this;Object(m.a)(this,e),this.handleDonaldDuck=function(){var e=o.createChatBotMessage("Fantastic, I've got the following resources for you on Donald Duck:",{widget:"Donald Duck"});o.updateChatbotState(e)},this.handleMickeyMouse=function(){var e=o.createChatBotMessage("Fantastic, I've got the following resources for you on Mickey Mouse:",{widget:"Mickey Mouse"});o.updateChatbotState(e)},this.handleResources=function(){var e=o.createChatBotMessage("Fantastic, I've got the following resources for you on Resources:",{widget:"Resources"});o.updateChatbotState(e)},this.handleEmptyItems=function(){var e=o.createChatBotMessage("Sorry i got no data for that at the moment \ud83e\udd7a");o.updateChatbotState(e)},this.handleKomix=function(){var e=o.createChatBotMessage("Fantastic, I've got the following resources for you on Komix:",{widget:"Komix"});o.updateChatbotState(e)},this.createChatBotMessage=t,this.setState=a}return Object(d.a)(e,[{key:"greet",value:function(){var e=this.createChatBotMessage("Hi, friend \ud83d\ude04 Let me help you find your favourite comic");this.updateChatbotState(e)}},{key:"unknown",value:function(){var e=this.createChatBotMessage("Sorry I haven't learned this command yet! \ud83d\ude13 Please contact my master \ud83e\uddde");this.updateChatbotState(e)}},{key:"updateChatbotState",value:function(e){this.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{messages:[].concat(Object(u.a)(t.messages),[e])})}))}}]),e}(),f=function(){function e(t){Object(m.a)(this,e),this.actionProvider=t}return Object(d.a)(e,[{key:"parse",value:function(e){var t=e.toLowerCase();/hello|hi|\u03b3\u03b5\u03b9\u03b1|geia|\u03ba\u03b1\u03bb\u03b7\u03bc\u03b5\u03c1\u03b1|kalhmera|\u03ba\u03b1\u03bb\u03b7\u03c3\u03c0\u03b5\u03c1\u03b1|kalhspera|morning/i.test(t)?this.actionProvider.greet():/donald|duck|\u03bd\u03c4\u03bf\u03bd\u03b1\u03bb\u03bd\u03c4|\u03bd\u03c4\u03b1\u03ba/i.test(t)?this.actionProvider.handleDonaldDuck():/mickey|mouse|\u03bc\u03b9\u03ba\u03c5|\u03bc\u03b1\u03bf\u03c5\u03c2/i.test(t)?this.actionProvider.handleMickeyMouse():/komix|\u03ba\u03bf\u03bc\u03b9\u03be/i.test(t)?this.actionProvider.handleKomix():/various|\u03b4\u03b9\u03b1\u03c6\u03bf\u03c1\u03b1|diafora/i.test(t)?this.actionProvider.handleEmptyItems():this.actionProvider.unknown()}}]),e}(),g=(a(30),function(e){var t=[{text:"Donald Duck",handler:e.actionProvider.handleDonaldDuck,id:1},{text:"Micky Mouse",handler:e.actionProvider.handleMickeyMouse,id:2},{text:"Komix",handler:e.actionProvider.handleKomix,id:3},{text:"Various",handler:e.actionProvider.handleEmptyItems,id:4},{text:"Resources",handler:e.actionProvider.handleResources,id:5}].map((function(e){return n.a.createElement("button",{className:"Comic-option-button",key:e.id,onClick:e.handler},e.text)}));return n.a.createElement("div",{className:"Comic-options-container"},t)}),k=(a(31),function(e){var t=e.options.map((function(e){return n.a.createElement("li",{key:e.id,className:"link-list-item"},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"link-list-item-url"},e.text))}));return n.a.createElement("ul",{className:"link-list"},t)}),p=a(7),v=a(19),b=a.n(v),w=(a(49),function(e){var t=Object(o.useState)([]),a=Object(p.a)(t,2),i=a[0],r=a[1],c=Object(o.useState)(null),s=Object(p.a)(c,2),u=s[0],l=s[1],m=e.name;return Object(o.useEffect)((function(){b.a.get("https://comic-bot-fe2f1.firebaseio.com/".concat(m,".json")).then((function(e){r(e.data)})).catch((function(e){l("Woops something went wrong on our end! I'm brewing some coffee and calling the master to fix it.")}))}),[]),u?n.a.createElement("ul",{className:"link-list"}," ",n.a.createElement("li",{className:"link-list-item err"},u)):n.a.createElement("ul",{className:"link-list"},Object.keys(i).map((function(e,t){return n.a.createElement("li",{className:"link-list-item",key:e},n.a.createElement("a",{href:i[e],target:"_blank",rel:"noopener noreferrer",className:"link-list-item-url"},e))})))}),y={botName:"ComicBot",initialMessages:[Object(c.createChatBotMessage)("Hello I'm ComicBot \ud83e\uddd9 I'm here to help you find your favourite Disney comics \ud83d\udcda",{widget:"ComicOptions"})],customStyles:{botMessageBox:{backgroundColor:"#376B7E"},chatButton:{backgroundColor:"#376B7E"}},widgets:[{widgetName:"ComicOptions",widgetFunc:function(e){return n.a.createElement(g,e)}},{widgetName:"Donald Duck",widgetFunc:function(e){return n.a.createElement(w,e)},props:{name:"DonaldDuck"}},{widgetName:"Resources",widgetFunc:function(e){return n.a.createElement(k,e)},props:{options:[{text:"Facebook Fan Page",url:"https://www.facebook.com/groups/grcomicpdf/"},{text:"Smilefreeware",url:"http://users.sch.gr/vasanagno/comics.html"}]}},{widgetName:"Mickey Mouse",widgetFunc:function(e){return n.a.createElement(w,e)},props:{name:"MickeyMouse"}},{widgetName:"Komix",widgetFunc:function(e){return n.a.createElement(w,e)},props:{name:"Komix"}}]};var M=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(s.a,{config:y,actionProvider:h,messageParser:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.ca686440.chunk.js.map