(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fae3643"],{"064b":function(a,t,o){"use strict";var e=o("4196"),n=o.n(e);n.a},"1c62":function(a,t,o){"use strict";o.r(t);var e=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{attrs:{id:"home"}},[o("h3",[a._v("Sabor ("+a._s(a.getLength())+"/2)")]),o("div",{staticClass:"saborContainer"},a._l(a.sabores,(function(a){return o("SaborCard",{key:a,attrs:{sabor:a}})})),1),a.showModal?o("PizzaModal",{on:{close:function(t){a.showModal=!1}}}):a._e(),o("div",{staticClass:"desktop"},[o("div",{staticClass:"desktopContainer"},[o("h3",[a._v("Borda")]),o("BordaSection",{attrs:{bordas:a.bordas}})],1),o("div",{staticClass:"desktopContainer"},[o("h3",[a._v("Tamanho")]),o("TamanhoSection",{attrs:{tamanhos:a.tamanhos}})],1)]),o("div",{staticClass:"desktopButtonContainer"},[o("button",{on:{click:function(t){return a.adicionarPizza()}}},[a._v("Nova Pizza")]),o("button",{on:{click:function(t){return a.goToBebidas()}}},[a._v("Escolher Bebida")])])],1)},n=[],r=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{attrs:{id:"saborCard"}},[o("p",[a._v(a._s(a.sabor))]),o("div",{staticClass:"sabores"},[this.saborInserido()?o("button",{staticClass:"first",on:{click:function(t){return a.apagarSabor()}}},[a._v("-")]):a._e(),this.saboresCheio()?o("button",{on:{click:function(t){return a.inserirSabor()}}},[a._v("+")]):a._e()])])},s=[],i=(o("c975"),o("4360")),c={props:["sabor"],methods:{saboresCheio:function(){return i["a"].getters.getSaboresEscolhidos.length<2},inserirSabor:function(){i["a"].commit("adicionarSabor",this.sabor)},apagarSabor:function(){i["a"].commit("removerSabor",this.sabor)},saborInserido:function(){var a=i["a"].getters.getSaboresEscolhidos,t=a.indexOf(this.sabor);return-1!==t}}},d=c,u=(o("ef91"),o("2877")),h=Object(u["a"])(d,r,s,!1,null,"68c677a4",null),l=h.exports,m=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"container",attrs:{id:"bordaSection"}},[o("div",{staticClass:"inputs"},a._l(a.bordas,(function(t){return o("div",{key:t.sabor,staticClass:"input"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.borda,expression:"borda"}],attrs:{type:"radio",name:"bordas",id:t.sabor},domProps:{value:t.sabor,checked:a._q(a.borda,t.sabor)},on:{change:function(o){a.borda=t.sabor}}}),o("label",{attrs:{for:t.sabor}},[o("span",[a._v(a._s(t.sabor))])])])})),0)])},b=[],f={name:"TamanhoSection",props:["bordas"],computed:{borda:{get:function(){return i["a"].getters.getBorda},set:function(a){i["a"].commit("escolherBorda",a)}}}},v=f,p=(o("064b"),Object(u["a"])(v,m,b,!1,null,"b9e2c66a",null)),g=p.exports,_=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"container",attrs:{id:"tamanhoSection"}},[o("div",{staticClass:"inputs"},a._l(a.tamanhos,(function(t){return o("div",{key:t.tamanho,staticClass:"input"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.tamanho,expression:"tamanho"}],attrs:{type:"radio",name:"tamanhos",id:t.tamanho},domProps:{value:t.tamanho,checked:a._q(a.tamanho,t.tamanho)},on:{change:function(o){a.tamanho=t.tamanho}}}),o("label",{attrs:{for:t.tamanho}},[o("span",[a._v(a._s(t.tamanho))])])])})),0)])},z=[],C={name:"TamanhoSection",props:["tamanhos"],computed:{tamanho:{get:function(){return i["a"].getters.getTamanho},set:function(a){i["a"].commit("escolherTamanho",a)}}}},S=C,k=(o("fdf4"),Object(u["a"])(S,_,z,!1,null,"c35c2698",null)),P=k.exports,T=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"modalContainer"},[o("div",{staticClass:"backdrop"},[o("div",{staticClass:"wrapper"},[o("div",{attrs:{id:"pizzaModal"}},[o("h4",[a._v("Pizza Builder")]),o("h5",[a._v("Ops ... Escolha os ingredientes corretamente")]),o("button",{on:{click:function(t){return a.$emit("close")}}},[a._v("OK")])])])])])},w=[],B=(o("3eb2"),{}),E=Object(u["a"])(B,T,w,!1,null,"5d408d91",null),$=E.exports,x={name:"Home",components:{SaborCard:l,BordaSection:g,TamanhoSection:P,PizzaModal:$},methods:{goToBebidas:function(){this.validarPizza()?(this.setTamanhoPrice(),i["a"].commit("adicionarPizza"),this.$router.push("/bebidas")):this.showModal=!0},getPedidos:function(){console.log(i["a"].getters.getPedidos)},getLength:function(){return i["a"].getters.getSaboresEscolhidos.length},getSabores:function(){return i["a"].getters.getSaboresEscolhidos},getSaborBorda:function(){return i["a"].getters.getBorda},getTamanho:function(){return this.$store.getters.getTamanho},setTamanhoPrice:function(){var a=this.$store.getters.getTamanho,t=0;this.$store.getters.getPizzas;switch(a){case"brotinho":t=20;break;case"média":t=30;break;case"grande":t=40;break;case"gigante":t=45}i["a"].commit("incrementarPrecoPizza",t)},adicionarPizza:function(){this.validarPizza()?(this.setTamanhoPrice(),i["a"].commit("adicionarPizza")):this.showModal=!0},validarPizza:function(){var a=this.getTamanho(),t=this.getLength(),o=this.getSaborBorda();return""===a&&0===t&&""===o?(console.log("a"),!0):""!==a&&0!==t&&""!==o}},data:function(){return{showModal:!1,sabores:["calabresa","portuguesa","mussarela","peperoni","a moda","bacon","milho","frango com catupiry","palmito","quatro queijos"],bordas:[{sabor:"nenhum",preco:0},{sabor:"cheddar",preco:3},{sabor:"creamcheese",preco:4},{sabor:"catupiry",preco:5}],tamanhos:[{tamanho:"brotinho"},{tamanho:"média"},{tamanho:"grande"},{tamanho:"gigante"}],precosTamanho:[]}}},M=x,O=(o("41ec"),Object(u["a"])(M,e,n,!1,null,"347c57fc",null));t["default"]=O.exports},"1ed4":function(a,t,o){},"2da1":function(a,t,o){},"3eb2":function(a,t,o){"use strict";var e=o("b5eb"),n=o.n(e);n.a},4196:function(a,t,o){},"41ec":function(a,t,o){"use strict";var e=o("2da1"),n=o.n(e);n.a},"9e19":function(a,t,o){},b5eb:function(a,t,o){},ef91:function(a,t,o){"use strict";var e=o("9e19"),n=o.n(e);n.a},fdf4:function(a,t,o){"use strict";var e=o("1ed4"),n=o.n(e);n.a}}]);
//# sourceMappingURL=chunk-5fae3643.267d91fd.js.map