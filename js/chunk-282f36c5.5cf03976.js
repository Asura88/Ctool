(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-282f36c5"],{"74fd":function(t,n,s){"use strict";s("f66b")},d290:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("Row",{attrs:{gutter:10}},[s("Col",{attrs:{span:"10"}},[s("Row",{attrs:{gutter:6}},[s("Col",{attrs:{span:"18"}},[s("Input",{model:{value:t.current.url,callback:function(n){t.$set(t.current,"url",n)},expression:"current.url"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[s("Badge",{staticStyle:{"margin-left":"10px"},attrs:{status:t.status?"success":"error"}})],1)])],1),s("Col",{attrs:{span:"6"}},[t.status?s("Button",{attrs:{long:"",type:"error"},on:{click:function(n){return t.handle()}}},[t._v("断开")]):s("Button",{attrs:{long:"",type:"success"},on:{click:function(n){return t.handle()}}},[t._v("连接")])],1)],1),s("Input",{staticStyle:{margin:"10px 0 5px"},attrs:{rows:14,type:"textarea",placeholder:"发送内容"},model:{value:t.sendContent,callback:function(n){t.sendContent=n},expression:"sendContent"}}),s("Button",{attrs:{type:"primary",long:""},on:{click:function(n){return t.send()}}},[t._v("发送")])],1),s("Col",{attrs:{span:"14"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("交互内容")]),s("template",{slot:"extra"},[s("Button",{staticStyle:{"margin-right":"5px"},attrs:{size:"small",type:"primary"},on:{click:function(n){return t.copyAll()}}},[t._v("复制全部")]),s("Button",{attrs:{size:"small",type:"primary"},on:{click:function(n){return t.clear()}}},[t._v("清空")])],1),s("div",{staticClass:"lists-block",staticStyle:{height:"300px",overflow:"hidden","overflow-y":"auto"},attrs:{id:"log"}},t._l(t.lists,(function(n,e){return s("div",{key:e},["send"===n.type?s("div",{staticClass:"item",staticStyle:{color:"green"}},[t._v("\n                        你 "+t._s(n.time)+"\n                    ")]):"accept"===n.type?s("div",{staticClass:"item",staticStyle:{color:"blue"}},[t._v("\n                        服务端 "+t._s(n.time)+"\n                    ")]):s("div",{staticClass:"item"},[t._v("\n                        "+t._s(n.time)+"\n                    ")]),s("div",{staticClass:"item"},[s("Icon",{staticStyle:{cursor:"pointer"},attrs:{type:"md-copy"},on:{click:function(s){return t.copy(n.content)}}}),t._v("\n                        "+t._s(n.content)+"\n                    ")],1)])})),0)],2)],1)],1)},o=[],i=s("c1df"),r=s.n(i),c={created:function(){this.current=Object.assign(this.current,this.$getToolData())},methods:{handle:function(){return this.status?this.close():this.connect()},connect:function(){var t=this,n=new WebSocket(this.current.url);n.onopen=function(n){t.onOpen(n)},n.onclose=function(n){t.onClose(n)},n.onmessage=function(n){t.onMessage(n)},n.onerror=function(n){t.onError(n)},this.ws=n},close:function(){this.ws.close()},clear:function(){this.lists=[]},log:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"other";this.lists.push({content:t,type:n,time:r()().format("YYYY-MM-DD HH:mm:ss")}),this.$nextTick((function(){var t=document.getElementById("log");t.scrollTop=t.scrollHeight}))},copy:function(t){this.$clipboardCopy(t)},copyAll:function(){this.copy(JSON.stringify(this.lists))},send:function(){try{if(!this.status)return this.$Message.error("ws还没有连接，或者连接失败，请检测");if(!this.sendContent)return this.$Message.error("发送内容不能为空");this.ws.send(this.sendContent),this.log(this.sendContent,"send")}catch(t){this.log("错误异常: "+t)}},onOpen:function(){this.status=!0,this.log("连接成功")},onClose:function(){this.status=!1,this.log("连接关闭")},onMessage:function(t){this.log(t.data,"accept")},onError:function(t){this.log("错误异常: "+t.data())}},data:function(){return{current:{url:"ws://echo.websocket.org"},status:!1,wx:null,sendContent:"",lists:[]}}},l=c,a=(s("74fd"),s("2877")),u=Object(a["a"])(l,e,o,!1,null,"e3373894",null);n["default"]=u.exports},f66b:function(t,n,s){}}]);