webpackJsonp([7],{0:function(e,t,n){e.exports=n("nplA")},"0cru":function(e,t){},"3Puz":function(e,t){},"5BSS":function(e,t){},CgWt:function(e,t,n){"use strict";var o=n("7109"),i={openURL:o.A,ping:function(){var e=this,t=this.$store.state.settings,n=t.prefix+t.preferences.ip+":"+t.preferences.port+"/api/"+t.api+"/ping";this.$axios({method:"get",url:n}).then(function(t){e.$q.notify({message:e.$t("actions."+t.data.res),timeout:2e3,color:"primary",textColor:"black",position:"left",icon:"fa-wifi fa-lg"})})},getUUID:function(){var e=this.$q.localStorage.get.item("uuid");null==e&&(e=Object(o.B)()),this.$store.commit("settings/setUUID",e)},reset:function(){this.$q.localStorage.clear(),window.location="/"},sendSettings:function(e,t){console.log("sending"),this.settings[e]=t,alert(this.settings[e])}},r=n("XyMi"),s=Object(r.a)(i,void 0,void 0,!1,null,null,null);s.options.__file="src/components/common.vue";t.a=s.exports},GhBQ:function(e,t){},KSNH:function(e,t){},N12Q:function(e,t){},R58i:function(e,t){},nplA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={};n.d(o,"Mutator",function(){return I}),n.d(o,"fullScreen",function(){return P}),n.d(o,"setUUID",function(){return x});var i=n("Dd8w"),r=n.n(i),s=(n("30VO"),n("L4dm"),n("trlb"),n("3Puz"),n("N12Q"),n("/5sW")),u=n("7109"),a=n("fZjL"),l=n.n(a),c=n("BO1k"),p=n.n(c),f=n("CgWt"),d={name:"App",watch:{"$q.fullscreen.isActive":function(e){e?this.$store.commit("settings/fullScreen","true"):this.$store.commit("settings/fullScreen","false")}},mounted:function(){this.getUUID=f.a.getUUID,this.$nextTick(function(){var e=this,t=this.$q.localStorage.get.all();console.info(t);var n=!0,o=!1,i=void 0;try{for(var r,s=p()(l()(t));!(n=(r=s.next()).done);n=!0){var u=r.value;this.$store.commit("settings/Mutator",[u,t[u]]),"fullscreen"===u&&"true"===t[u]&&function(){var t=e;setTimeout(function(){t.$q.fullscreen.request(),t=null},50)}()}}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}this.getUUID()})},methods:{}},h=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},g=[];h._withStripped=!0;var m=n("XyMi"),v=!1;var b=function(e){v||n("0cru")},S=Object(m.a)(d,h,g,!1,b,null,null);S.options.__file="src/App.vue";var w=S.exports,Q=n("/ocq"),y=[{path:"/",component:function(){return n.e(1).then(n.bind(null,"lfHO"))},children:[{path:"",component:function(){return n.e(0).then(n.bind(null,"CmAY"))}},{path:"/settings",component:function(){return n.e(3).then(n.bind(null,"dkEd"))}},{path:"/main",component:function(){return n.e(4).then(n.bind(null,"gk7G"))}}]},{path:"/details",component:function(){return n.e(1).then(n.bind(null,"lfHO"))},children:[{path:"/",component:function(){return n.e(2).then(n.bind(null,"KBJM"))}},{path:"",component:function(){return n.e(0).then(n.bind(null,"CmAY"))}},{path:"",component:function(){return n.e(0).then(n.bind(null,"CmAY"))}},{path:"",component:function(){return n.e(0).then(n.bind(null,"CmAY"))}}]},{path:"*",component:function(){return n.e(5).then(n.bind(null,"c5Mg"))}}];s.a.use(Q.a);var q=new Q.a({mode:"history",base:"/",scrollBehavior:function(){return{y:0}},routes:y}),_=n("NYxO"),U=n("5BSS"),$=n("mtWM"),A=n.n($),I=function(e,t){e.preferences[t[0]]=t[1],u.c.set(t[0],t[1]);var n=e.prefix+e.preferences.ip+":"+e.preferences.port+"/api/"+e.api+"/settings";A()({method:"post",url:n,data:{id:t[0],value:t[1]}}).then(function(e){console.log(t[0]+" "+e.data.res)})},P=function(e,t){e.fullscreen=t,u.c.set("fullscreen",t)},x=function(e,t){e.uuid=t,u.c.set("uuid",t)},L=n("GhBQ"),C={namespaced:!0,state:{loaded:!1,uuid:"unregistered",fullscreen:!1,api:"v1",prefix:"http://",preferences:{shutter:"1/60",iso:"400",hdr:"+3",guides:"off",colour:"Pre+3",fps:"24",wb:"3200K",ip:"127.0.0.1",port:"7070"}},getters:U,actions:L,mutations:o};s.a.use(_.a);var O=new _.a.Store({modules:{settings:C}});var B=O,D=n("TXmL"),M={en:{}},T={en:{lang:{language:"Language",native:"English",english:"English",german:"German"},actions:{failed:"failed",success:"success",loading:"Loading",save:"Save",set:"Set",unset:"Unset",reset:"Reset",close:"Close",select:"Select",toggle:"Toggle",preset:"Preset",presets:"Presets",show:"Show",hide:"Hide",on:"On",off:"Off",debug:"Debugger",ping:"Ping",ping_request_received:"ping request received",request_valid:"valid request submitted",request_invalid:"invalid request submitted",camera_error:"something is wrong with the camera"},system:{ip:"Camera IP Address",api:"API",port:"Port",uuid:"UUID",custom_value:"Custom Value",set_and_close:"Set & Close",preferences:"Preferences",fullscreen:"Full Screen",shutter:"Shutter",guides:"Guides",hdr:"HDR",stops:"stops",colour:"Colour",iso:"ISO",fps:"FPS",wb:"WB",menu:"Menu"}}};s.a.config.productionTip=!1,s.a.use(u.z,{components:{QLayout:u.m,QLayoutHeader:u.o,QLayoutDrawer:u.n,QPageContainer:u.s,QPage:u.r,QToolbar:u.u,QToolbarTitle:u.v,QBtn:u.f,QBtnGroup:u.g,QIcon:u.h,QList:u.p,QInput:u.i,QListHeader:u.q,QItem:u.j,QItemMain:u.k,QItemSide:u.l,QAjaxBar:u.e,QScrollObservable:u.t},directives:{Ripple:u.w,TouchPan:u.x,TouchSwipe:u.y},plugins:{Notify:u.d,AppVisibility:u.b,AppFullscreen:u.a,LocalStorage:u.c}});var k=r()({el:"#q-app",router:q,store:B},w),j=[];j.push(function(e){var t=e.app,n=e.store;e.Vue.use(D.a),t.i18n=new D.a({locale:n.state.locale,fallbackLocale:"en",messages:M})}),j.push(function(e){var t=e.app;e.store;e.Vue.use(D.a),t.i18n=new D.a({locale:"en",fallbackLocale:"en",messages:T})}),j.push(function(e){e.Vue.prototype.$axios=A.a}),j.forEach(function(e){return e({app:k,router:q,store:B,Vue:s.a})}),new s.a(k)}},[0]);