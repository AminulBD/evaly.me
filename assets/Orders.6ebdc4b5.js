import{c as e}from"./index.cfa2ba9d.js";import{o as t,f as s,g as a,F as r,s as d,t as i,u as l,v as n}from"./vendor.7487b1ff.js";const g={data:()=>({isLoading:!0,orders:[],currentPage:1}),mounted(){this.fetchOrders(this.currentPage)},methods:{getStatusClass:e=>({pending:"bg-yellow-100 text-yellow-800",confirmed:"bg-green-100 text-"}[e]||"bg-gray-100 text-gray-800"),fetchOrders(t=1){e.get("/core/custom/orders/",{params:{page:t}}).then((({data:e})=>{this.orders=this.orders.concat(e.results),this.currentPage+=1,e.next&&e.next.length>10&&this.fetchOrders(this.currentPage)})).catch((e=>{console.log(e.response)}))},fetchDetails(e){alert("WIP ;)")}}},o={class:"bg-gray-100 py-5 min-h-screen"},p={class:"container bg-gray-100 mx-auto"},c={class:"flex flex-col"},x={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},y={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},u={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},m={class:"min-w-full divide-y divide-gray-200"},b=a("thead",{class:"bg-gray-50"},[a("tr",null,[a("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Invoice "),a("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Time "),a("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Status "),a("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Payment "),a("th",{scope:"col",class:"relative px-6 py-3"},[a("span",{class:"sr-only"},"Details")])])],-1),f={class:"bg-white divide-y divide-gray-200"},h={class:"px-6 py-4 whitespace-nowrap"},v={class:"text-sm text-gray-900"},w={class:"text-sm text-gray-500"},_={class:"px-6 py-4 whitespace-nowrap"},k={class:"text-sm text-gray-900"},D={class:"text-sm text-gray-500"},C={class:"px-6 py-4 whitespace-nowrap"},P={class:"px-6 py-4 whitespace-nowrap"},O={key:0},U={class:"text-xs leading-5 font-semibold"},j={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"};g.render=function(e,g,I,S,W,F){return t(),s("div",o,[a("div",p,[a("div",c,[a("div",x,[a("div",y,[a("div",u,[a("table",m,[b,a("tbody",f,[(t(!0),s(r,null,d(W.orders,(r=>(t(),s("tr",{key:r.id},[a("td",h,[a("div",v,"#"+i(r.id),1),a("div",w,i(r.invoice_no),1)]),a("td",_,[a("div",k,"Ordered at: "+i(e.formatDate(r.date)),1),a("div",D,"Working Days: "+i(e.workingDays(r.date)),1)]),a("td",C,[a("span",{class:["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",["pending"===r.order_status?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800","confirmed"===r.order_status?"bg-indigo-100 text-indigo-800":"bg-gray-100 text-gray-800","processing"===r.order_status?"bg-pink-100 text-pink-800":"bg-gray-100 text-gray-800","picked"===r.order_status?"bg-purple-100 text-purple-800":"bg-gray-100 text-gray-800","shipped"===r.order_status?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800","delivered"===r.order_status?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800","cancel"===r.order_status?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"]]},i(r.order_status.toUpperCase()),3)]),a("td",P,[a("div",null,[a("span",{class:["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",["paid"===r.payment_status?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800","unpaid"===r.payment_status?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","refunded"===r.payment_status?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"]]},i(r.payment_status.toUpperCase()),3)]),""!==r.payment_method?(t(),s("div",O,[a("span",U," Method: "+i(r.payment_method.toUpperCase()),1)])):l("",!0)]),a("td",j,[a("a",{href:"#",class:"text-indigo-600 hover:text-indigo-900",onClick:n((e=>F.fetchDetails(r)),["prevent"])},"Details",8,["onClick"])])])))),128))])])])])])])])])};export default g;
