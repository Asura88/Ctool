(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1009de10"],{"3b2b":function(e,o,t){var c=t("7726"),n=t("5dbc"),d=t("86cc").f,r=t("9093").f,a=t("aae3"),i=t("0bfb"),s=c.RegExp,u=s,l=s.prototype,m=/a/g,p=/a/g,x=new s(m)!==m;if(t("9e1e")&&(!x||t("79e5")((function(){return p[t("2b4c")("match")]=!1,s(m)!=m||s(p)==p||"/a/i"!=s(m,"i")})))){s=function(e,o){var t=this instanceof s,c=a(e),d=void 0===o;return!t&&c&&e.constructor===s&&d?e:n(x?new u(c&&!d?e.source:e,o):u((c=e instanceof s)?e.source:e,c&&d?i.call(e):o),t?this:l,s)};for(var f=function(e){e in s||d(s,e,{configurable:!0,get:function(){return u[e]},set:function(o){u[e]=o}})},b=r(u),g=0;b.length>g;)f(b[g++]);l.constructor=s,s.prototype=l,t("2aba")(c,"RegExp",s)}t("7a56")("RegExp")},"3ebf":function(e,o,t){"use strict";t.r(o);var c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("Tabs",{model:{value:e.current.operation,callback:function(o){e.$set(e.current,"operation",o)},expression:"current.operation"}},[t("TabPane",{attrs:{label:"正则测试",name:"test"}},[t("Row",{staticStyle:{"margin-bottom":"10px"},attrs:{gutter:16}},[t("Col",{attrs:{span:"12"}},[t("Input",{model:{value:e.current.input,callback:function(o){e.$set(e.current,"input",o)},expression:"current.input"}},[t("Select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"正则表达式"},on:{"on-change":e.commonSelect},slot:"prepend"},e._l(e.regex,(function(o,c){return t("Option",{key:c,staticStyle:{"text-align":"left"},attrs:{value:o.regex}},[e._v(e._s(o.name))])})),1)],1)],1),t("Col",{attrs:{span:"12"}},[t("Input",{model:{value:e.current.replace,callback:function(o){e.$set(e.current,"replace",o)},expression:"current.replace"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("替换内容")])])],1)],1),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"12"}},[t("Input",{attrs:{rows:10,type:"textarea",placeholder:"内容"},model:{value:e.current.content,callback:function(o){e.$set(e.current,"content",o)},expression:"current.content"}})],1),t("Col",{attrs:{span:"12"}},[t("Input",{attrs:{rows:10,type:"textarea",placeholder:"执行内容"},model:{value:e.current.output,callback:function(o){e.$set(e.current,"output",o)},expression:"current.output"}})],1)],1),t("option-block",[t("FormItem",[t("ButtonGroup",[t("Button",{attrs:{type:"primary"},on:{click:function(o){return e.handle("find")}}},[e._v("查找")]),t("Button",{attrs:{type:"primary"},on:{click:function(o){return e.handle("replace")}}},[e._v("替换")])],1)],1),t("FormItem",[t("Checkbox",{model:{value:e.current.isGlobal,callback:function(o){e.$set(e.current,"isGlobal",o)},expression:"current.isGlobal"}},[e._v("全局搜索")])],1),t("FormItem",[t("Checkbox",{model:{value:e.current.isIgnoreCase,callback:function(o){e.$set(e.current,"isIgnoreCase",o)},expression:"current.isIgnoreCase"}},[e._v("忽略大小写")])],1)],1)],1),t("TabPane",{attrs:{label:"正则语法参考",name:"reference"}},[t("Table",{attrs:{columns:e.referenceColumns,data:e.reference},scopedSlots:e._u([{key:"_text",fn:function(o){var c=o.row;return[t("div",{domProps:{innerHTML:e._s(c.text)}})]}}])})],1)],1)],1)},n=[],d=(t("a481"),t("4917"),t("3b2b"),{created:function(){this.current=Object.assign(this.current,this.$getToolData("input"))},methods:{handle:function(e){if(this.current.input&&this.current.content){var o=new RegExp(this.current.input,(this.current.isIgnoreCase?"i":"")+this.current.isGlobal?"g":"");switch(e){case"find":var t=this.current.content.match(o),c="";if(t){c+="共 "+t.length+" 个匹配项\n";for(var n=0;n<t.length;n++)c+="$"+n+" -> "+t[n]+"\r\n"}else c="没有匹配结果，请检查正则";this.current.output=c;break;case"replace":this.current.output=this.current.content.replace(o,this.current.replace);break;default:return}this.$saveToolData(this.current)}},commonSelect:function(e){this.current.input=e}},data:function(){return{current:{input:"\\w+?(\\d+)\\w+?([\\u4e00-\\u9fa5]+)",content:"hello 1949world你好世界",output:"",replace:"",isIgnoreCase:!0,isGlobal:!0,operation:"test"},regex:[{regex:"[\\u4e00-\\u9fa5]",name:"匹配中文字符"},{regex:"[^\\x00-\\xff]",name:"匹配双字节字符(包括汉字在内)"},{regex:"\\n\\s*\\r",name:"匹配空白行"},{regex:"[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?",name:"匹配Email地址"},{regex:"[a-zA-z]+://[^\\s]*",name:"匹配网址URL"},{regex:"[1][3,4,5,7,8][0-9]{9}",name:"手机"},{regex:"\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}",name:"IP地址"},{regex:"\\d{3}-\\d{8}|\\d{4}-\\d{7,8}",name:"匹配国内电话号码"},{regex:"[1-9][0-9]{4,}",name:"匹配腾讯QQ号"},{regex:"[1-9]\\d{5}(?!\\d)",name:"匹配中国邮政编码"},{regex:"([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))",name:"匹配(年-月-日)格式日期"},{regex:"[1-9]\\d*",name:"匹配正整数"},{regex:"-[1-9]\\d*",name:"匹配负整数"},{regex:"-?[1-9]\\d*",name:"匹配整数"},{regex:"[1-9]\\d*|0",name:"匹配非负整数（正整数 + 0）"},{regex:"-[1-9]\\d*|0",name:"匹配非正整数（负整数 + 0）"},{regex:"[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*",name:"匹配正浮点数"},{regex:"-[1-9]\\d*\\.\\d*|-0\\.\\d*[1-9]\\d*",name:"匹配负浮点数"}],referenceColumns:[{title:"字符",key:"name",width:100},{title:"描述",slot:"_text"}],reference:[{name:"\\",text:"将下一个字符标记为一个特殊字符、或一个原义字符、或一个向后引用、或一个八进制转义符。例如，“<code>n</code>”匹配字符“<code>n</code>”。“<code>\\n</code>”匹配一个换行符。串行“<code>\\\\</code>”匹配“<code>\\</code>”而“<code>\\(</code>”则匹配“<code>(</code>”。"},{name:"^",text:"匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，^也匹配“<code>\\n</code>”或“<code>\\r</code>”之后的位置。"},{name:"$",text:"匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“<code>\\n</code>”或“<code>\\r</code>”之前的位置。"},{name:"*",text:"匹配前面的子表达式零次或多次。例如，zo*能匹配“<code>z</code>”以及“<code>zoo</code>”。*等价于{0,}。"},{name:"+",text:"匹配前面的子表达式一次或多次。例如，“<code>zo+</code>”能匹配“<code>zo</code>”以及“<code>zoo</code>”，但不能匹配“<code>z</code>”。+等价于{1,}。"},{name:"?",text:"匹配前面的子表达式零次或一次。例如，“<code>do(es)?</code>”可以匹配“<code>does</code>”或“<code>does</code>”中的“<code>do</code>”。?等价于{0,1}。"},{name:"{n}",text:"n是一个非负整数。匹配确定的n次。例如，“<code>o{2}</code>”不能匹配“<code>Bob</code>”中的“<code>o</code>”，但是能匹配“<code>food</code>”中的两个o。"},{name:"{n,}",text:"n是一个非负整数。至少匹配n次。例如，“<code>o{2,}</code>”不能匹配“<code>Bob</code>”中的“<code>o</code>”，但能匹配“<code>foooood</code>”中的所有o。“<code>o{1,}</code>”等价于“<code>o+</code>”。“<code>o{0,}</code>”则等价于“<code>o*</code>”。"},{name:"{n,m}",text:"m和n均为非负整数，其中n&lt;=m。最少匹配n次且最多匹配m次。例如，“<code>o{1,3}</code>”将匹配“<code>fooooood</code>”中的前三个o。“<code>o{0,1}</code>”等价于“<code>o?</code>”。请注意在逗号和两个数之间不能有空格。"},{name:"?",text:"当该字符紧跟在任何一个其他限制符（*,+,?，{n}，{n,}，{n,m}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串“<code>oooo</code>”，“<code>o+?</code>”将匹配单个“<code>o</code>”，而“<code>o+</code>”将匹配所有“<code>o</code>”。"},{name:".",text:"匹配除“<code>\\</code><code>n</code>”之外的任何单个字符。要匹配包括“<code>\\</code><code>n</code>”在内的任何字符，请使用像“<code>(.|\\n)</code>”的模式。"},{name:"(pattern)",text:"匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用“<code>\\(</code>”或“<code>\\)</code>”。"},{name:"(?:pattern)",text:"匹配pattern但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用或字符“<code>(|)</code>”来组合一个模式的各个部分是很有用。例如“<code>industr(?:y|ies)</code>”就是一个比“<code>industry|industries</code>”更简略的表达式。"},{name:"(?=pattern)",text:"正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，“<code>Windows(?=95|98|NT|2000)</code>”能匹配“<code>Windows2000</code>”中的“<code>Windows</code>”，但不能匹配“<code>Windows3.1</code>”中的“<code>Windows</code>”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。"},{name:"(?!pattern)",text:"正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如“<code>Windows(?!95|98|NT|2000)</code>”能匹配“<code>Windows3.1</code>”中的“<code>Windows</code>”，但不能匹配“<code>Windows2000</code>”中的“<code>Windows</code>”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始"},{name:"(?&lt;=pattern)",text:"反向肯定预查，与正向肯定预查类拟，只是方向相反。例如，“<code>(?&lt;=95|98|NT|2000)Windows</code>”能匹配“<code>2000Windows</code>”中的“<code>Windows</code>”，但不能匹配“<code>3.1Windows</code>”中的“<code>Windows</code>”。"},{name:"(?&lt;!pattern)",text:"反向否定预查，与正向否定预查类拟，只是方向相反。例如“<code>(?&lt;!95|98|NT|2000)Windows</code>”能匹配“<code>3.1Windows</code>”中的“<code>Windows</code>”，但不能匹配“<code>2000Windows</code>”中的“<code>Windows</code>”。"},{name:"x|y",text:"匹配x或y。例如，“<code>z|food</code>”能匹配“<code>z</code>”或“<code>food</code>”。“<code>(z|f)ood</code>”则匹配“<code>zood</code>”或“<code>food</code>”。"},{name:"[xyz]",text:"字符集合。匹配所包含的任意一个字符。例如，“<code>[abc]</code>”可以匹配“<code>plain</code>”中的“<code>a</code>”。"},{name:"[^xyz]",text:"负值字符集合。匹配未包含的任意字符。例如，“<code>[^abc]</code>”可以匹配“<code>plain</code>”中的“<code>p</code>”。"},{name:"[a-z]",text:"字符范围。匹配指定范围内的任意字符。例如，“<code>[a-z]</code>”可以匹配“<code>a</code>”到“<code>z</code>”范围内的任意小写字母字符。"},{name:"[^a-z]",text:"负值字符范围。匹配任何不在指定范围内的任意字符。例如，“<code>[^a-z]</code>”可以匹配任何不在“<code>a</code>”到“<code>z</code>”范围内的任意字符。"},{name:"\\b",text:"匹配一个单词边界，也就是指单词和空格间的位置。例如，“<code>er\\b</code>”可以匹配“<code>never</code>”中的“<code>er</code>”，但不能匹配“<code>verb</code>”中的“<code>er</code>”。"},{name:"\\B",text:"匹配非单词边界。“<code>er\\B</code>”能匹配“<code>verb</code>”中的“<code>er</code>”，但不能匹配“<code>never</code>”中的“<code>er</code>”。"},{name:"\\cx",text:"匹配由x指明的控制字符。例如，<code>\\cM</code>匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的“<code>c</code>”字符。"},{name:"\\d",text:"匹配一个数字字符。等价于[0-9]。"},{name:"\\D",text:"匹配一个非数字字符。等价于[^0-9]。"},{name:"\\f",text:"匹配一个换页符。等价于\\x0c和\\cL。"},{name:"\\n",text:"匹配一个换行符。等价于\\x0a和\\cJ。"},{name:"\\r",text:"匹配一个回车符。等价于\\x0d和\\cM。"},{name:"\\s",text:"匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \\f\\n\\r\\t\\v]。"},{name:"\\S",text:"匹配任何非空白字符。等价于[^ \\f\\n\\r\\t\\v]。"},{name:"\\t",text:"匹配一个制表符。等价于\\x09和\\cI。"},{name:"\\v",text:"匹配一个垂直制表符。等价于\\x0b和\\cK。"},{name:"\\w",text:"匹配包括下划线的任何单词字符。等价于“<code>[A-Za-z0-9_]</code>”。"},{name:"\\W",text:"匹配任何非单词字符。等价于“<code>[^A-Za-z0-9_]</code>”。"},{name:"\\xn",text:"匹配n，其中n为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，“<code>\\x41</code>”匹配“<code>A</code>”。“<code>\\x041</code>”则等价于“<code>\\x04&amp;1</code>”。正则表达式中可以使用ASCII编码。."},{name:"\\num",text:"匹配num，其中num是一个正整数。对所获取的匹配的引用。例如，“<code>(.)\\1</code>”匹配两个连续的相同字符。"},{name:"\\n",text:"标识一个八进制转义值或一个向后引用。如果\\n之前至少n个获取的子表达式，则n为向后引用。否则，如果n为八进制数字（0-7），则n为一个八进制转义值。"},{name:"\\nm",text:"标识一个八进制转义值或一个向后引用。如果\\nm之前至少有nm个获得子表达式，则nm为向后引用。如果\\nm之前至少有n个获取，则n为一个后跟文字m的向后引用。如果前面的条件都不满足，若n和m均为八进制数字（0-7），则\\nm将匹配八进制转义值nm。"},{name:"\\nml",text:"如果n为八进制数字（0-3），且m和l均为八进制数字（0-7），则匹配八进制转义值nml。"},{name:"\\un",text:"匹配n，其中n是一个用四个十六进制数字表示的Unicode字符。例如，\\u00A9匹配版权符号（©）。"}]}}}),r=d,a=t("2877"),i=Object(a["a"])(r,c,n,!1,null,null,null);o["default"]=i.exports},4917:function(e,o,t){"use strict";var c=t("cb7c"),n=t("9def"),d=t("0390"),r=t("5f1b");t("214f")("match",1,(function(e,o,t,a){return[function(t){var c=e(this),n=void 0==t?void 0:t[o];return void 0!==n?n.call(t,c):new RegExp(t)[o](String(c))},function(e){var o=a(t,e,this);if(o.done)return o.value;var i=c(e),s=String(this);if(!i.global)return r(i,s);var u=i.unicode;i.lastIndex=0;var l,m=[],p=0;while(null!==(l=r(i,s))){var x=String(l[0]);m[p]=x,""===x&&(i.lastIndex=d(s,n(i.lastIndex),u)),p++}return 0===p?null:m}]}))},"5dbc":function(e,o,t){var c=t("d3f4"),n=t("8b97").set;e.exports=function(e,o,t){var d,r=o.constructor;return r!==t&&"function"==typeof r&&(d=r.prototype)!==t.prototype&&c(d)&&n&&n(e,d),e}},"8b97":function(e,o,t){var c=t("d3f4"),n=t("cb7c"),d=function(e,o){if(n(e),!c(o)&&null!==o)throw TypeError(o+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,o,c){try{c=t("9b43")(Function.call,t("11e9").f(Object.prototype,"__proto__").set,2),c(e,[]),o=!(e instanceof Array)}catch(n){o=!0}return function(e,t){return d(e,t),o?e.__proto__=t:c(e,t),e}}({},!1):void 0),check:d}}}]);