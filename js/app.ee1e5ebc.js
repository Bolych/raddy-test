(function(){"use strict";var t={9290:function(t,e,r){var n=r(9242),o=r(3396);function i(t,e,r,n,i,a){const s=(0,o.up)("HomePage");return(0,o.wg)(),(0,o.j4)(s)}var a=r(7139);const s={class:"container"},c={class:"row my-2"},l=(0,o._)("div",{class:"col-md-2"},[(0,o._)("label",{for:"sortBy",class:"form-label"},"Сортировка по:")],-1),d={class:"col-md-4"},u=(0,o._)("option",{value:"none"},"Нет",-1),f=(0,o._)("option",{value:"price"},"Цена",-1),m=(0,o._)("option",{value:"rating"},"Рейтинг",-1),p=[u,f,m],v={class:"col-md-4"},y=(0,o._)("option",{value:"min-to-max"},"По возрастанию",-1),_=(0,o._)("option",{value:"max-to-min"},"По убыванию",-1),g=[y,_],h={class:"row my-2"},w=(0,o._)("div",{class:"col-md-2"},[(0,o._)("label",{for:"filterName",class:"form-label"},"Фильтр по названию:")],-1),b={class:"col-md-4"},x={class:"row elements"},O={class:"card"},B={class:"card-body"},D={class:"card-title"},j={class:"card-text"},N={class:"card-text"};function k(t,e,r,i,u,f){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",c,[l,(0,o._)("div",d,[(0,o.wy)((0,o._)("select",{id:"sortBy","onUpdate:modelValue":e[0]||(e[0]=t=>u.sortBy=t),class:"form-control"},p,512),[[n.bM,u.sortBy]])]),(0,o._)("div",v,[(0,o.wy)((0,o._)("select",{id:"sortDirection","onUpdate:modelValue":e[1]||(e[1]=t=>u.sortDirection=t),class:"form-control"},g,512),[[n.bM,u.sortDirection]])])]),(0,o._)("div",h,[w,(0,o._)("div",b,[(0,o.wy)((0,o._)("input",{id:"filterName",type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>u.filterName=t),class:"form-control"},null,512),[[n.nr,u.filterName]])])]),(0,o._)("div",x,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.sortedAndFilteredItems,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id,class:"col-md-12"},[(0,o._)("div",O,[(0,o._)("div",B,[(0,o._)("h6",D,"Название: "+(0,a.zw)(t.name),1),(0,o._)("p",j,"Цена: "+(0,a.zw)(t.price),1),(0,o._)("p",N,"Рейтинг: "+(0,a.zw)(t.rating),1)])])])))),128))])])}var P={name:"HomePage",data(){return{sortBy:"none",sortDirection:"min-to-max",filterName:"",items:[{id:1,name:"Первый",price:100,rating:.2},{id:2,name:"Второй",price:101,rating:.5},{id:3,name:"Третий",price:101,rating:.9},{id:4,name:"Четвертый",price:50,rating:.6},{id:5,name:"Пятый",price:550,rating:1.6},{id:6,name:"Шестой",price:350,rating:.2},{id:7,name:"Седьмой",price:70,rating:.1}]}},computed:{sortedAndFilteredItems(){let t=[...this.items];if(""!==this.filterName){const e=this.filterName.toLowerCase();t=t.filter((t=>t.name.toLowerCase().includes(e)))}return"none"!==this.sortBy&&t.sort(((t,e)=>"min-to-max"===this.sortDirection?t[this.sortBy]-e[this.sortBy]:e[this.sortBy]-t[this.sortBy])),t}}},C=r(89);const H=(0,C.Z)(P,[["render",k]]);var z=H,A={name:"App",components:{HomePage:z}};const F=(0,C.Z)(A,[["render",i]]);var M=F;(0,n.ri)(M).mount("#app")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,i){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],i=t[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,o,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,a=n[0],s=n[1],c=n[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var d=c(r)}for(e&&e(n);l<a.length;l++)i=a[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(d)},n=self["webpackChunkraddy_testing"]=self["webpackChunkraddy_testing"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9290)}));n=r.O(n)})();
//# sourceMappingURL=app.ee1e5ebc.js.map