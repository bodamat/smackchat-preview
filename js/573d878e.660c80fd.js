(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["573d878e"],{"32da":function(t,e,r){},"5fad":function(t,e,r){"use strict";var o=r("32da"),a=r.n(o);a.a},e883:function(t,e,r){"use strict";e["a"]={computed:{otherUserDetails:function(){var t=this.$store.state.store.users[this.$route.params.otherUserId];return t||{}}}}},f241:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{attrs:{view:"lHh Lpr lFf"}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",[t.$route.fullPath.includes("/chat")?r("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{icon:"arrow_back",flat:"",dense:"",label:"Back"}}):t._e(),r("q-toolbar-title",{staticClass:"absolute-center"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t.userDetails.userId?r("q-btn",{staticClass:"absolute-right q-pr-sm logoutBtn",attrs:{icon:"account_circle","no-caps":"",flat:"",dense:""},on:{click:t.logoutUser}},[t._v("\n      Logout"),r("br"),t._v("\n      "+t._s(t.userDetails.name)+"\n      ")]):r("q-btn",{staticClass:"absolute-right q-pr-sm",attrs:{to:"/auth",icon:"account_circle","no-caps":"",flat:"",dense:"",label:"Login"}})],1)],1),r("q-page-container",[r("router-view")],1)],1)},a=[],n=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("7f7f"),r("6762"),r("2fdb"),r("c47a")),s=r.n(n),c=r("2f62"),i=r("e883");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b={mixins:[i["a"]],computed:u({},Object(c["d"])("store",["userDetails"]),{title:function(){var t=this.$route.fullPath;return"/"==t?"SmackChat":t.includes("/chat")?this.otherUserDetails.name:"/auth"==t?"Login":void 0}}),methods:u({},Object(c["b"])("store",["logoutUser"]))},f=b,p=(r("5fad"),r("2877")),d=r("fe09"),h=Object(p["a"])(f,o,a,!1,null,null,null);e["default"]=h.exports;h.options.components=Object.assign({QLayout:d["p"],QHeader:d["j"],QToolbar:d["A"],QBtn:d["e"],QToolbarTitle:d["B"],QPageContainer:d["s"]},h.options.components||{}),h.options.directives=Object.assign({GoBack:d["a"]},h.options.directives||{})}}]);