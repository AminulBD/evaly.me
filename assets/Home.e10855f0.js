var e=Object.defineProperty,r=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,a=(r,o,t)=>o in r?e(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t;import{c as s,e as n,o as i,f as l,g as d,h as b,t as u,w as c}from"./vendor.7487b1ff.js";const p={computed:((e,s)=>{for(var n in s||(s={}))r.call(s,n)&&a(e,n,s[n]);if(o)for(var n of o(s))t.call(s,n)&&a(e,n,s[n]);return e})({},s("auth").mapGetters({isAuthenticated:"isAuthenticated",profile:"profile"}))},m={class:"bg-gray-100 py-2 min-h-screen"},f={class:"container mx-auto"},h={class:"w-96 bg-white border-l-4 border-t-4 border-blue-600 p-10 mx-auto"},y=b("here"),w=b(". "),g=d("div",{class:"w-96 bg-white border-l-4 mt-10 border-t-4 border-green-600 p-10 mx-auto"}," Hi folks, I'm trying to build a freaking app to track my Workdays (AKA: Kormodibosh). I build this app because I'm jobless now and have enough time to learn something new. ",-1),v=d("div",{class:"w-96 bg-white border-l-4 mt-10 border-t-4 border-red-500 p-10 mx-auto"}," Note: When you are login using your evaly username and password, All information will be stored in your browser and all safe as your computer. You can see the source linked in the footer. ",-1);p.render=function(e,r,o,t,a,s){const p=n("router-link");return i(),l("div",m,[d("div",f,[d("div",h,[b(" Hello "+u(e.profile.first_name)+", View your orders ",1),d(p,{class:"border-b-2 border-red-700",to:{name:"Orders"}},{default:c((()=>[y])),_:1}),w]),g,v])])};export default p;