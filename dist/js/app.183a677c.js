(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0410":function(t,e,a){t.exports=a.p+"img/Rainbow.1b355591.jpeg"},"0c3f":function(t,e,a){"use strict";a("7a31")},"0e50":function(t,e,a){t.exports=a.p+"img/flowers.b26e6306.jpeg"},"0fe3":function(t,e,a){"use strict";a("6727")},1771:function(t,e,a){var s={"./Field.jpeg":"9320","./Garden.jpeg":"99c5","./Glass.jpg":"a591","./Map.png":"2c76","./Rainbow.jpeg":"0410","./Rubber-boot-birdhouses.jpg":"5bf3","./TinCan.jpeg":"c2d8","./bag.jpeg":"6937","./boots.jpg":"2250","./cakePanSucculentGarden.jpg":"57da","./cardboard.webp":"836c","./dogTreatDispenser.jpg":"35c8","./download.png":"f6f5","./flowers.jpeg":"0e50","./foodWaste.jpg":"ddd9","./grocery bag.jpg":"c5f8","./home.jpeg":"d495","./homemadePaper.jpg":"a421","./logo.png":"cf05","./nycshopping.jpg":"ad0d","./plasticBottle.jpg":"d534","./upcycleData":"7ca4","./upcycleData.json":"7ca4","./worktable.jpg":"2c39"};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}o.keys=function(){return Object.keys(s)},o.resolve=n,t.exports=o,o.id="1771"},2250:function(t,e,a){t.exports=a.p+"img/boots.d887d1bd.jpg"},2470:function(t,e,a){},"2c39":function(t,e,a){t.exports=a.p+"img/worktable.d3add6d6.jpg"},"2c76":function(t,e,a){t.exports=a.p+"img/Map.ba1c0daa.png"},"311c":function(t,e,a){"use strict";a("690d")},"33eb":function(t,e,a){},"33f0":function(t,e,a){},"35c8":function(t,e,a){t.exports=a.p+"img/dogTreatDispenser.9f2cc80b.jpg"},"362e":function(t,e,a){},"3cb0":function(t,e,a){"use strict";a("b0b7")},"4ef4":function(t,e,a){"use strict";a("2470")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=a("8c4f"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("TopNav")],1),a("body",[a("router-view"),a("IdeaForm")],1),a("footer",[a("Footer")],1)])},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("router-link",{staticClass:"menuItem",attrs:{to:"./"}},[t._v("Home")]),a("router-link",{staticClass:"menuItem",attrs:{to:"./explore"}},[t._v("Explore")]),a("router-link",{staticClass:"menuItem",attrs:{to:"./resources"}},[t._v("Resources")]),a("router-link",{staticClass:"menuItem",attrs:{to:"./about"}},[t._v("About")]),a("router-link",{staticClass:"menuItem",attrs:{to:"./contact"}},[t._v("Contact")])],1)},c=[],l={name:"TopNav"},u=l,p=(a("4ef4"),a("2877")),d=Object(p["a"])(u,r,c,!1,null,"fb301472",null),m=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[t._m(0),a("section",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email",attrs:{type:"text",placeholder:"Email..."},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("br"),a("section",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.idea,expression:"idea"}],staticClass:"idea",attrs:{type:"text",placeholder:"Upcycle Idea..."},domProps:{value:t.idea},on:{input:function(e){e.target.composing||(t.idea=e.target.value)}}})]),a("br"),a("section",[a("button",{staticClass:"submit",on:{click:t.submit}},[t._v("Submit")])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("p",{staticClass:"name"},[t._v("Got an Upcycle Idea to Share?")]),a("p",{staticClass:"text"},[t._v("Write your email and a message about your idea below")])])}],b={name:"IdeaForm",methods:{submit:function(){alert("Thank you for your upcycle idea!")}}},g=b,v=(a("af36"),Object(p["a"])(g,f,h,!1,null,"82d7e5c8",null)),y=v.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"name"},[t._v("A Second Life")]),a("nav",[a("router-link",{staticClass:"menuItem",attrs:{to:"./"}},[t._v("Home")]),a("router-link",{staticClass:"menuItem",attrs:{to:"./explore"}},[t._v("Explore")]),a("router-link",{staticClass:"menuItem",attrs:{to:"./resources"}},[t._v("Resources")]),a("router-link",{staticClass:"menuItem",attrs:{to:"./about"}},[t._v("About")]),a("router-link",{staticClass:"menuItem",attrs:{to:"./contact"}},[t._v("Contact")])],1)])},_=[],w={name:"Footer"},N=w,j=(a("cb66"),Object(p["a"])(N,C,_,!1,null,"3e8767ed",null)),x=j.exports,k={name:"App",components:{TopNav:m,IdeaForm:y,Footer:x}},A=k,E=(a("034f"),Object(p["a"])(A,n,i,!1,null,null,null)),P=E.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._m(1),s("body",[s("section",[t._m(2),s("div",{staticClass:"section-right-img"},[s("img",{staticClass:"imgShadow",attrs:{src:a("0e50"),width:"500",height:"500"}})])]),s("section",[t._m(3),s("div",{staticClass:"section-left-img"},[s("img",{staticClass:"imgShadow",attrs:{src:a("d495"),width:"500",height:"600"}})])]),s("section",[t._m(4),s("div",{staticClass:"section-right-img"},[s("img",{staticClass:"imgShadow",attrs:{src:a("6937"),width:"500",height:"500"}})])])])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background"},[a("div",{staticClass:"banner-content"},[t._v(" A "),a("br"),t._v(" Second "),a("br"),t._v(" Life ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"woodUpcycleHeading"},[a("p",[t._v("| About Us |")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-left-text"},[a("h1",{staticClass:"name"},[t._v("Our Mission")]),a("p",{staticClass:"text"},[t._v("Our Mission is to educate, inspire, and encourage upcycling in order to take steps towards a more sustainable life, and a cleaner planet Earth.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-right-text"},[a("h1",{staticClass:"name"},[t._v("The Start")]),a("p",{staticClass:"text"},[t._v("A Second Life upcycle website was dreamed up by Keili a student from Western Washington University. With the help of group mates Ashima, Beryn and Katie, A Seconf Life was brought to life, sharing ideas of upcycles and helping to educate the public on the importance of sustainability.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-left-text"},[a("h1",{staticClass:"name"},[t._v("The Future")]),a("p",{staticClass:"text"},[t._v("Looking at the future A Second Life would like to continue to help decrease the environmental impact of human waste on the planet and continue in the effort to spread the positive message of how upcycling can help communities and the planet."),a("br"),t._v(" We also intend to educate people of better recycling and giving them information of local companies and donation center to help someone with their used items. ")])])}],O={name:"About"},S=O,B=(a("fda1"),Object(p["a"])(S,T,D,!1,null,"64072d00",null)),U=B.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"background"},[a("div",{staticClass:"banner-content"},[t._v(" A "),a("br"),t._v(" Second "),a("br"),t._v(" Life ")])]),a("div",{staticClass:"resourcesHeading"},[a("p",[t._v("| Resources |")])]),a("body",[a("section",[a("div",{staticClass:"heading"},[a("h1",[t._v(" Organizations That Take Used "),a("br"),t._v(" Items For Donation ")]),a("div"),a("p",{staticClass:"p"},[t._v("When you have no use for an item that could potentially be upcycled or reused, don't throw it away! Consider donating the items to an organization that can reuse the item. By donating an item you are not only helping to contribute to less waste but also will be benefitting a community in need of donations. ")])]),a("div",{staticClass:"resourceBox"},[a("ul",{staticClass:"ul"},[a("a",{attrs:{href:"https://www.habitat.org/restores/donate-goods",target:"_blank"}},[t._v("Habitat for Humanity")]),a("br"),a("a",{attrs:{href:"https://www.salvationarmyusa.org/usn/ways-to-give/",target:"_blank"}},[t._v("The Salvation Army")]),a("br"),a("a",{attrs:{href:"https://www.goodwill.org/donate/donate-stuff/",target:"_blank"}},[t._v("Goodwill")]),a("br"),a("a",{attrs:{href:"https://furniturebanks.org/",target:"_blank"}},[t._v("The Furniture Bank Network")]),a("br"),a("a",{attrs:{href:"https://pickupplease.org/",target:"_blank"}},[t._v(" Pickup Please")])])])]),a("section",[a("div",{staticClass:"heading"},[a("h1",[t._v(" Companies Involved in "),a("br"),t._v(" Sustainable Recycling Practices ")]),a("div"),a("p",{staticClass:"p"},[t._v("Some companies are incolved in the sustainable practice of returning used containers purchased by customers back to their company. Other companies are involved in sustainable recycling practices making their procudts from recycled material. Here are some companies that are involved in these sustainable practices. ")])]),a("div",{staticClass:"resourceBox"},[a("ul",{staticClass:"ul"},[a("a",{attrs:{href:"https://fdmarketco.com/",target:"_blank"}},[t._v("FD Market")]),a("br"),a("a",{attrs:{href:"https://www.terracycle.com/en-US/",target:"_blank"}},[t._v("TerraCycle x Garnier")]),a("br"),a("a",{attrs:{href:"https://www.greentoys.com/",target:"_blank"}},[t._v("Green Toys")]),a("br"),a("a",{attrs:{href:"https://www.allbirds.com/",target:"_blank"}},[t._v("All Birds")]),a("br"),a("a",{attrs:{href:"https://uk.lush.com/article/our-environmental-policy",target:"_blank"}},[t._v("Lush")])])])])])])}],G={name:"About"},L=G,H=(a("d818"),Object(p["a"])(L,I,W,!1,null,"eb0ef856",null)),F=H.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("UpcycleSearch"),t._m(0),s("Carousel"),s("div",{staticClass:"newUserSection"},[s("img",{staticClass:"boots",attrs:{src:a("2250"),width:"400",height:"500"}}),s("div",{staticClass:"name"},[t._v("New to Upcycling?")]),s("p",{staticClass:"text"},[t._v("Explore our mission and community. A Second Life is dedicated to reducing waste through simple upcycle projects. What's an upcycle? Don't know where to start? Learn more by clicking below.")]),s("router-link",{staticClass:"NewUser",attrs:{to:"./newuserguide"}},[t._v("New User Guide")])],1)],1)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"UpofWeek"},[t._v("Upcycles of the Week")])])}],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"background"},[t._m(0),a("div",{staticClass:"rightBox"},[t._m(1),a("router-link",{staticClass:"boxButton",attrs:{to:"./explore"}},[t._v(" Start Creating ")])],1)])])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner-content"},[t._v(" A "),a("br"),t._v(" Second "),a("br"),t._v(" Life ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropDown",attrs:{id:"dropdownlist"}},[a("h1",{staticClass:"boxHeading"},[t._v("Know what you want to upcycle?")])])}],J={name:"UpcycleSearch"},R=J,V=(a("0c3f"),Object(p["a"])(R,M,z,!1,null,"0518fa8c",null)),Y=V.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel"},[s("button",{staticClass:"next",on:{click:t.next}},[t._v("Next ▶")]),s("div",{staticClass:"grid-container"},[s("div",{staticClass:"slide",attrs:{id:"left"}},[t.leftUpcycle?s("router-link",{staticClass:"link",attrs:{to:"./"+t.leftUpcycle.upcycleName}},[s("div",[t._v("Item: "+t._s(t.leftUpcycle.itemName)),s("br"),t._v("Upcycle: "+t._s(t.leftUpcycle.upcycleName))]),s("img",{attrs:{src:a("1771")("./"+t.leftUpcycle.imageName)}})]):t._e()],1),s("div",{staticClass:"slide",attrs:{id:"middle"}},[s("router-link",{staticClass:"link",attrs:{to:"./"+t.midUpcycle.upcycleName}},[s("div",[t._v("Item: "+t._s(t.midUpcycle.itemName)),s("br"),t._v("Upcycle: "+t._s(t.midUpcycle.upcycleName))]),s("img",{attrs:{src:a("1771")("./"+t.midUpcycle.imageName)}})])],1),s("div",{staticClass:"slide",attrs:{id:"right"}},[t.rightUpcycle?s("router-link",{staticClass:"link",attrs:{to:"./"+t.rightUpcycle.upcycleName}},[s("div",[t._v("Item: "+t._s(t.rightUpcycle.itemName)),s("br"),t._v("Upcycle: "+t._s(t.rightUpcycle.upcycleName))]),s("img",{attrs:{src:a("1771")("./"+t.rightUpcycle.imageName)}})]):t._e()],1)]),s("button",{staticClass:"prev",on:{click:t.prev}},[t._v("◀ Prev")])])},q=[],Z=(a("d3b7"),{data:function(){return{i:0,leftUpcycle:null,midUpcycle:{},rightUpcycle:null,upcycles:[]}},methods:{next:function(){this.i!=this.upcycles.length-1&&(this.i++,this.leftUpcycle=this.upcycles[this.i-1],this.midUpcycle=this.upcycles[this.i],this.i==this.upcycles.length-1?this.rightUpcycle=null:this.rightUpcycle=this.upcycles[this.i+1])},prev:function(){0!=this.i&&(this.i--,0==this.i?this.leftUpcycle=null:this.leftUpcycle=this.upcycles[this.i-1],this.midUpcycle=this.upcycles[this.i],this.rightUpcycle=this.upcycles[this.i+1])}},mounted:function(){var t=this;fetch("http://localhost:5000/upcycles").then((function(t){return t.json()})).then((function(e){t.upcycles=e,t.i=1,t.leftUpcycle=t.upcycles[t.i-1],t.midUpcycle=t.upcycles[t.i],t.rightUpcycle=t.upcycles[t.i+1]})).catch((function(t){return console.log(t.message)}))}}),$=Z,tt=(a("a5e6"),Object(p["a"])($,K,q,!1,null,"4abee731",null)),et=tt.exports,at={name:"Homepage",components:{UpcycleSearch:Y,Carousel:et}},st=at,ot=(a("b3ca"),Object(p["a"])(st,Q,X,!1,null,"20f96088",null)),nt=ot.exports,it=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v(" TESTING NEW USER GUIDE ")])])}],ct={name:"NewUserGuide"},lt=ct,ut=(a("8352"),Object(p["a"])(lt,it,rt,!1,null,"4375a2db",null)),pt=ut.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._m(1),s("body",[s("img",{staticClass:"map",attrs:{src:a("2c76"),width:"600",height:"400"}}),t._m(2)])])},mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"name"},[t._v("A "),a("br"),t._v(" Second "),a("br"),t._v(" Life")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"subject"},[t._v("Contact Us")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[t._v("Find us in Bellingham, Washington. "),a("br"),t._v(" Email: ASecondLife@gmail.com")])}],ft={name:"Contact"},ht=ft,bt=(a("0fe3"),Object(p["a"])(ht,dt,mt,!1,null,"20ba7bc7",null)),gt=bt.exports,vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._m(1),s("div",{staticClass:"categoryWrapper"},[s("br"),s("div",{staticClass:"Pcontainer"},[s("div",{staticClass:"title"},[t._v("Plastic")]),s("div",{staticClass:"text"},[t._v("Plastic doesn't need to be thrown away. Let's reuse plastic in a new sustainable way!")]),s("img",{staticClass:"plastic",attrs:{src:a("d534"),width:"600",height:"400"}}),s("div",{staticClass:"dropdown"},[s("PlasticDD",{attrs:{data:t.upcycles.filter((function(t){return"Plastic"==t.category}))}})],1)]),s("br"),s("div",{staticClass:"Tcontainer"},[s("div",{staticClass:"title"},[t._v("Tin")]),s("div",{staticClass:"text"},[t._v("Have an old tin can laying around? Let's turn it into an awesome upcycle!")]),s("img",{staticClass:"tinCan",attrs:{src:a("c2d8"),width:"600",height:"400"}}),s("div",{staticClass:"dropdown"},[s("TinDD",{attrs:{data:t.upcycles.filter((function(t){return"Tin"==t.category}))}})],1)]),s("br"),s("div",{staticClass:"Fcontainer"},[s("div",{staticClass:"title"},[t._v("Food Waste")]),s("div",{staticClass:"text"},[t._v("Not only can food waste be used in compost, it can also be reused in other ways! Learn more here.")]),s("img",{staticClass:"foodWaste",attrs:{src:a("ddd9"),width:"600",height:"400"}}),s("div",{staticClass:"dropdown"},[s("FoodDD",{attrs:{data:t.upcycles.filter((function(t){return"Food"==t.category}))}})],1)]),s("br"),s("div",{staticClass:"Gcontainer"},[s("div",{staticClass:"title"},[t._v("Glass")]),s("div",{staticClass:"text"},[t._v("Buy some pasta sauce lately? Lets reuse the jar!")]),s("img",{staticClass:"glass",attrs:{src:a("a591"),width:"600",height:"400"}}),s("div",{staticClass:"dropdown"},[s("GlassDD",{attrs:{data:t.upcycles.filter((function(t){return"Glass"==t.category}))}})],1)]),s("br"),s("div",{staticClass:"Ccontainer"},[s("div",{staticClass:"title"},[t._v("Cardboard")]),s("div",{staticClass:"text"},[t._v("Don't throw out those boxes after moving! Here's some ideas to make the most of your cardboard")]),s("img",{staticClass:"cardboard",attrs:{src:a("836c"),width:"600",height:"400"}}),s("div",{staticClass:"dropdown"},[s("CardboardDD",{attrs:{data:t.upcycles.filter((function(t){return"Cardboard"==t.category}))}})],1)]),s("br")])])},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"name"},[t._v("A "),a("br"),t._v(" Second "),a("br"),t._v(" Life")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"subject"},[t._v("Explore Upcycles by Material")])])}],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"upcycles"},[a("ejs-dropdownlist",{staticClass:"dropdown",attrs:{dataSource:t.data,fields:t.fields,placeholder:"Select a plastic upcycle",change:t.enableCreateButton},model:{value:t.routeName,callback:function(e){t.routeName=e},expression:"routeName"}}),t.var1?a("router-link",{staticClass:"linkButton",attrs:{to:"./"+t.routeName}},[t._v("Create")]):t._e()],1)])},_t=[],wt=a("eda0");s["a"].use(wt["a"]);var Nt=s["a"].extend({name:"PlasticDD",props:{data:[]},data:function(){return{fields:{text:"upcycleName",value:"upcycleName"},routeName:null,var1:!1}},methods:{enableCreateButton:function(){this.var1=!0}}}),jt=Nt,xt=(a("dae5"),Object(p["a"])(jt,Ct,_t,!1,null,null,null)),kt=xt.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"upcycles"},[a("ejs-dropdownlist",{staticClass:"dropdown",attrs:{dataSource:t.data,fields:t.fields,placeholder:"Select a tin upcycle",change:t.enableCreateButton},model:{value:t.routeName,callback:function(e){t.routeName=e},expression:"routeName"}}),t.var1?a("router-link",{staticClass:"linkButton",attrs:{to:"./"+t.routeName}},[t._v("Create")]):t._e()],1)])},Et=[];s["a"].use(wt["a"]);var Pt=s["a"].extend({name:"TinDD",props:{data:[]},data:function(){return{fields:{text:"upcycleName",value:"upcycleName"},routeName:null,var1:!1}},methods:{enableCreateButton:function(){this.var1=!0}}}),Tt=Pt,Dt=(a("cf92"),Object(p["a"])(Tt,At,Et,!1,null,null,null)),Ot=Dt.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"upcycles"},[a("ejs-dropdownlist",{staticClass:"dropdown",attrs:{dataSource:t.data,fields:t.fields,placeholder:"Select a food upcycle",change:t.enableCreateButton},model:{value:t.routeName,callback:function(e){t.routeName=e},expression:"routeName"}}),t.var1?a("router-link",{staticClass:"linkButton",attrs:{to:"./"+t.routeName}},[t._v("Create")]):t._e()],1)])},Bt=[];s["a"].use(wt["a"]);var Ut=s["a"].extend({name:"FoodDD",props:{data:[]},data:function(){return{fields:{text:"upcycleName",value:"upcycleName"},routeName:null,var1:!1}},methods:{enableCreateButton:function(){this.var1=!0}}}),It=Ut,Wt=(a("b1a7"),Object(p["a"])(It,St,Bt,!1,null,null,null)),Gt=Wt.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"upcycles"},[a("ejs-dropdownlist",{staticClass:"dropdown",attrs:{dataSource:t.data,fields:t.fields,placeholder:"Select a glass upcycle",change:t.enableCreateButton},model:{value:t.routeName,callback:function(e){t.routeName=e},expression:"routeName"}}),t.var1?a("router-link",{staticClass:"linkButton",attrs:{to:"./"+t.routeName}},[t._v("Create")]):t._e()],1)])},Ht=[];s["a"].use(wt["a"]);var Ft=s["a"].extend({name:"GlassDD",props:{data:[]},data:function(){return{fields:{text:"upcycleName",value:"upcycleName"},routeName:null,var1:!1}},methods:{enableCreateButton:function(){this.var1=!0}}}),Qt=Ft,Xt=(a("3cb0"),Object(p["a"])(Qt,Lt,Ht,!1,null,null,null)),Mt=Xt.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"upcycles"},[a("ejs-dropdownlist",{staticClass:"dropdown",attrs:{dataSource:t.data,fields:t.fields,placeholder:"Select a cardboard upcycle",change:t.enableCreateButton},model:{value:t.routeName,callback:function(e){t.routeName=e},expression:"routeName"}}),t.var1?a("router-link",{staticClass:"linkButton",attrs:{to:"./"+t.routeName}},[t._v("Create")]):t._e()],1)])},Jt=[];s["a"].use(wt["a"]);var Rt=s["a"].extend({name:"CardboardDD",props:{data:[]},data:function(){return{fields:{text:"upcycleName",value:"upcycleName"},routeName:null,var1:!1}},methods:{enableCreateButton:function(){this.var1=!0}}}),Vt=Rt,Yt=(a("76b0"),Object(p["a"])(Vt,zt,Jt,!1,null,null,null)),Kt=Yt.exports,qt={name:"Explore",components:{PlasticDD:kt,TinDD:Ot,FoodDD:Gt,GlassDD:Mt,CardboardDD:Kt},data:function(){return{upcycles:[]}},mounted:function(){var t=this;fetch("http://localhost:5000/upcycles").then((function(t){return t.json()})).then((function(e){t.upcycles=e})).catch((function(t){return console.log(t.message)}))}},Zt=qt,$t=(a("dbf6"),Object(p["a"])(Zt,vt,yt,!1,null,"75f703ec",null)),te=$t.exports,ee=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("section",{staticClass:"title"},[t._v(" "+t._s(t.$route.params.name)+" ")]),s("section",{staticClass:"info"},[s("img",{attrs:{src:a("1771")("./"+t.upcycle.imageName)}}),s("info",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("Category: ")]),t._v(t._s(t.upcycle.category)+" "),s("br"),s("br"),s("span",{staticStyle:{"font-weight":"bold"}},[t._v("Item: ")]),t._v(t._s(t.upcycle.itemName)+" "),s("br"),s("br"),s("span",{staticStyle:{"font-weight":"bold"}},[t._v("Environmental Impact: ")]),t._v(t._s(t.upcycle.environmentalImpact)+" "),s("br"),s("br"),s("span",{staticStyle:{"font-weight":"bold"}},[t._v("Supplies: ")]),t._v(t._s(t.upcycle.supplies)+" ")])],1),s("section",{staticClass:"instructions"},[s("br"),s("br"),s("span",{staticStyle:{"font-weight":"bold"}},[t._v("Instructions: ")]),s("br"),s("br"),t._v(" "+t._s(t.upcycle.instructions)+" ")])])},ae=[],se=(a("4160"),a("b0c0"),a("159b"),{name:"UpcycleTemplate",data:function(){return{upcycle:{}}},mounted:function(){var t=this;fetch("http://localhost:5000/upcycles").then((function(t){return t.json()})).then((function(e){e.forEach((function(e){e.upcycleName==t.$route.params.name&&(t.upcycle=e)}))})).catch((function(t){return console.log(t.message)}))}}),oe=se,ne=(a("311c"),Object(p["a"])(oe,ee,ae,!1,null,"c94ae44e",null)),ie=ne.exports;s["a"].use(o["a"]);var re=[{path:"/",component:nt},{path:"/about",component:U},{path:"/resources",component:F},{path:"/newuserguide",component:pt},{path:"/contact",component:gt},{path:"/explore",component:te},{path:"/:name",component:ie}],ce=new o["a"]({mode:"history",routes:re});s["a"].config.productionTip=!1,new s["a"]({router:ce,render:function(t){return t(P)}}).$mount("#app")},"57da":function(t,e,a){t.exports=a.p+"img/cakePanSucculentGarden.20542d8c.jpg"},"5bf3":function(t,e,a){t.exports=a.p+"img/Rubber-boot-birdhouses.8fab9b51.jpg"},"5c92":function(t,e,a){},6727:function(t,e,a){},"690d":function(t,e,a){},6937:function(t,e,a){t.exports=a.p+"img/bag.96a77488.jpeg"},"76b0":function(t,e,a){"use strict";a("9ca9")},"7a31":function(t,e,a){},"7ca4":function(t){t.exports=JSON.parse('{"upcycles":[{"upcycleName":"Dog Treat Dispenser","category":"Plastic","itemName":"Water Bottle","imageName":"dogTreatDispenser.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Mini-Trashbag Liner","category":"Plastic","itemName":"Grocery Bag","imageName":"boots.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Storage","category":"Plastic","itemName":"Grocery Bag","imageName":"grocery bag.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Emergency Sick Bag","category":"Plastic","itemName":"Grocery Bag","imageName":"boots.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Shoe Travel","category":"Plastic","itemName":"Grocery Bag","imageName":"boots.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Pet Waste Cleanup","category":"Plastic","itemName":"Grocery Bag","imageName":"boots.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Yarn for Crocheting","category":"Plastic","itemName":"Grocery Bag","imageName":"boots.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Mini Survival Kit","category":"Plastic","itemName":"Prescription Bottle","imageName":"boots.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Plastic Grocery Bag Storage","category":"Plastic","itemName":"Clorox Wipes Container","imageName":"boots.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Mosaic Resin Tray","category":"Plastic","itemName":"CD/DVD","imageName":"boots.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Bag Seal","category":"Plastic","itemName":"Twist Ties","imageName":"boots.jpg","environmentalImpact":"Probably bad","supplies":"Twist ties and your bag of choice","instructions":"Simply twist tie around the end of the bag."},{"upcycleName":"Wire Organizer","category":"Plastic","itemName":"Twist Ties","imageName":"boots.jpg","environmentalImpact":"Probably bad","supplies":"Old rubber boot(s), potting soil, small outdoor plant","instructions":"Wash out the boots before filling with just enough potting soil to leave room for the roots of your plant of choice."},{"upcycleName":"Cake Pan Succulent Garden","category":"Tin","itemName":"Cake Pan","imageName":"cakePanSucculentGarden.jpg","environmentalImpact":"Probably bad","supplies":"Old tin cakepan and your favorite small succulent plants","instructions":"Fill cake pan with soil and plant succulents inside."}]}')},8352:function(t,e,a){"use strict";a("b72f")},"836c":function(t,e,a){t.exports=a.p+"img/cardboard.4267d3df.webp"},"85ec":function(t,e,a){},9259:function(t,e,a){},9320:function(t,e,a){t.exports=a.p+"img/Field.b5737008.jpeg"},9926:function(t,e,a){},"99c5":function(t,e,a){t.exports=a.p+"img/Garden.6f546452.jpeg"},"9ca9":function(t,e,a){},a3f3:function(t,e,a){},a421:function(t,e,a){t.exports=a.p+"img/homemadePaper.e9c8681e.jpg"},a591:function(t,e,a){t.exports=a.p+"img/Glass.f4c97b11.jpg"},a5e6:function(t,e,a){"use strict";a("33eb")},a7ca:function(t,e,a){},ad0d:function(t,e,a){t.exports=a.p+"img/nycshopping.f5461d1f.jpg"},af36:function(t,e,a){"use strict";a("a7ca")},b0b7:function(t,e,a){},b1a7:function(t,e,a){"use strict";a("9259")},b3ca:function(t,e,a){"use strict";a("a3f3")},b72f:function(t,e,a){},c2d8:function(t,e,a){t.exports=a.p+"img/TinCan.e73c1b70.jpeg"},c5f8:function(t,e,a){t.exports=a.p+"img/grocery bag.44dca540.jpg"},c70f:function(t,e,a){},cb66:function(t,e,a){"use strict";a("362e")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},cf92:function(t,e,a){"use strict";a("db12")},d495:function(t,e,a){t.exports=a.p+"img/home.638bf41c.jpeg"},d534:function(t,e,a){t.exports=a.p+"img/plasticBottle.89d3913c.jpg"},d818:function(t,e,a){"use strict";a("33f0")},dae5:function(t,e,a){"use strict";a("c70f")},db12:function(t,e,a){},dbf6:function(t,e,a){"use strict";a("5c92")},ddd9:function(t,e,a){t.exports=a.p+"img/foodWaste.350fad17.jpg"},f6f5:function(t,e){t.exports="data:image/png;base64,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"},fda1:function(t,e,a){"use strict";a("9926")}});
//# sourceMappingURL=app.183a677c.js.map