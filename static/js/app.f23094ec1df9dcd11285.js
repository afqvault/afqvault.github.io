webpackJsonp([1],{"+YTe":function(t,e){},"9M+g":function(t,e){},EPtQ:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";function a(t,e,n,a){var o="[?&]"+e+"=([^&#]*)",i=new RegExp(o),s=i.exec(t);return null!=s&&(n.close(),a(s[1])),""}function o(t,e){var n=b.authUrl+"/"+t;p.a.get(n,{headers:{crossDomain:!0}}).then(function(t){g.a.set("token",t.data.token),e(t.data.token,null)}).catch(function(t){e(null,t),g.a.clearAll()})}function i(t,e,n){var i=window.open(t,"windowname1","width=800, height=600"),s=window.setInterval(function(){try{if(-1!==i.document.URL.indexOf(e)){window.clearInterval(s);a(i.document.URL,"code",i,function(t){o(t,n)})}}catch(t){}},100)}function s(t){n("EPtQ")}function r(t){n("dNgn")}function u(t){n("+YTe")}function c(t){n("Og1M")}function l(t){n("eRVx")}Object.defineProperty(e,"__esModule",{value:!0});var d=n("7+uW"),f=n("sCSS"),h=(n("Jmt5"),n("9M+g"),n("TPi/")),m=n.n(h),v=n("mtWM"),p=n.n(v),_=n("Y4FN"),g=n.n(_),b={authUrl:"http://ec2-54-218-51-130.us-west-2.compute.amazonaws.com/api/authenticate/github",clientId:"2f0bef2b6cc228ff321b",redirectUri:"https://afqvault.github.io",tables:["projects","subjects"],url:"http://ec2-54-218-51-130.us-west-2.compute.amazonaws.com/api/v1/",delete_url:"http://ec2-54-218-51-130.us-west-2.compute.amazonaws.com/api/delete_project/",projects:{sha:{type:"string"},url:{type:"string"},scan_parameters:{type:"dict"},delete:{type:"button",action:"delete"}},subjects:{subjectID:{type:"string"},sessionID:{type:"string"},metadata:{type:"dict"},nodes:{type:"list-dict"},project_id:{type:"objectid",relation:"projects"}}};window.axios=p.a,window.store=g.a;var w={login:function(t){i("https://github.com/login/oauth/authorize?client_id="+b.clientId,b.redirectUri,t)},logout:function(){g.a.clearAll()},getToken:function(){return g.a.get("token")}};d.a.use(f.a);var A={name:"app",data:function(){return{isAuthenticated:!1,tables:b.tables,userInfo:{username:null,isAdmin:!1}}},computed:{get_variant:function(){return this.userInfo.isAdmin?"dark":"info"}},methods:{authenticate:function(){var t=this;w.login(function(){t.getUserInfo()})},getMembershipInfo:function(){var t=this,e="https://api.github.com/orgs/afqvault/members/"+this.userInfo.username,n=w.getToken();console.log(e),p.a.get(e,{headers:{Authorization:"token "+n}}).then(function(e){204===e.status&&(t.userInfo.isAdmin=!0)}).catch(function(t){console.log("error",t)})},getUserInfo:function(){var t=w.getToken(),e=this;p.a.get(m()("https://api.github.com","user"),{headers:{Authorization:"token "+t}}).then(function(t){e.isAuthenticated=!0,e.userInfo.username=t.data.login,e.userInfo.avatar=t.data.avatar_url}).catch(function(){e.logout()}).then(function(){e.getMembershipInfo()})},logout:function(){this.isAuthenticated=!1,this.userInfo.username=null,this.userInfo.isAdmin=!1,w.logout()}},created:function(){this.getUserInfo()}},k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:t.get_variant}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),n("b-navbar-brand",{attrs:{href:"#"}},[t._v("AFQ-Vault")]),t._v(" "),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/",exact:""}},[t._v("Home")]),t._v(" "),n("b-nav-item",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),t._l(t.tables,function(e){return n("span",[n("b-nav-item",{attrs:{to:"/tables/"+e}},[t._v("\n            "+t._s(e)+"\n          ")])],1)})],2),t._v(" "),n("b-navbar-nav",{staticClass:"ml-auto"},[t.isAuthenticated?n("b-nav-item-dropdown",{attrs:{right:""}},[n("template",{slot:"button-content"},[n("em",[t._v(t._s(t.userInfo.username))])]),t._v(" "),n("b-dropdown-item",{attrs:{to:"/profile"}},[t._v("Profile")]),t._v(" "),n("b-dropdown-item",{on:{click:t.logout}},[t._v("Signout")])],2):n("b-nav-item",[n("a",{on:{click:function(e){t.authenticate()}}},[t._v("Admin Login")])])],1)],1)],1),t._v(" "),n("div",{staticClass:"router"},[n("router-view",{attrs:{isAuthenticated:t.isAuthenticated,userInfo:t.userInfo}})],1)],1)},y=[],I={render:k,staticRenderFns:y},x=I,j=n("VU/8"),C=s,U=j(A,x,!1,C,null,null),D=U.exports,E=n("/ocq"),T={name:"about",data:function(){return{count:1}}},V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"about"}},[n("h1",[t._v(" About ")]),t._v(" "),n("p",{staticClass:"lead text-muted"},[t._v("AFQ-Browser is developed by:")]),t._v(" "),n("ul",{staticClass:"nolist"},[n("li",[t._v(" Jason ")]),t._v(" "),n("li",[t._v(" Adam ")]),t._v(" "),n("li",[t._v(" Josh ")]),t._v(" "),n("li",[t._v(" Anisha ")]),t._v(" "),n("li",[t._v(" Ariel ")])])])}],F={render:V,staticRenderFns:$},R=F,M=n("VU/8"),P=r,z=M(T,R,!1,P,null,null),N=z.exports,Q={name:"Home",data:function(){return{msg:"Welcome to your Vue app boilerplate"}}},Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"jumbotron"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"jumbotron-heading"},[t._v("AFQ Vault")]),t._v(" "),n("p",{staticClass:"lead text-muted text-center"},[t._v(" A vault for AFQ-Browser results\n        "),n("br"),n("br"),t._v(" "),n("b-button",{staticStyle:{color:"white"},attrs:{variant:"primary",to:"/tables/projects"}},[t._v(" View Projects ")])],1)])])])])},H=[],J={render:Y,staticRenderFns:H},S=J,L=n("VU/8"),O=u,q=L(Q,S,!1,O,"data-v-1531f398",null),W=q.exports,B={name:"profile",data:function(){return{}},props:["isAuthenticated","userInfo"]},Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"profile"}},[t.isAuthenticated?n("div",[n("h1",[t._v(t._s(t.userInfo.username))]),t._v(" "),n("p",[t._v("\n      You are logged in. Try logging out to see what happens to this page.\n    ")]),t._v(" "),t.userInfo.isAdmin?n("p"):t._e(),n("h2",[t._v(" You are ADMIN. You can delete stuff ")]),t._v(" "),n("p")]):n("div",[n("h1",[t._v("Error!")]),t._v(" "),n("p",[t._v("\n      Please log in to see your profile\n    ")])])])},G=[],K={render:Z,staticRenderFns:G},X=K,tt=n("VU/8"),et=c,nt=tt(B,X,!1,et,null,null),at=nt.exports,ot=n("fZjL"),it=n.n(ot),st=n("mTx5"),rt={name:"Tables",data:function(){return{data:null,meta:{total:1,page:1,max_results:1},links:null,schema:{},title:null,currentPage:null}},props:["userInfo","isAuthenticated"],computed:{get_fields:function(){for(var t=[],e=it()(this.schema),n=0;n<e.length;n+=1){var a=e[n];if("string"===this.schema[a].type||"button"===this.schema[a].type){var o={key:a,sortable:!0};t.push(o)}}return t.push({key:"show_details"}),t},get_dict_fields:function(){for(var t=[],e=it()(this.schema),n=0;n<e.length;n+=1){var a=e[n];if("dict"===this.schema[a].type){var o={key:a,sortable:!0};t.push(o)}}return t}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(t){var e=this,n=this.$route.params.id,a=this,o=st(b.url,n);o=t?o+"/?page="+t:o,p.a.get(o).then(function(t){t.data._items.forEach(function(t,e,n){n[e]._showDetails=!1}),a.data=t.data._items,a.meta=t.data._meta,a.links=t.data._links,a.schema=b[n],a.title=e.$route.params.id})},do_delete:function(t){console.log("item to delete is",t),p.a.get(""+b.delete_url+t._id).then(function(t){console.log(t)}).catch(function(t){console.log("error is",t)})}}},ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tables"}},[n("h1",[t._v(" "+t._s(t.title)+" ")]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("b-pagination",{attrs:{size:"md","total-rows":t.meta.total,"per-page":t.meta.max_results,align:"end"},on:{change:t.fetchData},model:{value:t.meta.page,callback:function(e){t.$set(t.meta,"page",e)},expression:"meta.page"}}),t._v(" "),n("b-table",{attrs:{striped:"",hover:"",items:t.data,fields:t.get_fields,responsive:"lg"},scopedSlots:t._u([{key:"show_details",fn:function(e){return[n("b-form-checkbox",{model:{value:e.item._showDetails,callback:function(n){t.$set(e.item,"_showDetails",n)},expression:"row.item._showDetails"}})]}},{key:"delete",fn:function(e){return[n("b-button",{attrs:{variant:"danger",disabled:!t.userInfo.isAdmin},on:{click:function(n){t.do_delete(e.item)}}},[t._v("x")])]}},{key:"url",fn:function(e){return[n("a",{attrs:{href:e.item.url}},[t._v(t._s(e.item.url))])]}},{key:"row-details",fn:function(e){return[n("b-card",t._l(t.get_dict_fields,function(a){return n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[n("b",[t._v(t._s(a.key))])]),t._v(" "),n("b-col",[t._v(t._s(e.item[a.key]))])],1)}))]}}])})],1)])])},ct=[],lt={render:ut,staticRenderFns:ct},dt=lt,ft=n("VU/8"),ht=l,mt=ft(rt,dt,!1,ht,null,null),vt=mt.exports;d.a.use(E.a);var pt=new E.a({routes:[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:N},{path:"/profile",name:"Profile",component:at},{path:"/tables/:id",name:"Tables",component:vt}]});d.a.config.productionTip=!1,new d.a({el:"#app",router:pt,template:"<App/>",components:{App:D}})},Og1M:function(t,e){},dNgn:function(t,e){},eRVx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f23094ec1df9dcd11285.js.map