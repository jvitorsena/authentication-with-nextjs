(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7237:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(1047)}])},89:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893);function s(e){return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"flex items-center mt-4 ",children:[(0,r.jsx)("label",{className:"pr-3 text-gray-700",children:e.label}),(0,r.jsx)("input",{type:e.type,value:e.value,onChange:function(n){var t;return null===(t=e.changeValue)||void 0===t?void 0:t.call(e,n.target.value)},className:"\n                        px-4 py-1 rounded-lg bg-gray-200 mt-2\n                        border focus:border-blue-500 focus:bg-white\n                        focus:outline-none\n                        shadow-lg\n                    "})]})})}},1047:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(4051),s=t.n(r),a=t(5893),l=t(7294),u=t(89),o=t(5675),c=t(1955),i=t(9669),d=t.n(i),f=t(1163);function p(e,n,t,r,s,a,l){try{var u=e[a](l),o=u.value}catch(c){return void t(c)}u.done?n(o):Promise.resolve(o).then(r,s)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function l(e){p(a,r,s,l,u,"next",e)}function u(e){p(a,r,s,l,u,"throw",e)}l(void 0)}))}}function g(){var e=(0,l.useState)(""),n=e[0],t=e[1],r=(0,l.useState)(""),i=r[0],p=r[1],g=(0,l.useState)({type:"",mensagem:""}),v=g[0],m=g[1];function x(){return(x=h(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.remove("admin");case 3:return r={headers:{"Content-Type":"application/json"}},e.next=6,d().create({baseURL:"http://localhost:5000"}).post("/signin",{user:n,password:t},r).then((function(e){c.Z.set("admin",e.data.token),f.default.push("/")})).catch((function(e){m({type:"error",mensagem:e.response.data})}));case 6:return e.prev=6,e.abrupt("return",v);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})))).apply(this,arguments)}return(0,a.jsx)("div",{className:"flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500",children:(0,a.jsxs)("div",{className:"bg-slate-300 p-4 rounded-2xl shadow-lg flex flex-col items-end",children:[(0,a.jsx)("div",{className:"w-full flex flex-col items-center py-3",children:(0,a.jsx)(o.default,{src:"/images/logo.png",width:100,height:100,className:"shadow-lg"})}),"error"===v.type?(0,a.jsx)("p",{style:{color:"red"},children:v.mensagem}):"",(0,a.jsx)(u.Z,{label:"User:",value:n,type:"text",changeValue:t}),(0,a.jsx)(u.Z,{label:"Password:",value:i,type:"password",changeValue:p}),(0,a.jsx)("div",{className:"mt-6 w-full flex flex-col items-center",children:(0,a.jsx)("button",{onClick:function(){return function(e,n){return x.apply(this,arguments)}(n,i)},className:"\n              bg-green-500 hover:bg-green-400\n              text-white rounded-lg px-11 py-3\n              shadow-lg\n            ",children:"Login"})})]})})}}},function(e){e.O(0,[675,774,888,179],(function(){return n=7237,e(e.s=n);var n}));var n=e.O();_N_E=n}]);