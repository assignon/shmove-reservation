(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);v&&v(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i={app:0},o=[];function s(t){return c.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"a74c1e50"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="static/css/"+({about:"about"}[t]||t)+"."+{about:"6cafca47"}[t]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===i))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===n||d===i)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],v.parentNode.removeChild(v),a(o)},v.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(v);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}i[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var v=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"073a":function(t,e,a){},1453:function(t,e,a){},3220:function(t,e,a){"use strict";a("dd9a")},"39c2":function(t,e,a){"use strict";a("aa3f")},"499f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"fill-height"},[a("v-col",[a("v-sheet",{attrs:{height:"64"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2","aria-label":"Navigeer naar vandaag"},on:{click:t.setToday}},[t._v(" Today ")]),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2","aria-label":"Vorige week"},on:{click:t.prev}},[a("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-left ")])],1),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2","aria-label":"Volgende week"},on:{click:t.next}},[a("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-right ")])],1),t.$refs.calendar?a("v-toolbar-title",[t._v(" "+t._s(t.$refs.calendar.title)+" ")]):t._e(),a("v-spacer")],1)],1),t.appointmentsLoaded?t._e():a("div",{staticClass:"loader"},[a("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}}),a("p",{staticClass:"mt-5",staticStyle:{color:"#895638"}},[t._v("Vrije plaatsen worden geladen")])],1),a("v-sheet",[a("v-calendar",{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,type:t.type,weekdays:t.weekdays,"first-interval":t.firstinterval,"interval-count":t.intervalcount,"interval-format":t.intervalFormat,locale:t.locale},on:{"click:event":t.bevestigAfspraak,change:t.updateRange},scopedSlots:t._u([{key:"day-label-header",fn:function(e){var n=e.date,r=e.day,i=e.present,o=e.past,s=e.weekday;return[o?a("v-avatar",{attrs:{color:"white"}},[t._v(t._s(r))]):i?a("v-btn",{attrs:{fab:"",depressed:"",color:"primary","aria-label":t.dateToString(n),href:t.returnID(s)}},[t._v(t._s(r))]):a("v-btn",{attrs:{fab:"",depressed:"",color:"white","aria-label":t.dateToString(n),href:t.returnID(s)}},[t._v(t._s(r)+" ")])]}},{key:"event",fn:function(e){var n=e.event,r=e.eventParsed;return[a("p",{staticClass:"event-text"},[t._v("Vrij")]),a("p",{staticClass:"event-text",attrs:{id:r.start.weekday,tabindex:"0",role:"button"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.bevestigAfspraak({event:n})}}},[t._v(" "+t._s(r.start.time)+" tot "+t._s(r.end.time)+" ")])]}}]),model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}})],1)],1)],1)},r=[],i=(a("99af"),a("4160"),a("159b"),a("56d7")),o=a("bc3a"),s=a.n(o),c={data:function(){return{focus:"",type:"week",weekdays:[1,2,3,4,5,6,0],firstinterval:"9",intervalcount:"11",locale:"nl",eventColor:["primary","red"],treatment:["shiatsu"],events:[],appointmentsLoaded:!1}},created:function(){var t=this;i["bus"].$on("treatmentArray",(function(e){t.treatment=e}))},mounted:function(){this.$refs.calendar.checkChange()},methods:{returnID:function(t){return"#".concat(t)},log:function(t){console.log(t)},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},getEventColor:function(t){return t.color},updateRange:function(t){var e=t.start,a=t.end;this.getFreePlaces(e.date,a.date)},intervalFormat:function(t){return t.time},bevestigAfspraak:function(t){var e=t.event;this.$router.push({name:"AfspraakBevestigen",params:{start:e.start,end:e.end,treatment:this.treatment}})},getFreePlaces:function(t,e){var a=this;this.events=[],s.a.get("".concat(a.$store.state.HOST,"/api/appointments/get_appointments/"),{params:{beginweek:t,endweek:e}}).then((function(t){t.data?a.appointmentsLoaded=!0:a.appointmentsLoaded=!1,a.events=[],t.data.forEach((function(t){0==t.taken&&a.events.push({name:t.taken?"Bezet":"Vrij",start:t.start,end:t.end,color:t.taken?a.eventColor[1]:a.eventColor[0],timed:!0})}))})).catch((function(t){console.log(t)}))},dateToString:function(t){var e=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],a=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],n=new Date(t),r=n.getDay(),i=e[r],o=n.getDate(),s=n.getMonth(),c=a[s];return"".concat(i," ").concat(o," ").concat(c)}}},l=c,d=(a("f5e8"),a("2877")),u=a("6544"),v=a.n(u),f=a("8212"),p=a("8336"),m=a("a4f6"),h=a("62ad"),g=a("132d"),b=a("490a"),_=a("0fd9"),k=a("8dd9"),y=a("2fa4"),x=a("71d9"),C=a("2a7f"),w=Object(d["a"])(l,n,r,!1,null,null,null);e["a"]=w.exports;v()(w,{VAvatar:f["a"],VBtn:p["a"],VCalendar:m["a"],VCol:h["a"],VIcon:g["a"],VProgressCircular:b["a"],VRow:_["a"],VSheet:k["a"],VSpacer:y["a"],VToolbar:x["a"],VToolbarTitle:C["a"]})},"49f9":function(t,e,a){},"4e71":function(t,e,a){"use strict";a("e61e")},5406:function(t,e,a){"use strict";a("f867")},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"bus",(function(){return ee}));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("15f5");var n=a("e832"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view",{staticClass:"animated fadeIn"})],1)],1)},i=[],o={name:"App",components:{},data:function(){return{}},created:function(){alert(0)},methods:{scrollTopAnimation:function(){var t=document.documentElement.scrollTop;while(t>0)document.documentElement.scrollTop--}}},s=o,c=(a("034f"),a("2877")),l=a("6544"),d=a.n(l),u=a("7496"),v=a("f6c4"),f=Object(c["a"])(s,r,i,!1,null,null,null),p=f.exports;d()(f,{VApp:u["a"],VMain:v["a"]});a("d3b7");var m=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"display-1"},[t._v("Afspraak Maken:")]),a("TypeAfspraak",{staticClass:"type"}),a("TijdKiezen",{staticClass:"calendar"})],1)},g=[],b=a("5738"),_=a("499f"),k={components:{TypeAfspraak:b["a"],TijdKiezen:_["a"]},methods:{},data:function(){return{}}},y=k,x=(a("d05a"),Object(c["a"])(y,h,g,!1,null,"0ffebe56",null)),C=x.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.items,(function(e){return a("v-tab",{key:e.title},[t._v(" "+t._s(e.title)+" "),a("v-icon",{staticClass:"icon"},[t._v(" "+t._s(e.icon)+" ")])],1)})),a("v-container",{staticClass:"signout",on:{click:function(e){return t.signout()}}},[a("div",{staticClass:"signoutbtn"},[t._v(" Uitloggen"),a("v-icon",{staticClass:"icon"},[t._v(" mdi-exit-to-app ")])],1)])],2),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(t){return a("v-tab-item",{key:t.title},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a(t.content,{tag:"component"})],1)],1)],1)})),1)],1)],1)},T=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{staticClass:"fill-height"},[a("v-col",[a("v-sheet",{attrs:{height:"64"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:t.setToday}},[t._v(" Vandaag ")]),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[a("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-left ")])],1),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[a("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-right ")])],1),t.$refs.calendar?a("v-toolbar-title",[t._v(" "+t._s(t.$refs.calendar.title)+" ")]):t._e(),a("v-spacer"),a("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",r,!1),n),[a("span",[t._v(t._s(t.typeToLabel[t.type]))]),a("v-icon",{attrs:{right:""}},[t._v(" mdi-menu-down ")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:function(e){t.type="day"}}},[a("v-list-item-title",[t._v("Dag")])],1),a("v-list-item",{on:{click:function(e){t.type="week"}}},[a("v-list-item-title",[t._v("Week")])],1),a("v-list-item",{on:{click:function(e){t.type="month"}}},[a("v-list-item-title",[t._v("Maand")])],1)],1)],1)],1)],1),a("v-sheet",[a("v-calendar",{ref:"calendar",attrs:{color:"primary","first-interval":t.firstinterval,"interval-count":t.intervalcount,events:t.events,locale:"nl","event-color":t.getEventColor,type:t.type,"event-overlap-mode":t.mode,weekdays:t.weekdays},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.viewDay,change:t.getFreePlaces},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}})],1)],1)],1),a("v-dialog",{attrs:{width:"500",height:"250","hide-overlay":"","offset-x":""},model:{value:t.showEventModal,callback:function(e){t.showEventModal=e},expression:"showEventModal"}},[a("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[a("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[a("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),a("v-spacer")],1),0!=t.$store.state.dashboard.appointmentDataArr?a("v-card-text",[a("br"),a("label",{attrs:{for:"cstartTime"}},[t._v("Begintijd: ")]),a("span",{attrs:{id:"cstartTime"}},[t._v(t._s(t.convertTime(t.selectedEvent.start)))]),a("br"),a("label",{attrs:{for:"cendtime"}},[t._v("Eindtijd: ")]),a("span",{attrs:{id:"cendtime"}},[t._v(t._s(t.convertTime(t.selectedEvent.end)))]),a("br"),t.appointmentInfos[0].customer[0].first_name?a("div",[a("label",{attrs:{for:"firstname"}},[t._v("Voornaam: ")]),a("span",{attrs:{id:"firstname"}},[t._v(t._s(t.appointmentInfos[0].customer[0].first_name))]),a("br")]):t._e(),t.appointmentInfos[0].customer[0].last_name?a("div",[a("label",{attrs:{for:"lastname"}},[t._v("Achternaam: ")]),a("span",{attrs:{id:"lastname"}},[t._v(t._s(t.appointmentInfos[0].customer[0].last_name))]),a("br")]):t._e(),t.appointmentInfos[0].customer[0].email?a("div",[a("label",{attrs:{for:"email"}},[t._v("Email: ")]),a("span",{attrs:{id:"email"}},[t._v(t._s(t.appointmentInfos[0].customer[0].email))]),a("br")]):t._e(),t.appointmentInfos[0].customer[0].phone_number?a("div",[a("label",{attrs:{for:"phone"}},[t._v("Telefoon: ")]),a("span",{attrs:{id:"phone"}},[t._v(t._s(t.appointmentInfos[0].customer[0].phone_number))]),a("br")]):t._e(),a("label",{attrs:{for:"treatments"}},[t._v("Behandelingen: ")]),a("span",{attrs:{id:"treatments"}},[t._v(t._s(JSON.parse(t.appointmentInfos[0].appointment)[0].fields.treatment))]),a("br"),a("label",{attrs:{for:"comments"}},[t._v("Opmerkingen: ")]),a("span",{attrs:{id:"comments"}},[t._v(t._s(JSON.parse(t.appointmentInfos[0].appointment)[0].fields.reason)+" ")]),a("br")]):t._e(),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.showEventModal=!1}}},[t._v(" Cancel ")])],1)],1)],1),a("v-dialog",{attrs:{width:"500",height:"250","hide-overlay":"","offset-x":""},model:{value:t.createEventModal,callback:function(e){t.createEventModal=e},expression:"createEventModal"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"indigo"}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Maak een afspraak")])])],1),a("v-card-text",[a("br"),a("label",[t._v("Kies behandeling(en)")]),a("v-select",{attrs:{id:"picktreatments",items:t.allTreatments,outlined:"",dense:"",multiple:"","menu-props":{top:!1,offsetY:!0}},on:{change:function(e){return t.calculateDuration()}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),a("div",{staticClass:"times"},[a("div",{staticClass:"timea"},[a("label",{attrs:{for:"startTime"}},[t._v("Begintijd: ")]),a("span",{attrs:{id:"startTime"}},[t._v(t._s(t.starttime))])]),a("div",{staticClass:"timeb"},[a("label",{attrs:{for:"endtime"}},[t._v("Eindtijd: ")]),a("span",{attrs:{id:"endtime"}},[t._v(t._s(t.endtime))])])]),a("br"),a("label",[t._v("Klant:")]),a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{counter:15,label:"Voornaam",required:"",dense:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{counter:15,label:"Achternaam",dense:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"E-mail",dense:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Telefoonnummer",dense:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1)],1)],1)],1),a("v-btn",{attrs:{color:"accent",elevation:"2",block:""},on:{click:function(e){return t.sendToBackEnd()}}},[t._v("Voeg afspraak toe")])],1)],1)],1)},E=[],j=(a("99af"),a("4160"),a("ac1f"),a("25f0"),a("4d90"),a("1276"),a("159b"),a("3835")),S=(a("96cf"),a("1da1")),A=a("5530"),O=a("2f62"),M=a("bc3a"),$=a.n(M),I={data:function(){return{focus:"",type:"week",typeToLabel:{month:"Maand",week:"Week",day:"Dag"},mode:"column",weekdays:[1,2,3,4,5,6,0],value:"",firstinterval:"7",intervalcount:"13",locale:"nl",events:[],select:[{text:"Massage",value:"120"}],allTreatments:[],eventColor:["primary","red"],selectedEvent:{},selectedElement:null,selectedOpen:!1,createEventModal:!1,showEventModal:!1,tms:"",starttime:"",endtime:"",success:"",firstname:"",lastname:"",email:"",phone:""}},computed:Object(A["a"])({},Object(O["b"])({appointmentInfos:"dashboard/getAppointments"})),created:function(){this.getData()},mounted:function(){this.$refs.calendar.checkChange()},methods:{sendToBackEnd:function(){var t=this,e=this.parseDate(this.selectedEvent.start),a=this.parseDate(this.selectedEvent.end),n={customer_id:0,firstname:this.firstname,last_name:this.lastname,email:this.email,phone_number:this.phone,start:e,end:a,treatment:[],employee_id:0},r=this;$.a.post("".concat(r.$store.state.HOST,"/api/appointments/new_appointment/"),{body:n,headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(e){console.log(e.data),t.createEventModal=!1,t.getAllEvents()})).catch((function(t){console.log(t)})).finally((function(){}))},viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},parseDate:function(t){return new Date(t).toLocaleString()},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},getFreePlaces:function(t){var e=t.start,a=t.end;this.getAllEvents(e.date,a.date)},getData:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,e.next=3,$.a.get("https://my-json-server.typicode.com/liambenschop/school/treatments/",{headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(t){t.data.forEach((function(t){a.allTreatments.push({text:t.title,value:t.duration})}))}));case 3:case"end":return e.stop()}}),e)})))()},getAllEvents:function(t,e){var a=this;return Object(S["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=a,n.next=3,$.a.get("".concat(r.$store.state.HOST,"/api/appointments/get_free_places/"),{body:{beginweek:t,endweek:e},headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(t){a.events=[],t.data.forEach((function(t){r.events.push({name:t.taked?"Bezet":"Vrije Afspraak",start:t.start,appointmentId:t.appointment_id,end:t.end,color:t.taked?r.eventColor[1]:r.eventColor[0],timed:!0})}))})).catch((function(t){console.log(t)}));case 3:case"end":return n.stop()}}),n)})))()},getAppointmentInfo:function(t){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e,a.next=3,$.a.get("".concat(n.$store.state.HOST,"/api/appointments/get_appointment_data/"),{params:{appointment_id:t}}).then((function(t){console.log(t.data),n.$store.getters["dashboard/setAppointments"](t.data)})).catch((function(t){console.log(t)}));case 3:case"end":return a.stop()}}),a)})))()},showEvent:function(t){var e=this,a=t.nativeEvent,n=t.event,r=this;this.selectedEvent=n,this.selectedElement=a.target,this.starttime=new Date(this.selectedEvent.start),this.endtime=new Date(this.selectedEvent.end);var i=this.starttime.getHours().toString(),o=this.starttime.getMinutes().toString(),s=this.endtime.getHours().toString(),c=this.endtime.getMinutes().toString();this.starttime=i.padStart(2,"0")+":"+o.padStart(2,"0"),this.endtime=s.padStart(2,"0")+":"+c.padStart(2,"0"),"red"==this.selectedEvent.color?(r.getAppointmentInfo(n.appointmentId),0==this.showEventModal?setTimeout((function(){e.showEventModal=!0}),10):this.showEventModal=!1):this.createEventModal=!0},getEventColor:function(t){return t.color},rnd:function(t,e){return Math.floor((e-t+1)*Math.random())+t},calculateDuration:function(t){this.endtime=t;for(var e=0,a=0;a<this.select.length;a++)e+=parseFloat(this.select[a]);var n=this.starttime.split(":"),r=Object(j["a"])(n,2),i=r[0],o=r[1];i=parseInt(i),o=parseInt(o),o+=e,this.endtime=60*i+o;var s=15*Math.round(this.endtime/15),c=""+Math.floor(s/60),l=""+s%60;this.endtime=c.padStart(2,"0")+":"+l.padStart(2,"0")},convertTime:function(t){var e=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],a=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],n=new Date(t),r=n.getDay(),i=e[r],o=n.getMonth(),s=n.getDate(),c=a[o],l=n.getHours().toString(),d=n.getMinutes().toString();return"".concat(i," ").concat(s," ").concat(c," om ").concat(l.padStart(2,"0"),":").concat(d.padStart(2,"0"))}}},D=I,B=(a("4e71"),a("8336")),H=a("a4f6"),F=a("b0af"),N=a("99d9"),P=a("62ad"),L=a("a523"),R=a("169a"),z=a("4bd4"),K=a("132d"),q=a("8860"),J=a("da13"),U=a("5d23"),W=a("e449"),G=a("0fd9"),X=a("b974"),Z=a("8dd9"),Y=a("2fa4"),Q=a("8654"),tt=a("71d9"),et=a("2a7f"),at=Object(c["a"])(D,V,E,!1,null,"e02ec1d4",null),nt=at.exports;d()(at,{VBtn:B["a"],VCalendar:H["a"],VCard:F["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VCol:P["a"],VContainer:L["a"],VDialog:R["a"],VForm:z["a"],VIcon:K["a"],VList:q["a"],VListItem:J["a"],VListItemTitle:U["b"],VMenu:W["a"],VRow:G["a"],VSelect:X["a"],VSheet:Z["a"],VSpacer:Y["a"],VTextField:Q["a"],VToolbar:tt["a"],VToolbarTitle:et["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"openingHeader"},[a("h2",[t._v("Openingstijden wijzigen")]),this.saveSuccess?a("div",{staticClass:"successt"},[t._v(" "+t._s(t.text)+" ")]):t._e(),this.saveError?a("div",{staticClass:"errort"},[t._v(" "+t._s(t.text)+" ")]):t._e()]),a("div",{staticClass:"flexbox"},t._l(t.days,(function(e){return a("v-row",{key:e.day_id,staticClass:"dayrow"},[a("h3",[t._v(t._s(e.title))]),t._l(t.timeslotsFilter(e.day_id),(function(n,r){return a("div",{key:r,staticClass:"outerbigbox"},[t._v(" "+t._s(e.day_id)+" "),a("div",{staticClass:"bigbox"},[a("v-text-field",{staticClass:"textfield",attrs:{label:"Starttijd",value:n.start,solo:"",clearable:""}}),a("v-text-field",{staticClass:"textfield",attrs:{label:"Eindtijd",value:n.end,solo:"",clearable:""}}),t._v(" "+t._s(n.slice_id)+" "),a("v-btn",{staticClass:"mx-2 plus",attrs:{"x-small":"",fab:"",dark:"",color:"red"},on:{click:function(a){return t.deleteSlot(n.slice_id,e.day_id)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-delete ")])],1),a("v-btn",{staticClass:"mx-2 plus",attrs:{"x-small":"",fab:"",dark:"",color:"green"},on:{click:function(e){return t.saveSlot(n.slice_id)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-check ")])],1)],1)])})),a("div",{staticClass:"buttonrow"},[a("v-btn",{staticClass:"mx-2 plus",attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(a){return t.addSlot(e.day_id)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)],1)],2)})),1)])},it=[],ot=(a("4de4"),{data:function(){return{currency:"€",thisday:"",saveSuccess:!1,saveError:!1,text:"",sleep:"",days:[{day_id:"0",title:"Maandag"},{day_id:"1",title:"Dinsdag"},{day_id:"2",title:"Woensdag"},{day_id:"3",title:"Donderdag"},{day_id:"4",title:"Vrijdag"},{day_id:"5",title:"Zaterdag"},{day_id:"6",title:"Zondag"}],timeslots:[]}},created:function(){this.getSlices()},computed:{},methods:{getSlices:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,e.next=3,$.a.get("".concat(a.$store.state.HOST,"/api/dashboard/get_timeslices/"),{headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(e){t.events=[],e.data.forEach((function(t){a.timeslots.push({start:t.start,end:t.end,day_id:t.day_id,slice_id:t.slice_id})}))})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},timeslotsFilter:function(t){var e=this.timeslots.filter((function(e){return e.day_id==t}));return console.log(e),e},addSlot:function(t){this.timeslots.push({start:"",end:"",day_id:t,slice_id:1})},saveSlot:function(){var t=this,e={day_id:this.day_id,start:this.start,end:this.end,slice_id:this.slice_id},a=this;$.a.put("".concat(a.$store.state.HOST,"/api/dashboard/update_timeslices"),{body:e,headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(e){console.log(e.status),t.saveSucces=!0,t.text="Tijden succesvol aangepast!",t.getSlices(),setTimeout((function(){t.saveSucces=!1}),5e3)})).catch((function(e){console.log(e),t.saveError=!0,t.text="Er is iets fout gegaan bij het opslaan van de tijden!",setTimeout((function(){t.saveError=!1}),5e3)}))},deleteSlot:function(t,e){var a=this,n={slice_id:t,day_id:e},r=this;$.a.delete("".concat(r.$store.state.HOST,"/api/dashboard/delete_timeslices"),{headers:{Accept:"application/json","Content-type":"application/json"},body:n}).then((function(t){console.log(t.data),a.getSlices()})).catch((function(t){console.log(t)}))}}}),st=ot,ct=(a("d5a8"),Object(c["a"])(st,rt,it,!1,null,"06a7ac04",null)),lt=ct.exports;d()(ct,{VBtn:B["a"],VContainer:L["a"],VIcon:K["a"],VRow:G["a"],VTextField:Q["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"treatmentContainer"},[a("h2",[t._v("Behandelingen wijzigen")]),t._l(t.treatments,(function(e,n){return a("v-row",{key:n},[a("v-col",{attrs:{cols:"2"}},[e.title?a("div",[a("v-subheader",[t._v(t._s(e.title))])],1):a("div",[a("v-subheader",[t._v("Nieuwe behandeling")])],1)]),a("v-col",{staticClass:"textfieldContainer",attrs:{cols:"10"}},[a("v-text-field",{staticClass:"textfield",attrs:{label:"Naam",value:e.title}}),a("v-text-field",{staticClass:"textfield duration",attrs:{label:"Tijdsduur",value:e.duration,suffix:" Minuten"}}),a("v-text-field",{staticClass:"textfield price",attrs:{label:"Prijs",value:e.price,prefix:t.currency}}),e.title?a("div",[a("v-btn",{staticClass:"mx-2 minus",attrs:{fab:"",dark:"","x-small":"",color:"red"},on:{click:function(e){return t.deleteTreatment(n)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-minus ")])],1)],1):a("div",[a("v-btn",{staticClass:"mx-2 minus",attrs:{fab:"",dark:"","x-small":"",color:"green"},on:{click:t.saveTreatment}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-check ")])],1)],1)],1)],1)})),a("v-btn",{staticClass:"mx-2 plus",attrs:{fab:"",dark:"",color:"indigo"},on:{click:t.addTreatment}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)],2)},ut=[],vt=(a("a434"),{data:function(){return{currency:"€",treatments:[{title:"Massage",icon:"mdi-calendar",duration:"120",price:"100.00"},{title:"Voedingscoaching",icon:"mdi-calendar",duration:"120",price:"50.00"}]}},methods:{addTreatment:function(){this.treatments.push({title:"",icon:"mdi-calendar",duration:"",price:""})},deleteTreatment:function(t){this.treatments.splice(t,1)},saveTreatment:function(){}}}),ft=vt,pt=(a("7f80"),a("e0c7")),mt=Object(c["a"])(ft,dt,ut,!1,null,"4cfdd113",null),ht=mt.exports;d()(mt,{VBtn:B["a"],VCol:P["a"],VContainer:L["a"],VIcon:K["a"],VRow:G["a"],VSubheader:pt["a"],VTextField:Q["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"holidayContainer"},[a("h1",[t._v("Vakantiedagen inplannen")]),a("h2",[t._v("Geplande vakantie's")]),a("v-container",{staticClass:"plannedHolidays"},t._l(t.planneddays,(function(e){return a("div",{key:e.id},[a("div",{staticClass:"plannedHolidayContainer"},[a("h4",[t._v(t._s(e.title))]),a("v-date-picker",{attrs:{range:""},model:{value:e.dates,callback:function(a){t.$set(e,"dates",a)},expression:"days.dates"}})],1)])})),0),a("h2",[t._v("Nieuwe vakantie inplannen")]),a("v-container",{staticClass:"newHoliday"},[a("v-text-field",{attrs:{value:"Titel"}}),a("v-date-picker",{attrs:{range:""}}),a("v-btn",{attrs:{color:"green",dark:"",large:""}},[t._v(" Inplannen ")])],1)],1)},bt=[],_t={data:function(){return{currency:"€",planneddays:[{id:"1",title:"Vakantie Bali",dates:["2021-01-10","2021-01-20"]},{id:"2",title:"Vakantie Spanje",dates:["2021-01-10","2021-01-20"]},{id:"3",title:"Vakantie Drenthe",dates:["2021-01-10","2021-01-20"]}]}},methods:{}},kt=_t,yt=(a("5406"),a("2e4b")),xt=Object(c["a"])(kt,gt,bt,!1,null,"501f15f0",null),Ct=xt.exports;d()(xt,{VBtn:B["a"],VContainer:L["a"],VDatePicker:yt["a"],VTextField:Q["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"settingsContainer"},[a("h1",[t._v("Instellingen")])])},Tt=[],Vt={data:function(){return{currency:"€"}},methods:{}},Et=Vt,jt=(a("3220"),Object(c["a"])(Et,wt,Tt,!1,null,"42ed6a56",null)),St=jt.exports;d()(jt,{VContainer:L["a"]});var At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"statsContainer"},[a("h1",[t._v("Statistics")])])},Ot=[],Mt={data:function(){return{currency:"€"}},methods:{}},$t=Mt,It=(a("7b3a"),Object(c["a"])($t,At,Ot,!1,null,"59d09db8",null)),Dt=It.exports;d()(It,{VContainer:L["a"]});var Bt={data:function(){return{tab:null,items:[{title:"Agenda",icon:"mdi-calendar",content:"Calendar"},{title:"Behandelingen",icon:"mdi-basket-plus",content:"Treatments"},{title:"Openingstijden",icon:"mdi-storefront",content:"OpeningTimes"},{title:"Vakanties",icon:"mdi-weather-sunset",content:"Holidays"},{title:"Instellingen",icon:"mdi-cog-outline",content:"Settings"},{title:"Statistieken",icon:"mdi-chart-bar",content:"Statistics"}]}},components:{Calendar:nt,OpeningTimes:lt,Treatments:ht,Holidays:Ct,Settings:St,Statistics:Dt},created:function(){},mounted:function(){},methods:{signout:function(){this.$router.push("/dashboard")}}},Ht=Bt,Ft=(a("39c2"),a("f3e0"),a("71a3")),Nt=a("c671"),Pt=a("fe57"),Lt=a("aac8"),Rt=Object(c["a"])(Ht,w,T,!1,null,"ac2c6554",null),zt=Rt.exports;d()(Rt,{VCard:F["a"],VCardText:N["b"],VContainer:L["a"],VIcon:K["a"],VTab:Ft["a"],VTabItem:Nt["a"],VTabs:Pt["a"],VTabsItems:Lt["a"]}),n["a"].use(m["a"]);var Kt=[{path:"/",name:"Home",component:C},{path:"/afspraak-maken",name:"Afspraak Maken",component:function(){return a.e("about").then(a.bind(null,"4883"))},props:!0},{path:"/afspraak-bevestigen",name:"AfspraakBevestigen",component:function(){return a.e("about").then(a.bind(null,"eee4"))},props:!0},{path:"/afspraak-geboekt",name:"AfspraakGeboekt",component:function(){return a.e("about").then(a.bind(null,"63ce"))},props:!0},{path:"/dashboard",name:"Dashboard",component:zt}],qt=new m["a"]({mode:"history",base:"/",routes:Kt}),Jt=qt;n["a"].use(O["a"]);var Ut=new O["a"].Store({state:{HOST:"http://django.yanickhost.ga:8085",AUTHENTICATED:void 0,usertoken:void 0},getters:{},mutations:{splitToArray:function(t,e){var a=e.split(",");console.log(a)},getAxiosCall:function(t,e){$.a.get("".concat(e.host,"/api/").concat(e.url,"/"),{params:e.params}).then((function(t){var a=t.data;e.callback(a)})).catch((function(t){console.log(t)}))},postAxiosCall:function(t,e){$.a.post("".concat(e.host,"/api/").concat(e.url,"/"),{body:e.params}).then((function(t){var a=t.data;e.callback(a)})).catch((function(t){console.log(t)}))}},actions:{},modules:{}}),Wt=a("9483");Object(Wt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Gt=a("f309"),Xt=a("fcf4");n["a"].use(Gt["a"]);var Zt=new Gt["a"]({theme:{themes:{light:{primary:"#895537",secondary:Xt["a"].orange.base,accent:Xt["a"].orange.base}}}}),Yt=a("00e4"),Qt=a("f5af"),te=a.n(Qt);a("e829");n["a"].config.productionTip=!1,n["a"].use(Yt["a"]),n["a"].use(O["a"]),$.a.defaults.xsrfHeaderName="X-CSRFTOKEN",$.a.defaults.xsrfCookieName="XCSRF-TOKEN",$.a.defaults.withCredentials=!0,n["a"].prototype.$axios=$.a,n["a"].config.productionTip=!1;var ee=new n["a"];new n["a"]({created:function(){te.a.init()},router:Jt,store:Ut,vuetify:Zt,render:function(t){return t(p)}}).$mount("#app")},5738:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-checkbox",{attrs:{"input-value":"true",value:"shiatsu",label:"Shiatsu Therapie","aria-label":"Selecteer Type Afspraak: Shiatsu Therapie"},on:{click:t.changeBehandeling},model:{value:t.treatment,callback:function(e){t.treatment=e},expression:"treatment"}}),a("v-checkbox",{attrs:{"input-value":"false",value:"voeding",label:"Voedingsadvies","aria-label":"Selecteer Type Afspraak: Voedingsadvies"},on:{click:t.changeBehandeling},model:{value:t.treatment,callback:function(e){t.treatment=e},expression:"treatment"}})],1)},r=[],i=a("56d7"),o={data:function(){return{treatment:["shiatsu"]}},methods:{changeBehandeling:function(){i["bus"].$emit("treatmentArray",this.treatment)}}},s=o,c=a("2877"),l=a("6544"),d=a.n(l),u=a("ac7c"),v=a("a523"),f=Object(c["a"])(s,n,r,!1,null,null,null);e["a"]=f.exports;d()(f,{VCheckbox:u["a"],VContainer:v["a"]})},"6ff9":function(t,e,a){},"7b3a":function(t,e,a){"use strict";a("6ff9")},"7f80":function(t,e,a){"use strict";a("a4f9")},"85ec":function(t,e,a){},"8f7b":function(t,e,a){},a4f9:function(t,e,a){},aa3f:function(t,e,a){},d05a:function(t,e,a){"use strict";a("073a")},d5a8:function(t,e,a){"use strict";a("8f7b")},dd9a:function(t,e,a){},e61e:function(t,e,a){},f3e0:function(t,e,a){"use strict";a("49f9")},f5e8:function(t,e,a){"use strict";a("1453")},f867:function(t,e,a){}});
//# sourceMappingURL=app.69ecbd91.js.map